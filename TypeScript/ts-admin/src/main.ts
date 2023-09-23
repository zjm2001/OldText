
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import $http from 'axios';
const app = createApp(App)

app.use(createPinia())
app.config.globalProperties.$http = $http;

app.mount('#app')

