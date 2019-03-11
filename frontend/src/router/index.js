import Vue from 'vue';
import Router from 'vue-router';

const ChargeCoin = () => import('../pages/ChargeCoin');
const EditProfile = () => import('../pages/EditProfile');
const LoginSocial = () => import('../pages/LoginSocial');
const Main = () => import('../pages/Main');
const MainProject = () => import('../pages/Project');
const MainResult = () => import('../pages/ProjectResult');
const Notice = () => import('../pages/Notice');
const CoinHistory = () => import('../pages/CoinHistory');
const Registration = () => import('../pages/Registration');
const Settings = () => import('../pages/Settings');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/project/:seqProject',
      name: 'MainProject',
      component: MainProject,
      props: true,
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
