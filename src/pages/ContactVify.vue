<template>
  <div class="contact-container">
    <!-- 3 Icons phía trên -->
    <section class="contact-info-section">
      <div class="contact-info-item">
        <div class="contact-icon-circle">
          <Phone :size="28" :stroke-width="1.5" />
        </div>
        <span class="contact-info-text">(+84)975121220</span>
      </div>

      <div class="contact-info-item">
        <div class="contact-icon-circle">
          <MapPin :size="28" :stroke-width="1.5" />
        </div>
        <span class="contact-info-text">
          Nam Do Complex – Hai Ba Trung District - Hanoi
        </span>
      </div>

      <div class="contact-info-item">
        <div class="contact-icon-circle">
          <Mail :size="28" :stroke-width="1.5" />
        </div>
        <span class="contact-info-text">Support@Vify.Io</span>
      </div>
    </section>

    <!-- Header -->
    <div class="contact-header-section">
      <span class="contact-sub-title">ORDER PRINTER PDF INVOICE</span>
      <h1 class="contact-main-title">Contact Vify</h1>
      <p class="contact-description-text">
        <em>
          Feel free to contact us and share anything you care about regarding
          Vify—we're always here and ready to support you.
        </em>
      </p>
    </div>

    <!-- Form -->
    <form class="contact-form" @submit.prevent>
      <div class="contact-form-row">
        <input type="text" placeholder="Title" class="contact-input-field" />
        <input
          type="text"
          placeholder="Your Name"
          class="contact-input-field"
        />
      </div>

      <div class="contact-form-row">
        <input
          type="tel"
          placeholder="Your Phone"
          class="contact-input-field"
        />
        <input
          type="email"
          placeholder="Your Email"
          class="contact-input-field"
        />
      </div>

      <div class="contact-form-row">
        <textarea
          placeholder="Message"
          class="contact-textarea-field"
        ></textarea>
      </div>

      <button type="submit" class="contact-submit-button">SEND MESSAGE</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import "../styles/contact.css";
import { Phone, MapPin, Mail } from "lucide-vue-next";

onMounted(() => {
  document.title = "Contact Vify - Vify shopify app";
});
</script>

<style scoped>

</style>
