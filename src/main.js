import './assets/main.css'

import { createApp } from 'vue'
import Eyefind from './components/Eyefind/Eyefind.vue'
import router from './router'

createApp(Eyefind).use(router).mount('#app')
