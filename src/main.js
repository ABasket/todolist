import Vue from 'vue';
import App from './App';
import store from './store'

import './assets/css/style.css'

new Vue({
    el: '#app',
    store,
    render:h => h(App)
});
