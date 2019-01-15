// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import Materialize from 'materialize-css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import App from './App';
import router from './router';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.use(Materialize);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
