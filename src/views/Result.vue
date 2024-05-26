<template>
    <div class="result">
      <h2>Transaction Result</h2>
      <p>{{ result }}</p>
      <button @click="goHome">Go Home</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      result() {
        return this.$store.getters['payment/transactionResult'];
      },
    },
    methods: {
      goHome() {
        localStorage.removeItem('products');
        this.$router.push('/');
      },
    },
  };
  </script>
  