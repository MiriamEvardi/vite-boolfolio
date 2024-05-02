import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

// import the paginate's package
import VueAwesomePaginate from "vue-awesome-paginate";

//router import
import { router } from './router.js'

import * as bootstrap from 'bootstrap'

// import the necessary css file (paginate)
import "vue-awesome-paginate/dist/style.css";

createApp(App).use(router).use(VueAwesomePaginate).mount('#app')
