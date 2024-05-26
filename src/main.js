import { createApp, h } from "vue";
import App from './App.vue'
import router from './router.js'
import store from './store'
import './assets/css/global.css'

const app = createApp({
    render: () => h(App)
  })

  app.use(store).use(router).mount('#app')
