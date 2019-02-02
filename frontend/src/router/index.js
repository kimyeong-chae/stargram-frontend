import Vue from 'vue';
import Router from 'vue-router';

import EditProfile from '../pages/EditProfile';
import FindingPassword from '../pages/FindingPassword';
import LoginEmail from '../pages/LoginEmail';
import LoginSocial from '../pages/LoginSocial';
import Notice from '../pages/Notice';
import ProfileCoin from '../pages/ProfileCoin';
import Registration from '../pages/Registration';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
    },
    {
      path: '/edit-profile',
      name: 'EditProfile',
      component: EditProfile,
    },
    {
      path: '/finding-password',
      name: 'FindingPassword',
      component: FindingPassword,
    },
    {
      path: '/login/email',
      name: 'LoginEmail',
      component: LoginEmail,
    },
    {
      path: '/login/social',
      name: 'LoginSocial',
      component: LoginSocial,
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
    {
      path: '/profile/coin',
      name: 'ProfileCoin',
      component: ProfileCoin,
    },
  ],
});
