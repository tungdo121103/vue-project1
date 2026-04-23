<template>
  <div class="vatinoivce-wrapper">
    <header class="post-detail-header">
      <h1>Does Vify have a VAT invoice?</h1>
      <p>
        <router-link to="/">Home -</router-link>
        <router-link to="/blog"> Blog</router-link>
        - Does Vify have a VAT invoice?
      </p>
    </header>
    <div class="container">
      <div class="layout-grid">
        <!-- LEFT: TOC -->
        <aside class="toc-sidebar">
          <div class="toc-box">
            <h4 class="toc-title">Table of Contents</h4>

            <ul class="toc-list">
              <li>
                <a href="#what-is-a">1. What Is A VAT Invoice</a>
              </li>

              <li>
                <a href="#what-information"
                  >2. What Information Must A VAT Invoice Include?</a
                >
                <ul>
                  <li><a href="#core">1. Core Invoice Details</a></li>
                  <li><a href="#seller">2. Seller Information</a></li>
                  <li>
                    <a href="#buyer"
                      >3. Buyer Information (For B2B Transactions)</a
                    >
                  </li>
                  <li><a href="#transaction">4. Transaction Details</a></li>
                  <li><a href="#vat">5. VAT Breakdown</a></li>
                </ul>
              </li>

              <li>
                <a href="#why">3. Why VAT Invoices Matter</a>
              </li>
              <li>
                <a href="#does">4. Does Vify Support VAT Invoices?</a>
                <ul>
                  <li>
                    <a href="#which"
                      >1. Which Vify Plan Lets You Include VAT Info?</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="#final">5. Final Thoughts</a>
              </li>
            </ul>
          </div>
        </aside>

        <!-- RIGHT: CONTENT -->
        <main class="post-main">
          <article class="post-article">
            <div class="featured-image-container">
              <div class="date-badge">
                <span class="day">02</span>
                <br />
                <span class="month">Mar</span>
              </div>

              <img :src="anh" alt="How to build" class="main-img" />
            </div>

            <h1 class="entry-title">Does Vify have a VAT invoice?</h1>

            <div class="entry-meta">
              <span
                >By
                <router-link to="/author/daisy" class="card-meta route">
                  <strong>Daisy</strong>
                </router-link></span
              >
              <span class="sep">|</span>
              <span>0 Comments</span>
            </div>

            <div class="entry-content">
              <h2 id="what-is-a">What is a VAT invoice?</h2>
              <p>
                <em>A VAT invoice</em> is a formal document issued by a
                VAT-registered business that clearly outlines the
                <a
                  :href="$router.resolve({ name: 'vatInvoice' }).href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cmt-link"
                  >value-added tax (VAT)</a
                >
                charged on a transaction. Unlike a standard invoice, a VAT
                invoice includes specific tax-related details required by law in
                many regions (especially in the EU and UK), making it essential
                for both tax reporting and VAT recovery.
              </p>
              <p>VAT invoices serve two key purposes:</p>
              <ul>
                <li>
                  For sellers: to record taxable sales and comply with tax
                  regulations
                </li>
                <li>
                  For buyers: to reclaim VAT on eligible business expenses
                </li>
              </ul>
              <p>
                In many jurisdictions, issuing a valid VAT invoice is not
                optional—it’s a legal requirement for B2B transactions involving
                VAT.
              </p>
              <h3 id="core">Core invoice details</h3>
              <ul>
                <li>
                  A unique invoice number (for tracking and audit purposes)
                </li>
                <li>Issue date and, where required, the date of supply</li>
                <li>Currency used in the transaction</li>
              </ul>
              <h3 id="seller">Seller information</h3>
              <ul>
                <li>Business name and address</li>
                <li>VAT registration number</li>
              </ul>
              <h3 id="buyer">Buyer information (for B2B transactions)</h3>
              <ul>
                <li>Customer’s business name and address</li>
                <li>
                  Customer’s VAT number (especially important for cross-border
                  transactions)
                </li>
              </ul>
              <h3 id="transaction">Transaction details</h3>
              <ul>
                <li>Itemized list of goods or services</li>
                <li>Quantity and unit price</li>
                <li>Any discounts applied</li>
              </ul>
              <h3 id="vat">VAT breakdown</h3>
              <ul>
                <li>VAT rate(s) applied (e.g., 0%, 5%, 20%)</li>
                <li>Net amount (excluding VAT)</li>
                <li>Total VAT charged</li>
                <li>Gross total (including VAT)</li>
              </ul>
              <h2 id="why">Why VAT Invoices Matter</h2>
              <p>
                VAT invoices are more than just receipts—they are critical
                financial documents:
              </p>
              <ul>
                <li>
                  <strong>✔️ Tax compliance:</strong> Ensure your business meets
                  local tax regulations
                </li>
                <li>
                  <strong>✔️ Accurate accounting:</strong> Clearly separate net
                  revenue and tax liabilities
                </li>
                <li>
                  <strong>✔️ VAT reclaim:</strong> Allow customers to recover
                  VAT on eligible purchases
                </li>
                <li>
                  <strong>✔️ Audit readiness:</strong> Provide a clear record
                  for tax authorities
                </li>
              </ul>
              <p>
                Without a proper VAT invoice, businesses may
                <strong>not be able to reclaim VAT</strong>, even if it was
                paid.
              </p>
              <h2 id="marketing">Marketing Your Shopify Dropshipping Store</h2>
              <p>
                A well-built store with optimised product listings will generate
                no revenue without traffic. Marketing is, therefore, not an
                optional phase of the business — it is the engine that drives
                growth.
              </p>
              <h2 id="does">Does Vify support VAT invoices?</h2>
              <img :src="anh1" alt="vat" class="main-img" />
              <p>
                Vify Order Printer PDF Invoice (commonly known as Vify PDF
                Invoice or Vify Order Printer) doesn’t specifically label an
                output as a “VAT invoice,” but it supports all the key elements
                needed to create compliant VAT-informed invoices:
              </p>
              <ul class="no-dot">
                <li>
                  ✅ The app lets you generate customizable invoice PDFs that
                  include itemized prices, tax amounts, and shop details.
                </li>
                <li>
                  ✅ It can capture and display customer VAT numbers or other
                  tax IDs on invoices, useful for EU / B2B VAT compliance.
                </li>
              </ul>
              <p>
                So while Vify may not call it a “VAT invoice” in the label, what
                you can generate from the app contains the necessary data fields
                that a VAT invoice requires in most regions — provided you
                include the right VAT numbers and configure the template
                correctly. It is the best invoice app for Shopify that includes
                VAT and no code-knowledge needed.
              </p>
              <h3 id="which">Which Vify plan lets you include VAT info?</h3>
              <p>
                All Vify plans let you include VAT information on invoices. No
                matter which plan you’re on, VAT or tax amounts are
                automatically shown based on your Template settings, so your
                invoices always reflect the correct tax details without
                requiring a specific plan upgrade. Once set up, the invoices you
                generate through Vify will include all essential VAT details —
                keeping your store’s tax documentation clean and compliant.
              </p>
              <h2 id="final">Final Thoughts</h2>
              <p>
                A VAT invoice is a crucial document for any VAT-registered
                business, especially those selling internationally or working
                with other businesses. It ensures transparency, supports tax
                compliance, and enables VAT recovery.
              </p>
              <p>
                With Vify, merchants can easily generate invoices that include
                all the necessary VAT elements—without coding or complex setup.
                By customizing your template and ensuring your tax details are
                correctly configured, you can produce professional, compliant
                VAT invoices directly from your Shopify store.
              </p>
            </div>
            <div class="related-posts">
              <h2 class="related-title">RELATED POSTS</h2>
              <div class="related-grid">
                <div class="related-card">
                  <div class="card-thumb">
                    <div class="card-date">
                      <span class="day">22</span><br /><span class="month"
                        >Apr</span
                      >
                    </div>
                    <img :src="relateposts5" alt="12 Best" />
                  </div>
                  <div class="card-body">
                    <h4 class="card-post-title">
                      <router-link to="/postDetail" class="meta-link"
                        >12 Best Free Shopify Templates: Build a Beautiful Store
                        Without Spending a Cent</router-link
                      >
                    </h4>
                    <p class="card-meta">
                      By
                      <router-link to="/author/lara" class="card-meta route">
                        <strong>Lara</strong>
                      </router-link>
                      0 Comments
                    </p>
                    <div class="divider-short"></div>
                    <p class="card-excerpt">
                      Starting an online store is exciting — until you see the
                      price tag on premium Shopify themes. Many new merchants
                      face the same dilemma: invest...
                    </p>
                  </div>
                </div>

                <div class="related-card">
                  <div class="card-thumb">
                    <div class="card-date">
                      <span class="day">20</span><br /><span class="month"
                        >Apr</span
                      >
                    </div>
                    <img :src="relateposts4" alt="Order Printer Apps" />
                  </div>
                  <div class="card-body">
                    <h4 class="card-post-title">
                      Best Dropshipping Apps for Shopify: Top 7 Picks Compared
                    </h4>
                    <p class="card-meta">
                      By
                      <router-link to="/author/lara" class="card-meta route">
                        <strong>Lara</strong>
                      </router-link>
                      0 Comments
                    </p>
                    <div class="divider-short"></div>
                    <p class="card-excerpt">
                      Choosing the right tool is one of the most critical
                      decisions when building a successful Shopify store — yet
                      many merchants struggle to identify which...
                    </p>
                  </div>
                </div>

                <div class="related-card">
                  <div class="card-thumb">
                    <div class="card-date">
                      <span class="day">17</span><br /><span class="month"
                        >Apr</span
                      >
                    </div>
                    <img :src="relateposts" alt="Vify VAT Invoice" />
                  </div>
                  <div class="card-body">
                    <h4 class="card-post-title">
                      How to Build a Profitable Shopify Dropshipping Store Step
                      by Step
                    </h4>
                    <p class="card-meta">
                      By
                      <router-link to="/author/daisy" class="card-meta route">
                        <strong>Daisy</strong>
                      </router-link>
                      0 Comments
                    </p>
                    <div class="divider-short"></div>
                    <p class="card-excerpt">
                      The global dropshipping market is growing rapidly, making
                      a Shopify dropshipping store one of the most accessible
                      ways to start an online business with low..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import anh from "../assets/relatePosts3.png";
import anh1 from "../assets/vat-invoice1.png";
import relateposts5 from "../assets/relatePosts5.png";
import relateposts4 from "../assets/relatePosts4.png";
import relateposts from "../assets/relatePosts.png";
onMounted(() => {
  document.title = "Does Vify have a VAT invoice? - Vify shopify app";
});
</script>

<style scoped>
.post-detail-header {
  margin-top: -110px;
  padding: 120px 20px 60px;
  background: #454240;
  color: white;
  text-align: center;
}
.post-detail-header h1 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
}
.post-detail-header a {
  color: #fff;
  text-decoration: none;
  opacity: 0.8;
}
/* CONTAINER */
.container {
  max-width: 1400px;
  margin: auto;
  padding: 40px 20px;
}
.second-list a {
  color: blue;
  text-decoration: none;
  font-weight: 600;
}
.second-list strong {
  color: #666;
}
/* 2 CỘT */
.layout-grid {
  display: grid;
  grid-template-columns: 22% 78%;
  gap: 40px;
  align-items: start;
}
.container,
.layout-grid {
  overflow: visible; /* hoặc xoá luôn */
}
#conclusiong strong {
  color: #666;
}
.step1 {
  text-decoration: none;
  color: blue;
}
.meta-link {
  color: black;
  text-decoration: none;
}
.meta-link:hover {
  color: rgb(248, 51, 51);
}
.no-dot {
  list-style: none;
  padding-left: 0;
}
/* TOC */
.toc-sidebar {
  position: sticky;
  top: 120px;
  align-self: start;
}

html {
  scroll-behavior: smooth;
}
.toc-box {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  position: sticky;
}

.toc-title {
  font-size: 17px;
  margin-bottom: 15px;
}

.toc-list,
.toc-list ul {
  list-style: none;
  padding: 0;
}

.toc-list ul {
  padding-left: 15px;
}

.toc-list a {
  display: block;
  padding: 6px 0;
  font-size: 13px;
  color: #666;
  text-decoration: none;
}

.toc-list a:hover {
  color: #ff6550;
}

/* CONTENT */
.post-main {
  width: 100%;
}

.featured-image-container {
  position: relative;
}

.date-badge {
  position: absolute;
  top: 0;
  left: 0;
  background: #ff6550;
  color: white;
  padding: 10px;
}

.main-img {
  width: 100%;
  border-radius: 4px;
}

.entry-title {
  font-size: 32px;
  margin: 20px 0;
}

.entry-meta {
  color: #777;
}

.custom-quote {
  border-left: 4px solid black;
  background: #f9f9f9;
  padding: 20px;
  margin: 30px 0;
  color: #666666;
}
.custom-quote strong {
  color: #666;
}
.cmt-link {
  color: blue;
  text-decoration: none;
  font-weight: 600;
}
.cmt-link:hover {
  color: red; /* hover -> đỏ */
}
.app-img {
  width: 100%;
  max-width: 1000px; /* 👈 giới hạn lại */
  height: auto;
  display: block;
  margin: 15px auto; /* căn giữa */
  border-radius: 6px;
}
.first-cls {
  text-decoration: none;
}
.first-name {
  color: blue;
}
.second-name {
  color: #666;
}
.related-posts {
  margin-top: 50px;
  border-top: 1px solid #eee;
  padding-top: 30px;
}

.related-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.related-card {
  background: #fff;
  transition: transform 0.3s ease;
}

.card-thumb {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}

.card-thumb img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.card-date {
  position: absolute;
  top: 0;
  left: 0;
  background: #ff6550; /* Màu cam giống ảnh */
  color: white;
  padding: 8px 12px;
  text-align: center;
  line-height: 1.2;
  z-index: 1;
}

.card-date .day {
  font-size: 18px;
  font-weight: bold;
}

.card-date .month {
  font-size: 13px;
  text-transform: capitalize;
}

.card-body {
  padding: 15px 0;
}

.card-post-title {
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  cursor: pointer;
}

.card-post-title:hover {
  color: #ff6550;
}

.card-meta {
  text-decoration: none !important;
  font-size: 13px;
  color: #999;
  margin-bottom: 10px;
}
.card-meta .route {
  text-decoration: none;
}
.divider-short {
  width: 40px;
  height: 2px;
  background: #ff6550;
  margin-bottom: 15px;
}

.card-excerpt {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Giới hạn 3 dòng */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
