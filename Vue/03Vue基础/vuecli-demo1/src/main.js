import Vue from 'vue'      //引入vue对象 <script src="vue.js"><script>
import App from './App.vue'       //app.vue文件引入过来(vue项目的页面入口)
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false       //控制台有一句提示

// let a=100
new Vue({   //实例化vue
  render: h => h(App),   //准备渲染app页面
}).$mount('#app')      //渲染到index.html文件id叫app的标签上
