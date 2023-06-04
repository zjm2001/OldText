import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入样式
import './assets/flexible'
import './assets/reset.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
