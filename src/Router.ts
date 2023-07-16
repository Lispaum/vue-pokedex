import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import GraphsView from "./views/GraphsView.vue";

export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/graphs",
      component: GraphsView,
    },
  ],
});
export default router;
