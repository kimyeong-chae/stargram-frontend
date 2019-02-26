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
import veeKo from 'vee-validate/dist/locale/ko';
import veeEn from 'vee-validate/dist/locale/en';
import VueI18n from 'vue-i18n';
import store from './store';
import App from './App';
import router from './router';
import messages from './lang';


Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(Vuetify);

const config = {
  locale: 'ko',
  dictionary: {
    ko: veeKo,
    en: veeEn,
  },
};

Vue.use(VeeValidate, config);


Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ko',
  messages,
});


/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>',
});
