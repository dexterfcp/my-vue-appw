<template>
    <div class="summary">
      <h2>Summary</h2>
      <ul>
        <li v-for="(product, index) in products" :key="index">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>
      <p>Total: ${{ totalAmount }}</p>

      <p>Card Number: {{ paymentData.cardNumber }}</p>
      <p>Expiry Date: {{ paymentData.expiryDate }}</p>
      <p>CVV: {{ paymentData.cvv }}</p>
      <button @click="confirmPayment">Confirm Payment</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      products() {
        return this.$store.getters['payment/products'];
      },
      totalAmount() {
        return this.products.reduce((total, product) => total + product.price, 0);
      },
      paymentData() {
        return this.$store.getters['payment/paymentData'];
      },
    },
    methods: {
      confirmPayment() {
        this.$router.push('/result');
      },
    },
  };
  </script>
  