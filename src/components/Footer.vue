<script setup lang="ts">
import imghome from "../assets/logo.png"
import "../styles/footer.css"
</script>

<template>
  <footer class="footer-custom">
    <div class="footer-container">
      
      <!-- LEFT LOGO -->
      <div class="footer-left">
        <router-link to="/">
          <img :src="imghome" alt="logo" />
        </router-link>
      </div>

      <!-- RIGHT CONTENT -->
      <div class="footer-right">

        <!-- COLUMN 1 -->
        <div class="footer-column">
          <div class="footer-title">INFOMATION</div>
          <ul class="footer-list">
            <li>
              <router-link to="/about">About Vify</router-link>
            </li>
            <li>
              <router-link to="/partners">Vify Partners</router-link>
            </li>
          </ul>
        </div>

        <!-- COLUMN 2 -->
        <div class="footer-column">
          <div class="footer-title">POLICY</div>
          <ul class="footer-list">
            <li>
              <router-link to="/privacyPolicy">Privacy Policy</router-link>
            </li>
            <li>
              <router-link to="/contactVify">Contact Vify</router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="img-line"></div>
  </footer>
</template>