# vue-3-with-ts

## 已知问题
1、所有已支持特性参见[rfcs](https://github.com/vuejs/rfcs/tree/master/actzive-rfcs)和[已合并rfcs](https://github.com/vuejs/rfcs/pulls?q=is%3Apr+is%3Amerged+label%3A3.x)

2、关于启动报错``INTERNAL ERROR(undefined,undefined) When you use `vue` option, make sure to install `vue-template-compiler`.``
参见[issue](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/5)

3、`Vue3`使用`@vue/compiler-sfc`编译，而`@vue/cli`只是通过插件支持了新版本，lint还是检查了`vue-template-compiler`，故无法通过lint。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
