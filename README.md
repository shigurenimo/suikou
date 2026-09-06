# suikou

仲座栄三 新力学研究所の公開サイト。Next.js 16のPages RouterとReact 19でMarkdownの記事を静的HTMLに生成します。UIはshadcn/ui（Base UI / base-sera）とTailwind CSS 4、型チェックはTypeScript 7を使用しています。

## 開発

Node.js 22.12以上とnpmを使用します。

```bash
npm ci
npm run dev
```

Portlessを使う場合は、Node.js 24以上とインストール済みの `portless` で次を実行します。

```bash
portless
```

`portless.json` の設定により、開発サイトは https://suikou.io.localhost/ で開きます。`npm run dev` で直接起動した場合は http://localhost:3000 です。CMSをローカルで使う場合は、直接起動したサイトと、別のターミナルで `npm run dev:netlify` を起動し、http://localhost:3000/admin/ を開きます。

## 検証とビルド

```bash
npm run check   # フォーマット・lint・型チェック・回帰テスト
npm run fmt     # ソースコードの整形
npm run build   # 本番ビルドと静的書き出し
```

静的ファイルは `out/` に出力します。`npm start` で書き出し後のサイトを http://localhost:3000 から確認できます。Netlifyも `npm run build` を実行し、`out/` を公開します。個別の検証は `npm run lint`、`npm run typecheck`、`npm test` で実行できます。

`next.config.js` の `output: "export"` で静的出力を有効にしています。Markdownはビルド時にファイルから読み込むため、専用のwebpackローダーは不要です。

## コンテンツとUI

- 記事・固定ページ: `public/collections/`
- 添付ファイル: `public/uploads/`
- CMS: `/admin/`（`public/admin/` のDecap CMS。CDNから読み込み）
- サイトのコンポーネント: `app/components/`
- shadcn/uiの部品: `app/components/ui/`
- テーマ: `app/index.css`
- shadcn設定: `components.json`

お知らせとメディア掲載は、ともに `/posts/[id]` の詳細ページを持ちます。記事のファイル名は両コレクション間で一意にしてください。CMSで保存された `/public/uploads/` 形式の添付パスは表示時に `/uploads/` に変換します。

`public/` 内のCMSコンテンツは自動整形の対象外です。

依存ライブラリは検証したバージョンに固定しています。Decapのローカルサーバーが使うExpress 4の依存範囲では `qs` の修正版を取得できないため、`overrides` で6.16.0を指定しています。
