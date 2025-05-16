import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // <== Ajoute ceci

const app = createApp(App)

app.use(createPinia())
app.use(router) // <== Ajoute ceci aussi

app.mount('#app')
