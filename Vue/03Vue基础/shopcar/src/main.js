import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css" // 引入第三方包里的某个css文件
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.baseURL = "https://www.escook.cn"
// 3. axios方法添加到Vue的原型上
Vue.prototype.$axios = axios


new Vue({
  render: h => h(App),
}).$mount('#app')
