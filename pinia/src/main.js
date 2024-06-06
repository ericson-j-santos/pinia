import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'


const pinia: Pinia = createPinia()

createApp(App)
    .use(pinia)
    .mount('#app')