<template>
  <div class="ecommerce-page-wrapper">
    <header class="category-header">
      <h1>Category: Ecommerce</h1>
      <p>
        <!-- <router-link to="/">Home</router-link> -->
        <a href="/">Home</a>
        - Posts Tagged: Ecommerce
      </p>
    </header>

    <div class="container">
      <div class="layout-grid">
        <main class="content">
          <article
            v-for="post in ecommercePosts"
            :key="post.id"
            class="post-card"
          >
            <div class="post-image">
              <img :src="post.image" :alt="post.title" />
            </div>

            <div class="post-meta">
              <div class="meta-item">
                <i class="fa-regular fa-user"></i>
                <span>By {{ post.author }}</span>
              </div>
              <div class="meta-item">
                <i class="fa-regular fa-calendar"></i>
                <span>{{ post.date }}</span>
              </div>
              <div class="meta-item">
                <i class="fa-regular fa-comment"></i>
                <span>{{ post.comments }} Comments</span>
              </div>
              <div class="meta-item">
                <i class="fa-solid fa-tag"></i>
                <span>Ecommerce</span>
              </div>
            </div>

            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-excerpt">{{ post.excerpt }}</p>
          </article>

          <div class="pagination-container">
            <div class="pagination">
              <button class="page-numbers current">1</button>
              <button class="page-numbers">2</button>
              <span class="page-numbers dots">...</span>
              <button class="page-numbers">4</button>
              <button class="page-numbers next">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </main>

        <aside class="sidebar">
          <form class="search-box">
            <input type="text" placeholder="Search here..." />
            <button type="submit" class="search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <div class="widget">
            <h3 class="widget-title">Recent Posts</h3>
            <ul class="recent-posts-list">
              <li v-for="(link, i) in recentLinks" :key="i">
                <a href="#" class="recent-link-item">{{ link }}</a>
              </li>
            </ul>
          </div>

          <div class="widget">
            <h3 class="widget-title">Categories</h3>
            <ul class="category-list">
              <li v-for="cat in categories" :key="cat.name">
                <a
                  href="#"
                  class="cat-link"
                >
                  <span>{{ cat.name }}</span>
                  <span class="count">({{ cat.count }})</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="widget">
            <h3 class="widget-title">Instagram</h3>
            <p class="instagram-text">Follow Me!</p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import anh1 from "../assets/ecommerce1.png"; 

onMounted(() => {
  document.title = "Ecommerce - Vify Shopify App Blog";
});

const ecommercePosts = ref([
  {
    id: 1,
    author: "Tony",
    date: "1 Jan",
    comments: 0,
    title: "Best Tricks And Tips For Shopify Store Owners",
    excerpt:
      "It is not so difficult to start a new business, but never an easy task to keep it going. Like any other entrepreneurs, you might be wondering how to make your e-commerce store the best. But why not selling on another platform, you might ask? We have Amazon, eBay,... on the market which offers you [...]",
    image: anh1,
  },
]);

const recentLinks = ref([
  "Best Dropshipping Apps For Shopify: Top 7 Picks Compared",
  "How To Build A Profitable Shopify Dropshipping Store Step By Step",
  "10 Best Order Printer Shopify Apps To Scale Your Store Faster (Free + Paid)",
  "Does Vify Have A VAT Invoice?",
  "How To Get PDF Invoices On Shopify",
]);

const categories = ref([
  { name: "Blog", count: 33 },
  { name: "Ecommerce", count: 29 },
  { name: "News", count: 4 },
  { name: "Reviews", count: 5 },
  { name: "Shopify Development Tutorials", count: 1 },
]);
</script>

<style scoped>
/* HEADER */
.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.category-header {
  margin-top: -110px;
  padding: 120px 20px 60px;
  background: #454240;
  color: white;
  text-align: center;
}
.category-header h1 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
}
.category-header a {
  color: #fff;
  text-decoration: none;
  opacity: 0.8;
}

/* LAYOUT 8/2 */
.container {
  max-width: 1200px;
  margin: auto;
  padding: 50px 20px;
}
.layout-grid {
  display: grid;
  grid-template-columns: 8fr 2fr;
  gap: 50px;
}

/* MAIN CONTENT */
.post-card {
  margin-bottom: 60px;
}
.post-image img {
  width: 100%;
  border-radius: 4px;
  display: block;
}
.post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 13px;
  color: #888;
  margin: 15px 0;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}
.post-title {
  font-size: 26px;
  font-weight: 600;
  color: #222;
  margin-bottom: 12px;
  transition: 0.3s;
  cursor: pointer;
}
.post-title:hover {
  color: #ff6550;
}
.post-excerpt {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
}

/* PAGINATION */
.pagination-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #eee;
}
.pagination {
  display: flex;
  gap: 6px;
}
.page-numbers {
  min-width: 38px;
  height: 38px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.page-numbers.current {
  background: #ff6550;
  border-color: #ff6550;
  color: #fff;
}
.page-numbers:hover:not(.current):not(.dots) {
  border-color: #ff6550;
  color: #ff6550;
}
.page-numbers.dots {
  border: none;
  cursor: default;
}

/* SIDEBAR - SEARCH BOX (Giống ảnh image_909f6a.png) */
.search-box {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 45px;
}
.search-box input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 15px;
  background: transparent;
}
.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 5px;
}
.search-btn i {
  font-size: 16px;
  color: #000;
}

/* SIDEBAR WIDGETS */
.widget {
  margin-bottom: 45px;
}
.widget-title {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 5px;
  padding-bottom: 10px;
}
.widget-title::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 45px;
  height: 2px;
  background: #000;
}

.recent-posts-list {
  list-style: none;
  padding: 0;
}
.recent-posts-list li {
  border-bottom: 1px solid #ececec;
  padding: 15px 0;
}
.recent-posts-list li:last-child {
  border-bottom: none;
}
.recent-link-item {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  line-height: 1.6;
  display: block;
  transition: 0.2s;
}
.recent-link-item:hover {
  color: #ff6550;
}

.cat-link {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  color: #333;
  text-decoration: none;
  font-size: 14px;
}
.cat-link.active {
  color: #ff6550;
  font-weight: 600;
}
.cat-link:hover {
  color: #ff6550;
}
.instagram-text {
  color: #888;
  font-size: 14px;
}

@media (max-width: 992px) {
  .layout-grid {
    grid-template-columns: 1fr;
  }
}
</style>
