import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '../src/assets/app.css'
import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config } from "@fortawesome/fontawesome-svg-core";
import ToastService from 'primevue/toastservice';

config.styleDefault = "solid";
const app = createApp(App);
library.add(fas);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(vueAwesomeSidebar)
app.use(ToastService);
app.use(PrimeVue);
app.use(router);
app.mount('#app');
