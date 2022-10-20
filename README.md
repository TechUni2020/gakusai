## ドキュメント

### 技術スタック

- Next.js
- TypeScript
- Mantine
- Firebase

### 今後もし必要であれば

- Recoil: グローバルステート
- react-hot-toast: おしゃれなアラート

### フォルダ構成

- components: プロジェクトの規模的に、そこまで大きくならないと思うので、基本的にはここに。
  - Element: プロジェクトを通して汎用的なコンポーネントはここに
- constants: 定数をここに
- pages: ルーティングとなる。pages/about.tsx とすれば、それが localhost:3000/about になる

あとは必要に応じて追加していく

### 環境構築

```
git clone https://github.com/TechUni2020/kansei-university-order.git

<!-- このプロジェクトではyarnを使います -->

<!-- yarnをまだインストールしていない人 -->
npm  install -g yarn
<!--  -->

yarn

<!-- localhost:3000が立ち上がる。Hello Worldが出ればおっけい！ -->
yarn dev

@code-yy(よしの)から、firebaseの環境設定を教えてもらってください
```
