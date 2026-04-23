<template>
  <div>
    <section class="features-page4">
      <div class="pricing-container">
        <div class="pricing-header">
          <h4 class="pricing-sub">VIFY ORDER PRINTER PDF INVOICE PRICING</h4>
          <h2 class="pricing-title">Convenient Plan To Choose From</h2>
        </div>

        <div class="pricing-grid">
          <a
            v-for="(p, i) in plans"
            :key="i"
            :href="p.link"
            target="_blank"
            class="pricing-card-link"
          >
            <div class="pricing-card">
              <div class="card-icon-wrapper">
                <div class="card-icon">
                  <i :class="p.icon"></i>
                </div>
              </div>
              <h3>{{ p.name }}</h3>

              <p class="price">
                <span>$</span>{{ p.price }} <span>monthly</span>
              </p>

              <ul class="plan-features">
                <li v-for="(f, j) in p.features" :key="j">
                  {{ f }}
                </li>
              </ul>

              <button class="plan-btn">CHOOSE PLAN (14-DAY FREE TRIAL)</button>
            </div>
          </a>
        </div>
      </div>
    </section>
    <!-- FAQ SECTION -->
    <section class="faq-section">
      <div class="faq-container">
        <div class="faq-left">
          <h5 class="faq-sub">POPULAR FAQ</h5>
          <h2 class="faq-title">Frequently Asked Questions</h2>

          <div v-for="item in faqData" :key="item.id" class="faq-item">
            <!-- QUESTION -->
            <div class="faq-question" @click="toggle(item.id)">
              <span>{{ item.question }}</span>
              <div class="faq-icon">
                {{ active === item.id ? "−" : "+" }}
              </div>
            </div>

            <!-- ANSWER -->
            <transition name="faq">
              <div v-if="active === item.id" class="faq-answer">
                <!-- ANSWER -->
                <transition name="faq">
                  <div v-if="active === item.id" class="faq-answer">
                    <div v-html="item.answer"></div>
                  </div>
                </transition>
              </div>
            </transition>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="faq-right">
          <img :src="anhfaq" alt="invoice preview" />
        </div>
      </div>
    </section>

    <!-- BLOG SECTION -->
    <section class="blog-section">
      <div class="container">
        <p class="blog-sub">VIFY NEWS</p>
        <h2 class="blog-title">Lasted Post</h2>

        <div class="blog-list">
          <div class="blog-card">
            <img :src="anhfaq1" />
            <h3>
              <a href="/blog-detail">
                Best Tricks And Tips For Shopify Store Owners
              </a>
            </h3>
            <p class="meta">
              By <router-link to="/author/tony"> Tony </router-link> • 0
              Comments •
              <a href="eco-detail">Ecommerce</a>
            </p>
            <p class="desc">
              It is not so difficult to start a new business, but never an easy
              task to keep it going...
            </p>
          </div>

          <div class="blog-card">
            <img :src="anhfaq2" />
            <h3>
              <a href="/blog-detail">
                Best Shopify Themes And Templates You Can Use
              </a>
            </h3>
            <p class="meta">
              By
              <router-link to="/author/tony"> Tony </router-link>
              • 0 Comments
            </p>
            <p class="desc">
              The first point to be considered when starting a new website is
              how it looks like to your customers...
            </p>
          </div>

          <div class="blog-card">
            <img :src="anhfaq3" />
            <h3>
              <a href="/blog-detail">
                Order Printer: PDF Invoice App User Guide
              </a>
            </h3>
            <p class="meta">
              By <router-link to="/author/tony"> Tony </router-link> • 0
              Comments
            </p>
            <p class="desc">
              This article is a comprehensive PDF invoice app user guide
              designed to help you fully explore...
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <!-- CTA -->
    <section class="cta-section">
      <p class="cta-sub">INSTALL VIFY ORDER PRINTER APP</p>
      <h2>Install For Free Today !</h2>

      <div class="cta-buttons">
        <a
          href="https://apps.shopify.com/vify-order-printer"
          target="_blank"
          class="btn-orange"
        >
          View Vify App
        </a>

        <router-link to="/contactVify" class="btn-orange">
          Contact Vify
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import anhfaq from "../assets/faq.png";
import anhfaq1 from "../assets/faq1.png";
import anhfaq2 from "../assets/faq2.png";
import anhfaq3 from "../assets/faq3.png";
import "../styles/pricing.css";
/* STATE */
const active = ref(null);

const plans = [
  {
    name: "FREE",
    icon: "fa-solid fa-trophy",
    price: 0,
    link: "https://apps.shopify.com/vify-order-printer",
    features: [
      "Freely Customized Templates",
      "50 Latest Orders",
      "Frontend Download Option",
      "Auto-Detect Address Format",
      "Draft Order",
      "Support 24/7",
    ],
  },
  {
    name: "STARTER",
    icon: "fa-solid fa-mug-hot",
    price: 10.99,
    link: "https://apps.shopify.com/vify-order-printer",
    features: [
      "All In Free Plan Plus",
      "Bulk Process",
      "Branding Removal",
      "Unlimited Orders",
      "Email Automation",
      "Invoice Edit",
      "Custom Invoice Number",
      "Language Detection",
    ],
  },
  {
    name: "PREMIUM",
    icon: "fa-solid fa-star",
    price: 29.99,
    link: "https://apps.shopify.com/vify-order-printer",
    features: [
      "All In Starter Plan Plus",
      "Additional Templates",
      "Quotes",
      "Create Custom Invoice",
      "Custom Sender Email",
      "Commercial Invoices",
      "Product Meta Fields",
    ],
  },
  {
    name: "ULTIMATE",
    icon: "fa-solid fa-gem",
    price: 69.99,
    link: "https://apps.shopify.com/vify-order-printer",
    features: [
      "Everything In Premium Plus",
      "1 Custom Template Of Your Design",
      "Free Customization",
      "Priority LiveChat Support",
      "API For Developers – Coming Soon",
    ],
  },
];
/* TOGGLE */
const toggle = (id) => {
  active.value = active.value === id ? null : id;
};

/* FAQ DATA */
const faqData = [
  {
    id: 1,
    question: "How can I choose the right invoice template?",
    answer: `
      <div class="faq-block">
        <p><strong>Click Templates</strong> from the sidebar or the top menu bar. The Template page will display all your available and enabled templates. Each template can be used for:</p>
      </div>

      <ul class="faq-list">
        <li>Invoice</li>
        <li>Packing Slip</li>
        <li>Refund</li>
        <li>Draft Order</li>
      </ul>
      <div class="faq-block">
        <p><strong>Template actions</strong></p>
      </div>

      <ul class="faq-list">
        <li>Click on a templateto preview</li>
        <li>Click “Apply”to set it as the Default Template.</li>
        <li>Click “Edit”to customize the selected template.</li>
        <li>The currently selected template will be marked as “Selected”and used by default.</li>
      </ul>
    `,
  },
  {
    id: 2,
    question: "How can I customize invoice template?",
    answer: `
      <div class="faq-block">
        <p>Choose the templates you want to use:</p>
      </div>
      <div class="faq-block">
        <p>Templates → Choose type of documents (Invoice/ Packing Slip/ Refund/ Draft orders) → Navigate to your ideal template → Click Edit</p>
      </div>
      <div class="faq-block">
        <p>Editing template:</p>
      </div>

      <ul class="faq-list">
        <li>Edit sections on the left: Users can freely enable/disable sections to be displayed on templates</li>
        <li>Preview on the right: Reflects the change you make</li>
        <li>Click Save* to update all the information.</li>
      </ul>
    `,
  },
  {
    id: 3,
    question: "How can I print/download invoices from Shopify Admin?",
    answer: `
      <div class="faq-block">
        <p>This guideline gives information about how to Print and Download your Invoice/ Packing Slip/ Refund from your Shopify Admin.</p>
      </div>

      <ul class="faq-list">
        <li>On your Shopify order details page, select one or more orders.</li>
        <li>Click the** three-dot menu **(⋮)shown in the image below.</li>
        <li>From the dropdown menu, find and choose “Print selected”with the Vify logo at the top.</li>
        <li>Next, select the type of document you want to print: Invoice, Packing Slip, or Refund.</li>
        <li>You will be redirected to the Vify appto complete the process.</li>
      </ul>
    `,
  },
  {
    id: 4,
    question: "How do I send invoices automatically?",
    answer: `
      <div class="faq-block">
        <p><strong>Accessing Email Automation</strong></p>
      </div>
      <div class="faq-block">
        <p>Naviagte to<em> Email Automation -> Email automation **from the menu bar.</em></p>
      </div>
      <div class="faq-block">
        <p><strong>Email Automation configuration options</strong></p>
      </div>

      <ul class="faq-list">
        <li>Choose the email flow: Invoice, Packing Slip, or Refund</li>
        <li>Enable or disable automationas needed</li>
        <li>Send emails to  merchantautomatically (On/Off)</li>
        <li>Send emails to customersautomatically with PDF attached (On/Off)</li>
        <li>Apply automation for  POS orders(On/Off)</li>
      </ul>
      <div class="faq-block">
        <p><strong>Additional Settings</strong></p>
      </div>
      <ul class="faq-list">
        <li>Set a trigger actionfor the email flow</li>
        <li>Reply email: If customer replies, the response will go to this mailbox. By default, it is the store’s email address</li>
        <li>Add BCCrecipients for better monitoring</li>
        <li>Target Orders/Customers with specific TAGS</li>
        <li>Target Orders/Customers without TAGS</li>
      </ul>
      <div class="faq-block">
        <p>After customizing the settings, click Save to apply the changes.</p>
      </div>
    `,
  },
];
</script>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
