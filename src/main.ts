import { createApp } from 'vue';
import { router } from './router';
import { store } from './store';
import App from './App.vue';

// rfcs https://github.com/vuejs/rfcs/tree/master/actzive-rfcs
// 所有的特性 https://github.com/vuejs/rfcs/pulls?q=is%3Apr+is%3Amerged+label%3A3.x
// 文档暂时可以参考composition api https://composition-api.vuejs.org/#basic-example
createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
