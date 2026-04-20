<script setup lang="ts">
import logo from "../assets/vify-logo.png";
import "../styles/header.css";
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// 👉 special pages
const specialPages = [
  "/whyChoose",
  "/blog",
  "/partners",
  "/about",
  "/privacyPolicy",
];

// check current page
const isSpecialPage = computed(() =>
  specialPages.some((path) =>
    route.path.toLowerCase().startsWith(path.toLowerCase())
  )
);
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    class="navbar navbar-expand-lg fixed-top px-4"
    :class="[
      isSpecialPage ? 'header-overlay' : 'custom-navbar',
      isScrolled ? 'scrolled' : '',
    ]"
  >
    <!-- LOGO -->
    <router-link class="navbar-brand" to="/">
      <img :src="logo" alt="logo" width="100" />
    </router-link>

    <!-- MENU -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <!-- SPECIAL PAGES -->
        <template v-if="isSpecialPage">
          <li class="nav-item">
            <router-link class="navLink" to="/">
              VIFY ORDER PRINTER – PDF INVOICE
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="navLink" to="/whyChoose">
              WHY CHOOSE VIFY
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="navLink" to="/partners"> PARTNERS </router-link>
          </li>

          <li class="nav-item">
            <router-link class="navLink" to="/blog"> BLOG </router-link>
          </li>

          <li class="nav-item">
            <router-link class="navLink" to="/about"> ABOUT VIFY </router-link>
          </li>
        </template>

        <!-- HOME MENU -->
        <template v-else>
          <li class="nav-item">
            <router-link class="navLink" :to="{ path: '/', hash: '#features' }">
              FEATURES
            </router-link>
          </li>

           <li class="nav-item">
            <router-link class="navLink" :to="{ path: '/', hash: '#pricing' }">
              Pricing
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="navLink"
              :to="{ path: '/', hash: '#invoiceTemplates' }"
            >
              INVOICE TEMPLATES
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="navLink" to="/whyChoose">
              WHY CHOOSE VIFY
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="navLink" to="/partners"> PARTNERS </router-link>
          </li>

          <li class="nav-item">
            <router-link class="navLink" to="/blog"> BLOG </router-link>
          </li>
        </template>
      </ul>
    </div>

    <!-- BUTTON -->
    <a
      href="https://apps.shopify.com/vify-order-printer"
      class="btn-get-app"
      target="_blank"
    >
      GET APP
    </a>
  </nav>
</template>
