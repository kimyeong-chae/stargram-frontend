import Vue from 'vue';
import Router from 'vue-router';
import LoginSocial from '../pages/LoginSocial';
import LoginEmail from '../pages/LoginEmail';
import Join from '../pages/Registration';
import Profile from '../pages/Profile';
import FindingPassword from '../pages/FindingPassword';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
    },
    {
      path: '/login/social',
      name: 'LoginSocial',
      component: LoginSocial,
    },
    {
      path: '/login/email',
      name: 'LoginEmail',
      component: LoginEmail,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Join,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/finding-password',
      name: 'FindingPassword',
      component: FindingPassword,
    },
  ],
});
