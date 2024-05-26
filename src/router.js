import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue';
import Payment from './views/Payment.vue';
import Summary from './views/Summary.vue';
import Result from './views/Result.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary,
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
  },
];

const router = createRouter ({
  history: createWebHashHistory(),
  routes,
});

export default router;
