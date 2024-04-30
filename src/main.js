import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

//router import
import { router } from './router'

import * as bootstrap from 'bootstrap'

createApp(App).use(router).mount('#app')
