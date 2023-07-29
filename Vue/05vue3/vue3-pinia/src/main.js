import { createApp } from 'vue'
// 1.下载pinia包导入
import { createPinia } from 'pinia'
import App from './App.vue'
const pinia = createPinia()   // 2.创建实例
// 3.使用链式的方式进行挂载
//createApp(App).use(pinia).mount('#app')
//或者不使用链式
const app =createApp(App)
app.use(pinia)
app.mount('#app')
