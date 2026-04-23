<template>
  <div class="tony-page-wrapper">
    <header class="category-header">
      <h1>Author: Tony</h1>
      <p><a href="/">Home </a>- Articles posted by Tony</p>
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
              <li v-for="link in recentLinks" :key="link.name">
                <router-link :to="'/' + link.id" class="recent-link-item">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div class="widget">
            <h3 class="widget-title">Categories</h3>
            <ul class="category-list">
              <li v-for="cat in categories" :key="cat.name">
                <a href="#" class="cat-link">
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
import anh1 from "../../assets/tony1.png";
import anh2 from "../../assets/tony2.png";
import anh3 from "../../assets/tony3.png";
import anh4 from "../../assets/tony4.png";
import anh5 from "../../assets/tony5.png";
import anh6 from "../../assets/tony6.png";
import anh7 from "../../assets/tony7.png";
import anh8 from "../../assets/tony8.png";
import anh9 from "../../assets/tony9.png";
import anh10 from "../../assets/tony10.png";

onMounted(() => {
  document.title = "Tony,Author at Vify shopify app";
});

const ecommercePosts = ref([
  {
    id: 1,
    author: "Tony",
    date: "26 Jan",
    comments: 0,
    title: "15 Common Types Of Invoices You Need To Know",
    excerpt:
      "When your team is focused on daily operations and client interactions, invoicing can easily become an overlooked yet critical part of running a business. To maintain healthy and consistent cash flow, businesses must ensure that invoices are issued correctly and payments are collected on time. Throughout the lifecycle of a project, various factors—such as payment […]",
    image: anh1,
  },
  {
    id: 2,
    author: "Tony",
    date: "20 Oct",
    comments: 0,
    title:
      "The Future Is Personalized: How To Build A Profitable Print-On-Demand Business In 2025",
    excerpt:
      "The world of eCommerce is changing faster than ever. Customers today don’t just want to buy products — they want to connect with them. They want meaning, identity, and personalization. Customers today don’t just want to buy products; they want to connect with them. They want meaning, identity, and personalization. Tools like Product Options & […]",
    image: anh2,
  },
  {
    id: 3,
    author: "Tony",
    date: "8 Aug",
    comments: 0,
    title: "10 Best Shopify Apps To Streamline Your Ecommerce Operations",
    excerpt:
      "Running a successful Shopify store requires more than just great products – it demands efficiency, customer engagement, and seamless operations. With thousands of apps available in the Shopify App Store, choosing the right tools can feel overwhelming. This guide curates the best Shopify apps designed to streamline your ecommerce operations, from invoicing and product customization […]",
    image: anh3,
  },
  {
    id: 4,
    author: "Tony",
    date: "4 Dec",
    comments: 0,
    title: "Overcoming E-Commerce Challenges With Taranker",
    excerpt:
      "E-commerce has revolutionized retail, opening doors for businesses to connect with customers worldwide. But with growth comes complexity. From choosing the right tools to managing inventory and enhancing customer experiences, merchants face a maze of challenges. That’s where Taranker steps in – your go-to platform for expert e-commerce app recommendations and strategic solutions. Simplify your […]",
    image: anh4,
  },
  {
    id: 5,
    author: "Tony",
    date: "13 Sep",
    comments: 0,
    title:
      "Explore The Must-Know Shopify Features: Unleash The Power Of Shopify",
    excerpt:
      "Choosing the right e-commerce platform as a first-time online store owner is now tricker than ever. If you have already started your research, you might have already come across Shopify. But what Shopify features make the platform a worthy competitor in the market? Year by year, there are tons of platforms popping up, and more […]",
    image: anh5,
  },
  {
    id: 6,
    author: "Tony",
    date: "20 Jun",
    comments: 0,
    title: "How To Delete Shopify Account & Cancel Shopify Subscription?",
    excerpt:
      "Shopify has emerged as one of the leading e-commerce platforms, empowering businesses of all sizes Shopify has become one of the leading e-commerce platforms, allowing businesses of all sizes to easily create and manage their online stores. With its intuitive interface, powerful features, and extensive app marketplace, Shopify has earned widespread popularity among entrepreneurs and […]",
    image: anh6,
  },
  {
    id: 7,
    author: "Tony",
    date: "15 Jun",
    comments: 0,
    title: "How To Add Or Change Your Favicon On Your Shopify Store",
    excerpt:
      "How to add or change a favicon on a Shopify store may seem like a simple task, but many people still struggle with how to do it correctly. If you’re looking to change the shopify favicon, don’t worry—in this article, Vify will guide you through the process in the easiest way possible. Simply follow the […]",
    image: anh7,
  },
  {
    id: 8,
    author: "Tony",
    date: "13 Jun",
    comments: 0,
    title: "What Is A Shopify Partner? How To Create An Account?",
    excerpt:
      "Are you looking for a way to generate additional income to support your business? If so, becoming a Shopify partner would be the best option for you. You can become a Shopify Partner by enrolling in the Shopify Partner Program. This program allows you to earn money, which may sound appealing, but it requires serious […]",
    image: anh8,
  },
  {
    id: 9,
    author: "Tony",
    date: "29 May",
    comments: 0,
    title:
      "Gift Cards For Customers: Turning A Negative Experience Into A Positive One",
    excerpt:
      "Customer service is a critical aspect of running a successful online business, and resolving negative experiences in a satisfactory manner can turn dissatisfied customers into loyal brand advocates. One effective tool for enhancing customer service on the Shopify platform is by utilizing Shopify gift cards. In this article, we will explore how businesses can leverage […]",
    image: anh9,
  },
  {
    id: 10,
    author: "Tony",
    date: "25 May",
    comments: 0,
    title: "Vify Gift Card App Vs Shopify's: A Comprehensive Comparison",
    excerpt:
      "In today’s digital age, gift cards have become a popular choice for both businesses and consumers. They offer convenience, flexibility, and a personalized touch to the gifting experience. However, with a plethora of options available, it can be challenging to decide which platform best suits your needs. That’s why we’re here to help. In this […]",
    image: anh10,
  },
]);

const recentLinks = ref([
  { name: "12 Best Free Shopify Templates: Build A Beautiful Store Without Spending A Cent", id: "12Best" },
  {
    name: "Best Dropshipping Apps For Shopify: Top 7 Picks Compared",
    id: "postDetail",
  },
  {
    name: "How To Build A Profitable Shopify Dropshipping Store Step By Step",
    id: "dropshipping",
  },
  {
    name: "10 Best Order Printer Shopify Apps To Scale Your Store Faster (Free + Paid)",
    id: "10best",
  },
  { name: "Does Vify Have A VAT Invoice?", id: "vatInvoice" },
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
  font-size: 15px;
  color: #888;
  margin: 15px 0;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
}
.post-title {
  font-size: 26px;
  font-weight: 500;
  color: #222;
  margin-bottom: 12px;
  transition: 0.3s;
  cursor: pointer;
}
.post-title:hover {
  color: #ff6550;
}
.post-excerpt {
  font-size: 16px;
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
  margin-bottom: 55px;
}
.widget-title {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 10px;
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
