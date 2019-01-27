// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
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
