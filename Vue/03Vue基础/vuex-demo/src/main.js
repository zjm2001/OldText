import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
state:{
  count:0,
  sum:100,
  list:[2,85,7,8,6,8,9,1,2,3,15,4,8]
},
mutations: {
  // 方法里参数 第一个参数是当前store的state属性
  // payload 载荷 运输参数 调用mutaiions的时候 可以传递参数 传递载荷
  addCount (state) {
    state.count += 1
  },
  addCount1 (state,i) {
    state.count += i
  },
  add(state,i){
    state.count=state.count+i

  }
},
actions:{
  //异步更新如果要从后端获取数据
  //第一个上下文对象(this.$store)
  getAsy(context ){
    setTimeout(() => {
      context.commit('add',500)
    }, 1000);
  },
  getAsy1(context,data){
    setTimeout(() => {
      context.commit('add',data)
    }, 1000);
  },
},
getters:{
  filterList:state => state.list.filter(item=>item>5),
    token: state => state.user.token,
    name: state => state.setting.name
},
modules: {
  user: { 
    namespaced:true,   //user模块
     state: {
       token: '12345'
     }
  },
  setting: {   //setting模块
    state: {
       name: 'Vuex实例'
    }
  }
}
})
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
