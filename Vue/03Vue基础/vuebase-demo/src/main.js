import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false
//方式一定义全局过滤器1
// Vue.filter('rev',val=>{
//  return val.split('').reverse().join('')
// })
new Vue({
  render: h => h(App),
}).$mount('#app')
