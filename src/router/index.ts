import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Partners from "../pages/Partners.vue";
import PrivacyPolicy from "../pages/PrivacyPolicy.vue";
import ContactVify from "../pages/ContactVify.vue";
import WhyChoose from "../pages/WhyChoose.vue";
import Blog from "../pages/Blog.vue";
import Layout from "../components/Layout.vue";
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", component: Home },
      { path: "about", component: About },
      { path: "partners", component: Partners },
      { path: "privacyPolicy", component: PrivacyPolicy },
      { path: "contactVify", component: ContactVify },
      { path: "whyChoose", component: WhyChoose },
      { path: "blog", component: Blog },
      {
        path: "author/tony",
        component: () => import("../pages/author/Tony.vue"),
      },
      {
        path: "author/daisy",
        component: () => import("../pages/author/Daisy.vue"),
      },
      {
        path: "author/lara",
        component: () => import("../pages/author/Lara.vue"),
      },
      {
        path: "/ecommerce",
        name: "ecommerce",
        component: () => import("../pages/Ecommerce.vue"),
      },
      {
        path: "/12best",
        name: "12best",
        component: () => import("../pages/12best.vue"),
      },
      {
        path: "/postDetail",
        name: "PostDetail",
        component: () => import("../pages/PostDetail.vue"),
      },
      {
        path: "/dropshipping",
        name: "Dropshipping",
        component: () => import("../pages/Dropshipping.vue"),
      },
      {
        path: "/10best",
        name: "10best",
        component: () => import("../pages/10best.vue"),
      },
      {
        path: "/vatInvoice",
        name: "vatInvoice",
        component: () => import("../pages/VatInvoice.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to) {
    if (to.hash) {
      setTimeout(() => {
        const el = document.querySelector(to.hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }, 300);
    }

    return { top: 0 };
  },
});

export default router;
