<template>
  <div class="screenshots-wrapper">
    <!-- INTRO -->
    <div class="screenshots-frist">
      <div class="text-center">
        <h4>INVOICE TEMPLATE LIBRARY</h4>
        <h2>A Quick View In Screens</h2>
        <p class="custom-indent">
          Creating invoices has never been easier. Simply choose a template that
          fits your business from Vify’s template library, then customize the<br />
          <span>
            fields to match your specific needs. With powerful customization
            features, you can easily tailor your invoices without any coding
          </span>
          <span>
            knowledge. This level of flexibility is only available with
            <a
              class="highlight-link"
              href="https://vify.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Shopify order printer</strong>
            </a>
            & PDF invoice app.
          </span>
        </p>
      </div>
    </div>

    <!-- SLIDER -->
    <div class="slider-container">
      <button class="nav-btn prev" @click="prevSlide">PREVIOUS</button>

      <div class="slider">
        <img :src="prevImage" class="side-img left-img" alt="" />

        <div class="phone-frame">
          <img :src="anhip" class="frame-img" alt="Phone Frame" />
          <div class="screen-content">
            <img :src="images[index]" alt="" />
          </div>
        </div>

        <img :src="nextImage" class="side-img right-img" alt="" />
      </div>

      <button class="nav-btn next" @click="nextSlide">NEXT</button>
    </div>

    <div class="divider"></div>

    <!-- FEATURES -->
    <div class="screen-second">
      <div class="screen-header text-center">
        <h4 class="sub-title">INTRODUCING</h4>
        <h2 class="main-title">Shopify Order Printer PDF Invoice App</h2>
        <p class="description">
          Vify is a powerful and reliable <strong>Shopify order printer</strong> PDF invoice app
          built to help merchants create professional invoices with ease. By
          combining flexible customization, automated workflows, and a
          user-friendly interface that requires no coding skills, Vify
          streamlines order management and helps store owners save time while
          delivering a polished, professional experience to their customers.
        </p>
      </div>

      <div class="screen-grid">
        <div v-for="(f, i) in screenData" :key="i" class="feature-item">
          <div class="feature-icon">
            <img :src="f.icon" :alt="f.title" />
          </div>
          <h3>{{ f.title }}</h3>
          <p v-html="f.desc"></p>
        </div>
      </div>

      <div class="divider"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

/* images */
import anh1 from "../assets/shopify1.png";
import anh2 from "../assets/shopify2.png";
import anh3 from "../assets/shopify3.png";
// import anh4 from "../assets/shopify4.png";
// import anh5 from "../assets/shopify5.png";
// import anh6 from "../assets/shopify6.png";

import anhip from "../assets/ip.png";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

import "../styles/invoicetemplates.css";
/* slider data */
const images = [anh1, anh2, anh3];
const index = ref(0);

const nextSlide = () => {
  index.value = (index.value + 1) % images.length;
};

const prevSlide = () => {
  index.value = (index.value - 1 + images.length) % images.length;
};

/* computed side images */
const prevImage = computed(
  () => images[(index.value - 1 + images.length) % images.length],
);

const nextImage = computed(() => images[(index.value + 1) % images.length]);

/* feature data */
const screenData = [
  {
    icon: icon1,
    title: "Professional Invoices",
    desc: "The <strong>Vify Order Printer PDF Invoice</strong> app is an expert solution for creating professional, beautifully designed invoices for online Shopify stores.",
  },
  {
    icon: icon2,
    title: "Easy Customization",
    desc: "Easy to customize, even for users with no coding knowledge—this is exclusively available in the Vify <strong>Order Printer</strong> PDF Invoice app.",
  },
  {
    icon: icon3,
    title: "Automation Workflow",
    desc: "Vify Order Printer <strong>PDF Invoice</strong> streamlines automated workflows to optimize operational time while helping Shopify store owners save on costs.",
  },
  {
    icon: icon4,
    title: "Always-On Support",
    desc: "Vify offers fast 24/7 support. Contact us anytime to share your needs for <strong>invoice creation</strong> and printing—we’re always ready to help.",
  },
];
</script>

<style scoped></style>
