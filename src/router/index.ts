import { createRouter, createWebHistory } from "vue-router";
import Transition from "@/views/Transition.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/compositionApi",
    },
    {
      path: "/compositionApi",
      component: () =>
        import(
          /* webpackChunkName: "composition api" */ "@/views/CompositionApi.vue"
        ),
      name: "CompositionApi",
    },
    {
      path: "/optionalApi",
      component: () =>
        import(
          /* webpackChunkName: "optional api" */ "@/views/OptionalApi.vue"
        ),
      name: "about",
    },
    { path: "/transition", component: Transition, name: "transition" },
  ],
});
