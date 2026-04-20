<template>
  <div class="HomePage">
    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="container hero-content">
        <img :src="anhdep" alt="anhdep" width="200" />

        <h1>Shopify Order Printer PDF Invoice</h1>
        <p>Customize professional invoice easily width no-code</p>

        <div class="mt-3">
          <a
            href="https://apps.shopify.com/vify-order-printer"
            class="btn-link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View App
          </a>

          <router-link to="/contactVify" class="btn-link-button">
            Contact
          </router-link>
        </div>
      </div>
    </section>

    <!-- SCREENS -->

    <section id="invoiceTemplates" class="invoiceTemplates-section">
      <InvoiceTemplates />
    </section>

    <!-- FEATURES -->
    <section class="features-section" id="features">
      <Features />
    </section>

    <!-- Pricing -->
    <section class="pricing-section" id="pricing">
      <Pricing />
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import anhdep from "../assets/anhdep.png";
import Features from "./Features.vue";
import InvoiceTemplates from "./InvoiceTemplates.vue";
import Pricing from "./Pricing.vue";

const route = useRoute();

/* SET TITLE */
onMounted(() => {
  document.title =
    "Shopify Order Printer & PDF Invoice App | Easy Customization";
});
</script>

<style scoped></style>
