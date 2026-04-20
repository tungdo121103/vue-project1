<template>
  <div>
    <!-- HEADER -->
    <div class="blog-page">
      <h1>Blog</h1>
      <p><a href="/">Home</a> - Blog</p>
    </div>

    <!-- SECTIONS -->
    <div
      v-for="(section, sectionIndex) in sections"
      :key="sectionIndex"
      class="blog-container"
    >
      <h2 class="blog-title">{{ section.title }}</h2>

      <p class="blog-desc">{{ section.desc }}</p>

      <!-- GRID -->
      <div class="blog-grid">
        <div v-for="(post, index) in posts" :key="index" class="blog-card">
          <img :src="post.image" :alt="post.title" />

          <h3>{{ post.title }}</h3> 

          <div class="blog-meta">
            By
            <a href="/author/daisy" class="blog-author">
              {{ post.author }}
            </a>
            | 0 Comments
          </div>

          <p class="blog-text">
            {{ post.desc }}
          </p>
        </div>
      </div>

      <div class="blog-showmore-wrap">
        <router-link to="/blog/category" class="blog-showmore-btn">
          SHOW MORE POST
        </router-link>

        <div class="blog-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import "../styles/blog.css";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

onMounted(() => {
  document.title = "Blog - Vify shopify app";
});

// POSTS
const posts = [
  {
    title: "How To Get PDF Invoices On Shopify",
    author: "Daisy",
    desc: "Creating and downloading invoices on Shopify doesn’t have to feel technical or time-consuming. If you’ve ever struggled with generating clean, professional invoices or figuring out where to download them, you’re not alone. The good news is that with the right tool, the entire process becomes quick, intuitive, and even...",
    image: blog1,
  },
  {
    title: "Best Tricks And Tips For Shopify Store Owners",
    author: "Tony",
    desc: "It is not so difficult to start a new business, but never an easy task to keep it going. Like any other entrepreneurs, you might be wondering how to make your e-commerce store the best. But why not selling on another platform, you might ask? We have Amazon, eBay,…...",
    image: blog2,
  },
  {
    title: "Best Shopify Themes And Templates You Can Use",
    author: "Tony",
    desc: "The first point to be considered when starting a new website, is how it looks like to your customers. In the world of e-commerce, having an online store that stands out from the crowd is crucial to success. One of the best ways to achieve this is by choosing...",
    image: blog3,
  },
];

// SECTIONS
  const sections = [
    {
      title: "VIFY NEWS",
      desc: "Vify specializes in analyzing, researching, collecting, and compiling the most valuable information for its customers. Here, you can find important insights related to Shopify, as well as resources to support business growth, such as how to run a business, manage sales systems, implement marketing strategies, and create professional invoices...",
    },
    {
      title: "INVOICE-RELATED ARTICLES",
      desc: "Creating and managing invoices are essential for Shopify stores. That’s why many store owners actively seek valuable insights on how to make the most of professional invoice apps. Explore the articles below—we’re confident they will provide great value for your business…",
    },
    {
      title: "SHOPIFY DEVELOPMENT TUTORIALS",
      desc: "Are you running a business on the Shopify platform? If so, below are some helpful articles covering the latest Shopify news, as well as practical insights on managing and operating your store effectively. In particular, Vify provides in-depth guides and tips on how to use and optimize popular apps that most Shopify stores rely on…",
    },
  ];
</script>

<style scoped>
/* nếu bạn đã có blog.css thì có thể import global trong main.js */
/* hoặc dùng: @import "../styles/blog.css"; */
</style>
