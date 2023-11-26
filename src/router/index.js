import { createRouter, createWebHistory } from "vue-router";

import Stats from "../views/Home.vue";
import Newresult from "../views/Newresult.vue";

const routes = [
  { path: "/", name: "home", component: Stats },
  { path: "/newresult", name: "newresult", component: Newresult },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
