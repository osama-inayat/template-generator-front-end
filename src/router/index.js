import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import List from "../components/TemplatesList.vue";
import CreateTemplate from "../components/CreateTemplate.vue";
import AddItem from "../components/AddItem.vue";
import ProductsListings from "../components/ProductsListings.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/my-templates",
      name: "my-templates",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: List,
    },
    {
      path: "/template/:id/edit",
      name: "edit-template",
      component: CreateTemplate,
    },
    {
      path: "/template/:id/add-body",
      name: "add-template",
      component: AddItem,
    },
    {
      path: "/template/:id/all-listings",
      name: "all-listings",
      component: ProductsListings,
    },
    // route level code-splitting
  ],
});

export default router;
