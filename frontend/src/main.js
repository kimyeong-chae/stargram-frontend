// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import 'babel-polyfill';
import axios from 'axios';
import VueAxios from 'vue-axios';
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
import VueAuthenticate from 'vue-authenticate';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

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

Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:8080/api', // Your API domain
  providers: {
    facebook: {
      clientId: '234277800791435',
      redirectUri: 'http://localhost:8080/auth/facebook', // Your client app URL
    },
    instagram: {
      clientId: '58a00d5d1eb049e9a6a76941ef8a5f01',
      redirectUri: 'http://localhost:8080/auth/instagram', // Your client app URL
    },
    google: {
      clientId: '1086753375076-1ea7pch4mdb552069gqj20pm9k5fc4l8.apps.googleusercontent.com',
      redirectUri: 'http://localhost:8080/auth/google', // Your client app URL
    },
  },
})


/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>',
});
