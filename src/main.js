import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPersist)

app.use(pinia)
app.use(router)

app.use(Toast, {
    position: "top-center",
});
app.use(FloatingVue)

app.mount('#app')
