import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import Join from '../pages/Registration';
import Profile from '../pages/Profile';
import FindingUserInfo from '../pages/FindingUserInfo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
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
      name: 'FindPassword',
      component: FindingUserInfo,
    },
  ],
});
