import Vue from 'vue';
import Router from 'vue-router';

import ChargeCoin from '../pages/ChargeCoin';
import EditProfile from '../pages/EditProfile';
import FindingPassword from '../pages/FindingPassword';
import LoginEmail from '../pages/LoginEmail';
import LoginSocial from '../pages/LoginSocial';
import Main from '../pages/Main';
import Notice from '../pages/Notice';
import CoinHistory from '../pages/CoinHistory';
import Registration from '../pages/Registration';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Main,
    },
    {
      path: '/charge-coin',
      name: 'ChargeCoin',
      component: ChargeCoin,
    },
    {
      path: '/member/:idMember/profile/edit',
      name: 'EditProfile',
      component: EditProfile,
    },
    {
      path: '/forgot-password',
      name: 'FindingPassword',
      component: FindingPassword,
    },
    {
      path: '/login/email',
      name: 'LoginEmail',
      component: LoginEmail,
    },
    {
      path: '/login',
      name: 'LoginSocial',
      component: LoginSocial,
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice,
    },
    {
      path: '/join',
      name: 'join',
      component: Registration,
    },
    {
      path: '/member/:idMember/coin',
      name: 'CoinHistory',
      component: CoinHistory,
    },
  ],
});
