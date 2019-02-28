import Vue from 'vue';
import Router from 'vue-router';

import ChargeCoin from '../pages/ChargeCoin';
import EditProfile from '../pages/EditProfile';
import FindingPassword from '../pages/FindingPassword';
import LoginSocial from '../pages/LoginSocial';
import Main from '../pages/Main';
import MainProject from '../pages/MainProject';
import MainResult from '../pages/MainResult';
import Notice from '../pages/Notice';
import CoinHistory from '../pages/CoinHistory';
import Registration from '../pages/Registration';
import Settings from '../pages/Settings';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Main,
    },
    {
      path: '/project/:idProject',
      name: 'MainProject',
      component: MainProject,
    },
    {
      path: '/result/:idProject',
      name: 'MainResult',
      component: MainResult,
    },
    {
      path: '/member/:idMember/coin/charge',
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
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/auth/:provider',
      component: {
        template: '<div class="auth-component"></div>',
      },
    },
  ],
});
