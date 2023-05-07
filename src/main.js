import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router' //index.js von router dictionary

const app = createApp(App)

app.use(createPinia())
app.use(router) //router nutzen

app.mount('#app')
