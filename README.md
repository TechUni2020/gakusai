## ドキュメント

### 技術スタック

- Next.js
- TypeScript
- Mantine
- CSSmodules
- tanstack-query: データフェッチライブラリ。useEffect の辛い部分を解決してくれる。

### 今後もし必要であれば

- Recoil: グローバルステート
- react-hot-toast: おしゃれなアラート

### フォルダ構成

- components: プロジェクトの規模的に、そこまで大きくならないと思うので、基本的にはここに。
  - ui: プロジェクトを通して汎用的なコンポーネントはここに
- constants: 定数をここに
- pages: ルーティングとなる。pages/about.tsx とすれば、それが localhost:3000/about になる
- styles: CSSmodules で書いたスタイルをここに

あとは必要に応じて追加していく
