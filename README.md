# mpa-pwa

**Deprecated, please read [vue-cli3.0](https://cli.vuejs.org/config/#pwa)**

该项目已废弃，请参考vue-cli3.0的[pwa章节](https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE)构建项目。

多页面的打包框架，从ios对待pwa的态度更倾向于单页面。但是谷歌的更是倾向于pwa不仅仅是单页面应用，它可以应付多页面。像一众国内大厂（如饿了么）就是将网页应用切分为多页面。不同页面使用不同的manifest。

### 使用方法

```shell
$ npm install -g vue-cli
$ vue init brandonxiang/mpa-pwa my-project
$ cd my-project
$ npm install
$ npm run build:dll
$ npm run dev
$ npm run build
```





