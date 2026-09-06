import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { BoxCardPost } from "../app/components/BoxCardPost";
import { BoxCardClassPost } from "../app/components/BoxCardClassPost";
import { BoxMarkdown } from "../app/components/BoxMarkdown";
import { NewsPost } from "../app/types/newsPost";

const post: NewsPost = {
  id: "example",
  type: "news-posts",
  title: "お知らせ",
  title_en: "News",
  date: "2020/12/31",
  external_url: "https://example.com/article",
  file: null,
  file_a: null,
  file_b: null,
  file_c: null,
  content: "",
};

test("external-only posts expose a real link on both cards and detail pages", () => {
  for (const detail of [false, true]) {
    const html = renderToStaticMarkup(<BoxCardPost post={post} detail={detail} />);
    assert.match(html, /<a[^>]+href="https:\/\/example.com\/article"[^>]*>外部リンク<\/a>/);
    assert.doesNotMatch(html, /role="button"|PDFファイル/);
    assert.match(html, detail ? /<h1[^>]*>お知らせ<\/h1>/ : /<h2[^>]*>お知らせ<\/h2>/);
  }
});

test("class cards format real dates and hide ordering placeholder dates", () => {
  const dated = renderToStaticMarkup(<BoxCardClassPost post={post} />);
  assert.match(dated, /2020年12月31日/);
  const undated = renderToStaticMarkup(<BoxCardClassPost post={{ ...post, date: "1970/02/01" }} />);
  assert.doesNotMatch(undated, /1970/);
});

test("invalid external URLs do not create broken links or hide valid attachments", () => {
  for (const external_url of ["Message for Marie", "https://", "javascript:alert(1)", ""]) {
    for (const detail of [false, true]) {
      const html = renderToStaticMarkup(
        <BoxCardPost
          post={{ ...post, external_url, file: "/public/uploads/report.pdf" }}
          detail={detail}
        />,
      );
      assert.doesNotMatch(html, /外部リンク/);
      assert.match(html, /href="\/uploads\/report.pdf"/);
    }
  }
});

test("markdown preserves paragraphs, heading semantics and normalizes media paths", () => {
  const html = renderToStaticMarkup(
    <BoxMarkdown>
      {
        "### 見出し\n\n**段落**\n\n[PDF](/public/uploads/report.pdf)\n\n![図](/public/uploads/photo.jpg)"
      }
    </BoxMarkdown>,
  );
  assert.match(html, /<h3[^>]*>見出し<\/h3>/);
  assert.match(html, /<p[^>]*><strong>段落<\/strong><\/p>/);
  assert.match(html, /href="\/uploads\/report.pdf"/);
  assert.match(html, /src="\/uploads\/photo.jpg"/);
  assert.doesNotMatch(html, /node="/);
});
