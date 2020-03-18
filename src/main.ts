import { createApp } from 'vue';
import { router } from './router';
import { store } from './store';
import App from './App.vue';

// 不影响程序运行，但是会抛出错误
// INTERNAL ERROR(undefined,undefined) When you use `vue` option, make sure to install `vue-template-compiler`.
// https://github.com/vuejs/vue-cli-plugin-vue-next/issues/5

// rfcs https://github.com/vuejs/rfcs/tree/master/actzive-rfcs
// 所有的特性 https://github.com/vuejs/rfcs/pulls?q=is%3Apr+is%3Amerged+label%3A3.x
createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
