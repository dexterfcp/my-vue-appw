<template>
    <div class="home">
      <ProductCard :product="product" />
    </div>
  </template>
  
  <script>
  import ProductCard from '@/components/ProductCard.vue';
  
  export default {
    components: {
      ProductCard,
    },
    computed: {
      product() {
        return this.$store.getters['payment/products'];
      },
    },
    created() {
      this.$store.dispatch('payment/fetchProduct');
    },
  };
  </script>
  