import Vue from 'vue'
import App from './App.vue'
// 1. 引入你需要的组件
// import vant from 'vant';  //全局引入尽量使用按需引入
// 使用官网推荐插件自动按需引入
//yarn add unplugin-vue-components -D
// 2. 引入组件样式
// import 'vant/lib/index.css';

Vue.config.productionTip = false
// Vue.use(vant)
new Vue({
  render: h => h(App),
}).$mount('#app')
