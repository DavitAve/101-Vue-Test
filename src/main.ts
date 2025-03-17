import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import './styles/main.css'
import clickOutside from './directives/clickOutside'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(clickOutside);
app.mount('#app')
