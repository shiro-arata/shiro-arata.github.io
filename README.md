# Shiro Arata – 研究者個人サイト（Version 4）

## 変更点

- 顔写真をいただいた写真に差し替え、右側に円形表示。
- Scopusを `https://www.scopus.com/authid/detail.uri?authorId=57416769300` に更新。
- 川久保研究室を `https://platform-clover.net/feature/kawakubo` に更新。
- ご提供の `研究スライド.pdf` の5ページを高解像度のWebP画像に変換し、研究テーマをクリックしたときに**同じページ内**で展開して表示。
- 研究テーマ1：1ページ、テーマ2：2ページ、テーマ3：2ページ。各スライドのクリックで原寸画像を別タブに表示。PDFリンクも残しています。
- 「Office environment and employee differences by company health management certification」をテーマ1の**関連論文欄だけ**から削除。Publicationsの25編には残しています。

## ファイル構成

- `index.html` — 1ページの本文・論文データ（原著論文25編、2022–2026年）。
- `style.css` — 配色、フォント、レイアウト。エメラルドのアクセント `#087865`。
- `script.js` — 研究テーマの展開・収納、論文一覧の年別切替。
- `images/profile.png` — ご提供の顔写真（200 × 200 px）。
- `assets/research-poe-1.webp` — 提供PDFの1ページ目。
- `assets/research-thermal-1.webp`, `assets/research-thermal-2.webp` — PDFの2・3ページ目。
- `assets/research-wellbeing-1.webp`, `assets/research-wellbeing-2.webp` — PDFの4・5ページ目。
- `assets/research-poe.pdf`, `assets/research-thermal.pdf`, `assets/research-wellbeing.pdf` — 提供PDFから切り出したオリジナルのPDF。画像では小さくて読みにくい場合に開けます。

## 開く・編集する

1. ZIPファイルを展開してください。
2. `index.html` をブラウザで開いてください。インターネットへの接続があるとGoogle Fontsも表示されます。
3. Researchの3つの行をクリックすると、画像と関連論文がその場で展開します。画像自体をクリックすると別タブで拡大できます。
4. Publicationsの年をクリックするとその年の論文を表示します。`All`で25編を表示できます。
5. 研究スライドを更新する場合は、対象の画像とPDFを同じファイル名で差し替えてください。**画像も更新しないとHPの表示は変わりません**。

## 公開前に確認すること

- 大学の所属・肩書き・メールアドレス（今後変更される可能性があるため）。
- `2026年 家庭での脱炭素アクション…` の正式な掲載号・DOI（業績目録時点では未定）。
- 顔写真（提供画像は200 × 200 pxで、デスクトップの高解像度ディスプレイではやや柔らかく表示されることがあります）。
- スライド内の画像・写真を一般公開して問題ないか。

## GitHub Pagesで公開

1. GitHubにリポジトリ `ユーザー名.github.io` を作成します。
2. このフォルダの**中身**をリポジトリのルートにアップロードします。`index.html` がルートにある必要があります。
3. `Settings` → `Pages` → `Deploy from a branch` → `main` / `/(root)` を選択します。
4. 数分後、 `https://ユーザー名.github.io/` でアクセスできます。

## デザインについて

背景は `#fafaf8`、基本文字色 `#192621`、アクセントは `#087865`。Google FontsのInterとNoto Sans JPを採用しています。スライドはブラウザ内蔵PDFビューアではなく画像で表示するので、スクロールバーやツールバーが重なりません。
