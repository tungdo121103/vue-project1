<template>
  <section class="why-choose-section">
    <!-- HEADER -->
    <div class="whychoose-page">
      <h1>Why Choose Vify</h1>
      <p><a href="/">Home</a> - Why Choose Vify</p>
    </div>

    <div class="container">
      <!-- TOP CONTENT -->
      <div class="upper-content">
        <div class="image-box">
          <img :src="anh" alt="Customer focus" />
        </div>

        <div class="text-box">
          <h2 class="title">At Vify, We Always Put Our Customers First</h2>

          <p class="description">
            <strong>Why choose Vify?</strong> is a question we constantly ask
            ourselves to find the most meaningful answer for our customers. And
            here is that answer: Vify is a trusted provider of invoice creation
            and printing solutions for Shopify stores. We listen to and deeply
            understand the challenges merchants face and know exactly what they
            need. That’s why the Vify Order Printer PDF Invoice app was
            created—to help sellers easily generate professional invoices, even
            without any coding knowledge. This is also why customers choose
            Vify.
            <strong
              >Some key features of Vify Order Printer PDF Invoice:</strong
            >
          </p>

          <ul class="feature-list">
            <li v-for="(item, index) in features" :key="index">
              <span class="check-icon">✓</span> {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- METRICS -->
      <div class="metrics-header">
        <h4 class="sub-title">VIFY ORDER PRINTER PDF INVOICE</h4>
        <h2 class="main-title">The Metrics Vify Has Achieved</h2>
        <p class="sub-description">
          The trust our customers place in Vify is a powerful motivation that
          drives us to continuously grow and deliver even greater value.
        </p>
      </div>

      <div class="stats-section-row">
        <div v-for="(s, i) in stats" :key="i" class="stat-box-item">
          <h2>{{ s.num }}</h2>
          <div class="orange-line"></div>
          <p>{{ s.label }}</p>
        </div>
      </div>

      <!-- PARTNERS -->
      <div class="partners-area">
        <div class="partners-intro">
          <h2 class="partners-title">Vify’s Key Partners</h2>
          <p class="partners-desc">
            <em>
              To deliver greater value to customers and further reinforce the
              answer to the question <strong>“Why choose Vify?”</strong>, Vify has established
              strategic partnerships with leading, trusted partners to build a
              strong ecosystem of practical, high-value applications that help
              drive growth for merchants’ stores.
            </em>
          </p>
        </div>

        <!-- TABS -->
        <div class="custom-tabs">
          <div class="tabs-nav">
            <button
              class="nav-link"
              :class="{ active: activeTab === 1 }"
              @click="activeTab = 1"
            >
              Tab 1
            </button>

            <button
              class="nav-link"
              :class="{ active: activeTab === 2 }"
              @click="activeTab = 2"
            >
              Tab 2
            </button>
          </div>

          <div class="tabs-content-box">
            <div v-if="activeTab === 1" class="shortcode-text">
              [smartslider3 slider="2"]
            </div>
            <div v-else class="shortcode-text">[smartslider3 slider="3"]</div>
          </div>
        </div>
      </div>

      <!-- CONTACT -->
      <div class="contactWhyChoose-section">
        <h2 class="contactWhyChoose-title">Contact Vify</h2>
        <p class="contactWhyChoose-sub">
          Share anything you’re interested in about Vify with us—we’re always here and ready to support you.
        </p>

        <form class="contactWhyChoose-form" @submit.prevent>
          <div class="form-row">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Your Name" />
          </div>

          <div class="form-row">
            <input type="text" placeholder="Your Phone" />
            <input type="email" placeholder="Your Email" />
          </div>

          <textarea placeholder="Message"></textarea>

          <div class="form-btn">
            <button type="submit">SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import anh from "../assets/anhwhychoose1.png";

import "../styles/whychoose.css";
const features = [
  "Easy Customization",
  "Automatic Email",
  "Template Library",
  "Unlimited Orders",
  "Multiple languages",
];

const stats = [
  { num: "35000+", label: "Install App" },
  { num: "25000+", label: "Members" },
  { num: "18990+", label: "Happy Clients" },
  { num: "1000+", label: "Awards Won" },
];

const activeTab = ref(1);

onMounted(() => {
  document.title = "Why Choose Vify - Vify shopify app";
});
</script>

<style scoped>
/* giữ nguyên whychoose.css nếu bạn đã có */
</style>
