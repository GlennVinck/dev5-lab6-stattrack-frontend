import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Newstats from "../views/Newstats.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/newstats", name: "newstats", component: Newstats },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
