import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Newstats from "./views/Newstats.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/newstats", name: "newstats", component: Newstats },
  ],
});

createApp(App).use(router).mount("#app");
