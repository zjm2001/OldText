import Vue from 'vue'
import App from './App.vue'
//全局注册组件
import Pannel1 from "./components/Pannel1.vue";
Vue.component('Pannel1',Pannel1)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
