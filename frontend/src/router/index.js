import Vue from 'vue';
import Router from 'vue-router';
import LoginSocial from '../pages/LoginSocial';
import LoginEmail from '../pages/LoginEmail';
import Join from '../pages/Registration';
import EditProfile from '../pages/EditProfile';
import FindingPassword from '../pages/FindingPassword';
import Notice from '../pages/Notice';

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
      path: '/notice',
      name: 'Notice',
      component: Notice,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Join,
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
  ],
});
