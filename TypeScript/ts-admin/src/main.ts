
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import $http from 'axios';
const app = createApp(App)

app.use(createPinia())

app.mount('#app')

//测试axios
type Chan={
    data:{
        channels:{
            id:number,
            name:string
        }[]
    },
    message:string
}
const getAPI= async ()=>{
    const res = await $http.get<Chan>('http://geek.itheima.net/v1_0/channels')
    console.log(res.data.data.channels[0].name);
    
}  
getAPI()
