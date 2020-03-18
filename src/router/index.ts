import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Transition from '@/views/Transition.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/transition', component: Transition, name: 'transition' },
  ],
});
