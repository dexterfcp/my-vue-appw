<template>
  <div class="backdrop">
    <div class="add-product">
      <h3>Add Product</h3>
      <form @submit.prevent="addProduct">
        <input v-model="productName" placeholder="Name of Product" type="text" required />
        <input v-model="productPrice" placeholder="Price of Product" type="number" required />
        <button type="submit">Agregar</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productName: '',
        productPrice: 0,
      };
    },
    methods: {
      addProduct() {
        const product = {
          name: this.productName,
          price: this.productPrice,
        };
        this.$store.commit('payment/ADD_PRODUCT', product);
        this.productName = '';
        this.productPrice = 0;
      }
    }
  };
  </script>
  
<style scoped>
</style>