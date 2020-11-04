import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

require('./store/subscriber');

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.config.productionTip = false;

store.dispatch('auth/attempt', localStorage.getItem('access_token')).then(() => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');    
});

