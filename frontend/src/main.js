// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import 'babel-polyfill';
import axios from 'axios';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VeeValidate from 'vee-validate';
import ko from 'vee-validate/dist/locale/ko';
import App from './App';
import router from './router';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(Vuetify);

const config = {
  locale: 'ko',
  dictionary: {
    ko,
  },
};

Vue.use(VeeValidate, config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
