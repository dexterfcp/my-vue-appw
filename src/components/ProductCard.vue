<template>
  <div class="backdrop">
    <div class="container">
      <div class="add-product-form">
        <AddProduct />
      </div>
      <div class="product-list">
        <h1>Products</h1>
        <ul>
          <li v-for="(product, index) in products" :key="index">
            {{ product.name }} - ${{ product.price }}
            <button @click="removeProduct(index)">Eliminar</button>
          </li>
        </ul>
      </div>
      
  </div>
  <button @click="pay" >Pay with credit card</button>
</div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue';

export default {
  components: {
    AddProduct,
  },
  computed: {
    products() {
      return this.$store.state.payment.products;
    },
  },

  methods: {
    removeProduct(productIndex) {
      this.$store.commit('payment/REMOVE_PRODUCT', productIndex);
    },
    pay() {
      this.$router.push('/payment');
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');



@media (min-width: 768px) {
  .backdrop {
    padding: 40px;
  }
}

.container {
  display: flex;
  justify-content: space-between;
}
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
  }
}

.product-list,
.add-product-form {
  width: 100%;
}
@media (min-width: 768px) {
  .product-list,
  .add-product-form {
    width: 45%;
  }
}

</style>
  