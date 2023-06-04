import Vue from 'vue'
import App from './App.vue'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Part from './views/Part.vue'
import D404 from './views/404.vue'
import Recommend from './views/one/Recommend.vue'
import RanKing from './views/one/RanKing.vue'
import SongList from './views/one/SongList.vue'
// 下载3.5.1版本的vue-router这是vue2
// 2.引入router
import VueRouter from 'vue-router'
//3.注册全局组件
Vue.use(VueRouter)
//4.定义规则
const routes=[
  {
   
    path: "/",
    redirect:"/find" ,
  },
  {
    name:'Find',
    path: "/find",
    component: Find,
    children:[
      {
        path:'recommend',
        component:Recommend
      },
      {
        path:'ranking',
        component:RanKing
      },
      {
        path:'songlist',
        component:SongList
      },

    ]
  },
  {
    name:'My',
    path: "/my",
    component: My,
    props:{
      uname:'dadsa',
      age:'按时大大的'
    }
  },
  {
    name:'Part',
    path: "/part",
    component: Part,
  },
  // {
  //   path: "/part/:username", //有:的路径表示代表要接收的数据
  //   component: Part,
  // },
  {
    path:'*',
    component:D404
  }
]
//5.new 一个路由对象
const router=new VueRouter({
  routes,//创建要带规则
  mode:'history'
})
//路由前置守卫
// 参数1: 要跳转到的路由 (路由对象信息)    目标
// 参数2: 从哪里跳转的路由 (路由对象信息)  来源
// 参数3: 函数体 - next()才会让路由正常的跳转切换, next(false)在原地停留, next("强制修改到另一个路由路径上")
// 注意: 如果不调用next, 页面留在原地
const isLogin = true; // 登录状态(未登录)
router.beforeEach((to,from,next)=>{
  if (to.path === "/my" && isLogin === false) {
    alert("请登录")
    next('/') // 阻止路由跳转跳回主页
  } else {
    next() // 正常放行
  }

})
Vue.config.productionTip = false
//  6. 路由对象注入到vue实例中, this可以访问$route和$router
new Vue({
  router,//放入Vue实例中
  render: h => h(App),
}).$mount('#app')
