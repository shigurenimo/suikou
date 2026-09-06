# デザイン規約

このサイトのUIは、shadcn/uiの **Base UI / base-sera** を基準とする。設定の正本は `components.json`、テーマは `app/index.css`、UI部品は `app/components/ui/` に置く。

## コンポーネント

- Card、Button、Sheet、Separatorなど、対応するshadcn/ui部品があるものはそれを使う。
- 色、角丸、影、枠線、文字サイズ・太さ、コントロールの高さ、部品内部の余白は標準を使う。利用側の `className` で再定義しない。
- 見た目の選択は公開された `variant`・`size` で行う。現在地はナビゲーションの `secondary` variantと `aria-current="page"` で示す。
- `className` は幅・配置・折り返し・スクロールなどのレイアウトに使う。部品間の余白は外側のラッパーに指定する。
- Cardの内側余白は `CardHeader`・`CardContent`・`CardFooter` に任せる。Card本体への `p-*`・`gap-*` の追加で構造を代用しない。
- 見出しには `CardTitle`、補足には `CardDescription`、右上の操作には `CardAction` を使う。書籍の画像と説明を並べる行は `CardContent` 内で構成し、タイトル・補足にも共通部品を使う。
- `CardTitle` はdivを出力するため、子に意味のあるh1/h2を置く。見出し要素に文字サイズなどを重ねて指定しない。
- 内容のレイアウトを持たない `CardContent` への `flex`・`gap-*` は許可する。既定のpaddingは変更しない。

```tsx
<Card>
  <CardHeader>
    <CardTitle>
      <h2>記事のタイトル</h2>
    </CardTitle>
    <CardDescription>日付や英語タイトル</CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col gap-4">
    <p>本文</p>
  </CardContent>
</Card>
```

`<Card className="rounded-md shadow-lg text-base p-4">` のような指定は禁止する。内側のdiv、インラインstyle、グローバルCSSから同じ上書きを行うことも禁止する。

## 余白スケール

アプリ側で指定するpadding・margin・gap・spaceの非ゼロ値は、**2・4・8・16・32・64px** のみとする。数値はpxであり、Tailwindのクラス番号ではない。ブラウザの標準文字サイズ16pxを基準に、実装ではremベースのユーティリティを使う。

| 基準値 | Tailwindの数値 | 例        |
| ------ | -------------- | --------- |
| 2px    | `0.5`          | `gap-0.5` |
| 4px    | `1`            | `gap-1`   |
| 8px    | `2`            | `gap-2`   |
| 16px   | `4`            | `p-4`     |
| 32px   | `8`            | `p-8`     |
| 64px   | `16`           | `mt-16`   |

- `0` は余白の解除、marginの `auto` は配置用途として許可する。
- レスポンシブ指定にも同じスケールを適用する。ページの余白と一覧の間隔は基本16px、md以上では32pxとする。
- 12px・20px・24px・48px、任意値の `p-[...]`・`gap-[...]`、負の余白は使わない。
- Tailwindの `--spacing` を変更してクラスの意味を変えない。

### 適用範囲

| 対象                                       | 方針                                            |
| ------------------------------------------ | ----------------------------------------------- |
| `pages/`・`app/components/` のアプリ実装   | 上記の余白スケールを適用                        |
| `app/components/ui/` のshadcn部品内部      | base-seraの既定寸法を維持                       |
| 文字サイズ・行高・文字間隔                 | 余白スケールの対象外。部品内はshadcn標準        |
| 枠線・フォーカスリング・アイコン・操作領域 | 余白スケールの対象外。shadcn標準を維持          |
| ページ幅・画像寸法・ブレークポイント       | レイアウト寸法として別管理                      |
| `/admin/`                                  | Decap CMSの管理画面。公開サイトのUI規約の対象外 |

たとえばCardHeaderの6pxのgapやButtonの高さ・内側余白は、shadcn内部の既定値として保持する。この規約を理由に `ui/` の生成コードや部品のCSS変数を変更しない。

## 色・画像・文字

- 色は `background`・`foreground`・`card`・`primary`・`muted-foreground`・`border` などの意味付きトークンを使う。利用側に `text-blue-400` などのパレット直指定を追加しない。
- テーマ値の管理は `app/index.css` に集約する。ダークテーマとNoto Sans JPを使用する。
- ページやMarkdown固有の見出しはネイティブのh1/h2/h3とTailwindの文字トークンで階層を表す。shadcn部品の見出しの見た目を再実装しない。
- 書影・記事画像は縦横比を保持し、内容を切り抜かない。角丸や独自の影を追加しない。
- 本文のリンクは `text-primary` と下線で区別する。

## リンク・操作・レスポンシブ

- 遷移は `<a>` またはNext.jsの `Link`、状態変更は `Button` を使う。
- ボタンに見せるリンクは公式の `buttonVariants` を使い、独自の高さ・padding・文字装飾を追加しない。Base UIのButtonをanchorとして描画するとリンクの意味が変わるため使用しない。
- `buttonVariants` を使うリンクには `data-slot="button"` を付け、通常の本文リンク用フォーカス装飾が重ならないようにする。
- 幅の狭い画面では外側の行を折り返す。収めるためにボタンを縮めたり文字を小さく上書きしたりしない。
- デスクトップのサイドバーは256px、書影は128px、文章の最大幅は `max-w-7xl` とする。これらは余白とは別のレイアウト寸法。
- md未満はSheetによるモバイルメニュー、md以上はサイドバーを表示する。
- フォーカス表示、見出し階層、リンクの意味、SheetのEscape操作・フォーカス復帰を維持する。

## 維持と検証

`npm run lint:design` はアプリ側の静的な余白ユーティリティ、パレット直指定、インラインstyle、shadcn部品に渡すclassNameを検査する。`npm run lint`・`npm run check`・`npm run build` に組み込み、公開前にも規約違反を検出する。CSSによる間接的な上書きや動的に組み立てた値はコードレビューでも確認する。

- `npm run check` で規約チェック・型・既存の振る舞いを確認する。
- UIを変更したら https://suikou.io.localhost/ でPC・320px/390pxのモバイル表示を確認する。
- Cardの角丸・影・内側余白、長いタイトル、PDFリンク、メニューの現在地・キーボード操作を確認する。
- `shadcn add -o -y -a` で更新した場合も利用側へ見た目の上書きを戻さない。日本語の操作ラベルなど、表示言語の調整は維持する。

参照: [shadcn Card](https://ui.shadcn.com/docs/components/base/card)、[shadcn Button / As Link](https://ui.shadcn.com/docs/components/base/button#as-link)。
