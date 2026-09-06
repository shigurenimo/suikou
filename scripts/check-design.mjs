import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const spacing = new Set(["0", "0.5", "1", "2", "4", "8", "16", "auto"]);
const errors = [];

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const file = path.join(directory, entry.name);
      if (file === path.join("app", "components", "ui")) return [];
      if (entry.isDirectory()) return collect(file);
      return file.endsWith(".tsx") ? [file] : [];
    }),
  );
  return files.flat();
}

function report(file, source, index, message) {
  const line = source.slice(0, index).split("\n").length;
  errors.push(`${file}:${line}: ${message}`);
}

function strings(expression) {
  return [...expression.matchAll(/["'`]([^"'`]*)["'`]/g)].flatMap((match) =>
    match[1].split(/\s+/).filter(Boolean),
  );
}

function checkLayout(file, source, index, component, classes) {
  for (const utility of classes) {
    const base = utility.split(":").at(-1);
    const layout =
      /^(?:(?:min-|max-)?[wh]-.+|(?:flex|grid|block|hidden)|flex-(?:1|auto|none|col|row|wrap|nowrap)|(?:grid-cols|col-span|row-span|items|justify|self|order|overflow(?:-[xy])?|shrink|grow|gap(?:-[xy])?)-.+)$/;
    if (!layout.test(base)) {
      report(
        file,
        source,
        index,
        `${component}: ${utility} は見た目を上書きします。variant / size または外側のレイアウトを使ってください。`,
      );
    } else if (base.startsWith("gap-") && component !== "CardContent") {
      report(
        file,
        source,
        index,
        `${component}: 既定のgapを上書きせず、内容のラッパーに余白を指定してください。`,
      );
    } else if (component === "buttonVariants" || component === "Button") {
      if (/^(?:(?:min-|max-)?h-|w-(?!full$))/.test(base)) {
        report(file, source, index, `${component}: コントロールの寸法はsizeで指定してください。`);
      }
    }
  }
}

const requested = process.argv.slice(2);
const files = requested.length
  ? requested
  : (await Promise.all([collect("app/components"), collect("pages")])).flat();

for (const file of files) {
  const source = await readFile(file, "utf8");
  // Static utility names include responsive/state prefixes; generated ui/ is excluded.
  for (const match of source.matchAll(
    /(?<![\w-])(-?(?:[mp][xytrblse]?|gap(?:-[xy])?|space-[xy])-(\[[^\]]*\]|\([^)]*\)|[\w.!]+))/g,
  )) {
    if (
      match[1].startsWith("-") ||
      !spacing.has(match[2]) ||
      (match[2] === "auto" && !match[1].startsWith("m"))
    ) {
      report(
        file,
        source,
        match.index,
        `${match[1]}: 余白は2/4/8/16/32/64px（Tailwind: 0.5/1/2/4/8/16）を使用してください。`,
      );
    }
  }
  for (const match of source.matchAll(
    /\b(?:bg|text|border|ring|fill|stroke)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d+/g,
  )) {
    report(
      file,
      source,
      match.index,
      `${match[0]}: 色はshadcnの意味付きトークンを使用してください。`,
    );
  }
  const inlineStyle = /\bstyle\s*=/.exec(source);
  if (inlineStyle)
    report(
      file,
      source,
      inlineStyle.index,
      "インラインstyleでデザイン規約を迂回しないでください。",
    );

  const components = new Map();
  for (const match of source.matchAll(
    /import\s*\{([^}]+)\}\s*from\s*["']@\/app\/components\/ui\/[^"']+["']/g,
  )) {
    for (const specifier of match[1].split(",")) {
      const [original, local = original] = specifier.trim().split(/\s+as\s+/);
      components.set(local, original);
    }
  }
  for (const tag of source.matchAll(/<([A-Z]\w*)\b([^<>]*?)>/gs)) {
    const component = components.get(tag[1]);
    if (!component) continue;
    const attribute = /className\s*=\s*("[^"]*"|'[^']*'|\{[\s\S]*\})/.exec(tag[2]);
    if (!attribute) continue;
    const classes = strings(attribute[1]);
    if (!classes.length)
      report(
        file,
        source,
        tag.index,
        `${component}: classNameには確認可能なリテラルを使用してください。`,
      );
    checkLayout(file, source, tag.index, component, classes);
  }
  // Link semantics require buttonVariants with <a> / Next Link, not Base UI Button.
  for (const match of source.matchAll(/\bbuttonVariants\(([^)]*)\)/g)) {
    if (/\bclass(?:Name)?\s*:/.test(match[1])) {
      report(
        file,
        source,
        match.index,
        "buttonVariantsにはvariant / sizeを指定し、見た目の上書きを渡さないでください。",
      );
    }
  }
  for (const match of source.matchAll(
    /className\s*=\s*\{cn\(\s*buttonVariants\([^)]*\)([\s\S]*?)\)\}/g,
  )) {
    checkLayout(file, source, match.index, "buttonVariants", strings(match[1]));
  }
}

if (errors.length) {
  process.stderr.write(`${errors.join("\n")}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`Design rules passed (${files.length} application files).\n`);
}
