import {createStore} from 'vuex';
import payment from './modules/payment';

const store = createStore({
  modules: {
    payment,
  },
});

export default store