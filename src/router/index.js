import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/layout/index.vue";
import Home from "../views/home.vue";
import Archive from "../views/archive/index.vue"
import About from "../views/about/index.vue"
import Talk from "../views/talk/index.vue"
import Article from "../views/article/index.vue"

const routes = [
  {
    name: "Layout",
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        name: "Home",
        path: "home",
        component: Home
      },
      {
        name: "Article",
        path: "article",
        component: Article
      },
      {
        name: "Archive",
        path: "archive",
        component: Archive
      },
      {
        name: "Talk",
        path: "talk",
        component: Talk
      },
      {
        name: "More",
        path: "more",
        children: [
          {
            name: "About",
            path: "about",
            component: About
          },
        ]
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;