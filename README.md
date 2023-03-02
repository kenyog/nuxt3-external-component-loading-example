
# Nuxtアプリケーション実行時に別サーバーからコンポーネントを読み込んで表示するサンプル

Vue3でアプリケーションで、そのアプリケーションをビルドしたあとからでも、プラグ
イン的にコンポーネントを読み込んで描画する方法を探して試行錯誤したので、その方
法を簡単なアプリケーションにまとめてみた。

## 経緯

Vue3のドキュメントには[動的コンポーネント](https://ja.vuejs.org/guide/essentials/component-basics.html#dynamic-components)
という項目があるけど、これは動的にコンポーネントの切り替えを行う機能であって、動的にコンポーネントを読み込むわけではない。

また、[非同期コンポーネント](https://ja.vuejs.org/guide/components/async.html#loading-and-error-states)という項目があって、
これが所望の動的な読み込みを実現しているけど、肝心の`.vue`コンポーネントを`.js`ファイルにコンパイルする方法は記載されていない。

というわけで、以下の機能をこのリポジトリのサンプルで例示している

* `.vue`ファイルをビルドして、ブラウザで読み込める形式にする --> [./component-building-example](./component-building-example)
* `.vue`ファイルをhttp で公開する --> [./component-building-example](./component-building-example)
* Nuxtアプリケーションで公開された`.vue`を読み込んで描画する --> [./component-loading-example](./component-loading-example)


## References

参考にしたサイト

* [vue3-distributed-component](https://github.com/annlumia/vue3-distributed-component)
* [Distributed Vue.js Applications Part 1: Loading Components via HTTP](https://markus.oberlehner.net/blog/distributed-vue-applications-loading-components-via-http/)
* [Stackoverflow:Vue 3 external component/plugin loading in runtime](https://stackoverflow.com/questions/63581504/vue-3-external-component-plugin-loading-in-runtime)
* [multiple library build example](https://github.com/vitejs/vite/discussions/1736#discussioncomment-3229793)
* [Vue.js:非同期コンポーネント](https://ja.vuejs.org/guide/components/async.html#async-components)

