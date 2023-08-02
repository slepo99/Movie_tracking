import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import '../style.css'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fas)

const pinia = createPinia()


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(pinia).use(router).mount('#app')
