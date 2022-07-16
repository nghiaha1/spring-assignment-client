import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
// import BootstrapVue from 'bootstrap-vue';

import './assets/styles/tailwind.css';
import './assets/styles/global.css';
import { registerGlobalComponents } from './utils/import'

let account = localStorage.getItem('account');
if( account ){
    window.axios = require('axios')
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + account;
}

const app = createApp(App);

registerGlobalComponents(app);

app.use(router).mount('#app');

