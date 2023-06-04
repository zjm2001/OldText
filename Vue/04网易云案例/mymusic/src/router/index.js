import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Play from '../views/Play/index.vue'

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      redirect: '/layout'
  },
  {
      path: '/layout',
      component: Layout,
      redirect: 'layout/home',
      children: [
          {
              path: 'home',
              component: Home,
              meta: { // meta保存路由对象额外信息的
                  title: "首页"
              }
          },
          {
              path: 'search',
              component: Search,
              meta: {
                  title: "搜索"
              }
          }
      ]
  },
  {
      path: '/play',
      component: Play
  }
]

const router = new VueRouter({
  routes,
  mode:'history'  //默认是hash
})

export default router
