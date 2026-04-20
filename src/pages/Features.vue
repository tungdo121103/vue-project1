<template>
  <section>
    <!-- HEADER -->
    <section class="features-section">
      <div class="features-header">
        <h4 class="features-sub-title">Shopify Order Printer PDF Invoice</h4>
        <h2 class="features-main-title">Explore Powerful Features</h2>
        <p class="features-text-tile">
          Why are over 30,000 Shopify stores using the
          <strong>Vify Order Printer PDF Invoice</strong> app? What value does
          it bring to merchants? Let’s start exploring.
        </p>
      </div>

      <!-- GRID FEATURES -->
      <div class="features-container">
        <div class="features-col left-col">
          <div v-for="(f, i) in leftFeatures" :key="i" class="feature-item-box">
            <h3>{{ f.title }}</h3>
            <p>{{ f.description }}</p>
          </div>
        </div>

        <div class="features-phone-wrapper">
          <img :src="anhip" class="phone-img" />
        </div>

        <div class="features-col right-col">
          <div
            v-for="(f, i) in rightFeatures"
            :key="i"
            class="feature-item-box"
          >
            <h3>{{ f.title }}</h3>
            <p>{{ f.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <!-- TESTIMONIAL + STATS -->
    <section class="features-page1">
      <div class="testimonial-container">
        <div class="testimonial-card">
          <div class="quote-badge">
            <div class="quote-circle">
              <span class="quote-icon">“</span>
            </div>
          </div>

          <div class="slider-viewport">
            <div
              class="slider-track"
              :style="{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isTransitioning
                  ? 'transform 1s cubic-bezier(0.65, 0, 0.35, 1)'
                  : 'none',
              }"
            >
              <div v-for="(t, i) in slides" :key="i" class="individual-slide">
                <p class="testimonial-text">{{ t.text }}</p>

                <div class="author-info">
                  <img
                    v-if="i === 0 || i === 1"
                    :src="anhicon"
                    class="author-avatar"
                  />

                  <div class="author-meta">
                    <h5 class="author-name">{{ t.author }}</h5>
                    <p class="author-job">{{ t.job }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- STATS -->
        <div class="stats-section">
          <div v-for="(s, i) in stats" :key="i" class="stat-box">
            <h2>{{ s.num }}</h2>
            <div class="line-divider"></div>
            <p>{{ s.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="features-page2">
      <div class="how-it-works-container">
        <div class="how-it-works-left">
          <h4 class="how-sub">HOW VIFY ORDER PRINTER PDF INVOICE APP WORKS</h4>
          <h2 class="how-title">
            Three Easy Step To Begin With The Vify Order Printer PDF Invoice
          </h2>

          <div class="steps-list">
            <div v-for="(step, i) in steps" :key="i" class="step-item">
              <div class="step-number">{{ step.number }}</div>
              <div class="step-content">
                <h3>{{ step.title }}</h3>
                <p v-html="step.desc"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="how-it-works-right">
          <img :src="anhInvoice" class="invoice-preview-img" />
        </div>
      </div>
    </section>

    <!-- VIDEO -->
    <section class="features-page3">
      <div class="video-container">
        <div class="video-header">
          <h4 class="video-sub">SHOPIFY ORDER PRINTER PDF INVOICE</h4>
          <h2 class="video-title">Watch The Video</h2>
          <p class="video-desc">
            This is an overview video of the Vify order printer & PDF invoice
            app that you can refer to. If you’re looking for a professional and
            highly customizable PDF invoice solution—even without any coding
            knowledge—we believe this is the best <strong>Shopify order printer</strong> app for
            your store.
          </p>
        </div>

        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/YIePYZpD7Kg?rel=0"
            title="video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { watchEffect } from "vue";
import anhip from "../assets/anhIp2.png";
import anhicon from "../assets/anhfeatures1.png";
import anhInvoice from "../assets/anhfeatures2.png";
import "../styles/features.css";
/* TESTIMONIALS */
const testimonials = [
  {
    text: "Great little app for invoicing, all the key features are unlocked with the free version as well! Customer service was really responsive and even removed the watermark for free! dont see that too often.",
    author: "Choc'd Full",
    job: "UI/UX Designer",
  },
  {
    text: "Really good and helpful app that helps to have orders and invoices at one place. Support is amazing.",
    author: "Goody Shop SK",
    job: "UI/UX Designer",
  },
  {
    text: "Vify order printer PDF invoice app, very simple to set up and use once installed and no coding or mass editing required on my part. Like that it has a free option for those of us just getting started and figuring this all out. Will definitely upgrade with this app once the time comes.",
    author: "Make Your Mark Printing",
    job: "CEO",
  },
  {
    text: "Great app. Really gets the job done for us. Lots of options and templates to choose from. Had an issue customizing specific details of our invoice. Used their chat to get assistance. Tracy was very helpful. She answered all of my questions and helped guide me to get the best results for what we need. Very highly recommend this app to other merchants. They have lots of other services that will be exploring also.",
    author: "Hot Miami Shoes",
    job: "Other Client",
  },
  {
    text: "Vify order printer PDF invoice is a really great app, soo easy to manage and understand, and the free Plan is perfect for small businesses or Startups. Customer support is really reactiv and very kind. It takes less than 15 min to set everything up and afterwards you will win so much time for all the invoices preparations and emails. Thanks for this great work.",
    author: "Nightdreamer",
    job: "",
  },
  {
    text: "I was desperately looking for an app for invoices as I need it for tax. Since most apps don’t support many features, I ended up with Order Printer. It really has all the features I need. Needed help which was solved in chat within 10 minutes. I am really thankful that it has made my life a lot easier.",
    author: "Shiny-Jewel",
    job: "",
  },
];

const slides = [...testimonials, testimonials[0]];

/* STATE */
const currentIndex = ref(0);
const isTransitioning = ref(true);

let timer = null;

/* AUTO SLIDE */
onMounted(() => {
  timer = setInterval(() => {
    isTransitioning.value = true;
    currentIndex.value++;
  }, 5000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});

/* RESET LOOP */
watchEffect(() => {
  if (currentIndex.value === slides.length - 1) {
    setTimeout(() => {
      isTransitioning.value = false;
      currentIndex.value = 0;
    }, 1000);
  }
});

/* FEATURES */
const leftFeatures = [
  {
    title: "Create Invoices",
    description:
      "Vify Order Printer PDF Invoice is a powerful invoicing app for shopify stores, helping merchants optimize operations, reduce costs, and save time.",
  },
  {
    title: "Easy Customization",
    description:
      "Vify Order Printer PDF Invoice offers powerful yet simple customization, allowing you to enable or disable options with just a few clicks—perfect for users with no coding knowledge.",
  },
  {
    title: "Template Library",
    description:
      "Vify provides customers with a diverse library of invoice templates suitable for various industries, featuring professional, modern, and visually appealing designs.",
  },
];

const rightFeatures = [
  {
    title: "Automatic Email",
    description:
      "Automatic invoice emailing is a must-have feature that optimizes workflows and helps shopify store owners save time and reduce operational costs.",
  },
  {
    title: "Unlimited orders",
    description:
      "Ultimate Order is Vify’s exclusive advantage. Unlike other invoice solutions that restrict orders by pricing tiers, all Vify Order Printer PDF Invoice plans come with unlimited Ultimate Orders.",
  },
  {
    title: "Multiple languages",
    description:
      "Vify Order Printer PDF Invoice app lets store owners create invoices in any language and seamlessly deliver them to customers worldwide.",
  },
];

/* STEPS */
const steps = [
  {
    number: "01",
    title: "Step 1 : Install the Vify Order Printer App",
    desc: `App installation guide: Click on <a href="https://apps.shopify.com/vify-order-printer" target="_blank" class="highlight-link">Shopify PDF invoice App</a> to open the Vify order printer PDF invoice app → click Install`,
  },
  {
    number: "02",
    title: "Step 2 : Choose A Suitable Invoice Template",
    desc: `Vify order printer PDF invoice app offers a wide range of professional invoice templates, allowing you to choose the one that best suits your store.`,
  },
  {
    number: "03",
    title: "Step 3 : Customize Invoice Templates",
    desc: `Powerful yet simple customization features let you enable or disable options with just a few clicks—no coding required. This is exclusively available in the Vify Order Printer PDF Invoice app.`,
  },
];

/* STATS */
const stats = [
  { num: "35000+", label: "Install App" },
  { num: "25000+", label: "Members" },
  { num: "18990+", label: "Happy Clients" },
  { num: "1000+", label: "Awards Won" },
];

/* PRICING */
const plans = [
  {
    name: "FREE",
    price: 0,
    link: "https://apps.shopify.com/vify-order-printer",
    features: ["Free templates", "50 orders", "Support 24/7"],
  },
  {
    name: "STARTER",
    price: 10.99,
    link: "https://apps.shopify.com/vify-order-printer",
    features: ["Unlimited orders", "Email automation"],
  },
  {
    name: "PREMIUM",
    price: 29.99,
    link: "https://apps.shopify.com/vify-order-printer",
    features: ["Custom invoices", "Extra templates"],
  },
  {
    name: "ULTIMATE",
    price: 69.99,
    link: "https://apps.shopify.com/vify-order-printer",
    features: ["Priority support", "Custom design"],
  },
];
</script>

<style></style>
