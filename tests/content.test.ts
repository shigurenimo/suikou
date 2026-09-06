import assert from "node:assert/strict";
import test from "node:test";
import { usePostFiles } from "../app/hooks/usePostFiles";
import { getAdminRedirect } from "../app/utils/getAdminRedirect";
import { toDateText } from "../app/utils/toDateText";
import { getStaticPaths, getStaticProps } from "../pages/posts/[id]";
import { readMdFiles } from "../app/utils/readMdFiles";
import { NewsPost } from "../app/types/newsPost";

test("attachments accept CMS public paths, uppercase extensions and query strings", () => {
  assert.deepEqual(
    usePostFiles(
      [
        null,
        undefined,
        "",
        "/public/uploads/photo.JPG",
        "public/uploads/photo.JPG",
        "/uploads/report.PDF?download=1",
        "https://example.com/public/document.pdf#page=2",
      ],
      [".pdf", ".jpg"],
    ),
    [
      "/uploads/photo.JPG",
      "/uploads/report.PDF?download=1",
      "https://example.com/public/document.pdf#page=2",
    ],
  );
});

test("every news and media post linked from home has a static detail route", async () => {
  const result = await getStaticPaths({});
  const paths = new Set(
    result.paths.map((path) => (typeof path === "string" ? path : path.params.id)),
  );
  for (const collection of ["news-posts", "media-posts"]) {
    const posts = await readMdFiles<NewsPost>(collection);
    for (const post of posts) assert.ok(paths.has(post.id), `${collection}/${post.id}`);
  }
  assert.equal(result.fallback, false);
});

test("media detail resolves its content and missing posts return 404", async () => {
  const [media] = await readMdFiles<NewsPost>("media-posts");
  const result = await getStaticProps({ params: { id: media.id } });
  assert.ok("props" in result);
  assert.deepEqual((await result.props).post, media);
  assert.deepEqual(await getStaticProps({ params: { id: "does-not-exist" } }), { notFound: true });
});

test("identity redirects keep the token and cannot loop on localhost or admin", () => {
  assert.equal(
    getAdminRedirect("http://localhost:3000/#recovery_token=example"),
    "http://localhost:3000/admin/#recovery_token=example",
  );
  assert.equal(
    getAdminRedirect("https://suikou.io/posts/example#invite_token=abc&state=123"),
    "https://suikou.io/admin/#invite_token=abc&state=123",
  );
  assert.equal(getAdminRedirect("http://localhost:3000/admin/#recovery_token=example"), null);
  assert.equal(getAdminRedirect("https://suikou.io/#token-explanation"), null);
});

test("dates include the correct year, month and day labels", () => {
  assert.equal(toDateText("2020/12/31"), "2020年12月31日");
});
