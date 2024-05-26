const state = {
    products: JSON.parse(localStorage.getItem('products')) || [],
    paymentData: {},
    transactionResult: null,
  };
  
  const mutations = {
    ADD_PRODUCT(state, product) {
      state.products.push(product);
      localStorage.setItem('<products>', JSON.stringify(state.products));

    },
    REMOVE_PRODUCT(state, productIndex) {
      state.products.splice(productIndex, 1);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    SET_PAYMENT_DATA(state, paymentData) {
      state.paymentData = paymentData;
    },
    SET_TRANSACTION_RESULT(state, result) {
      state.transactionResult = result;
    },
  };
  
  const actions = {
    fetchProduct({ commit }) {
      const product = {
        id: 1,
        name: 'Producto Base 1',
        price: 100.00,
      };
      commit('ADD_PRODUCT', product);
    },
    processPayment({ commit }, paymentData) {
      commit('SET_PAYMENT_DATA', paymentData);
      return new Promise(() => {
        setTimeout(() => {
          if (paymentData.cardNumber && paymentData.expiryDate && paymentData.cvv && Math.random() > 0.5) {
            commit('SET_TRANSACTION_RESULT', 'success');
          } else {
            commit('SET_TRANSACTION_RESULT', 'error');
          }
        }, 1000);
      });
      
    },
  };
  
  const getters = {
    products: state => state.products,
    paymentData: state => state.paymentData,
    transactionResult: state => state.transactionResult,
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  