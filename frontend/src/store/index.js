import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    drawer: false,
    member: {
      name: '',
      nickname: '',
      email: '',
      idMember: '',
      status: '',
      heartBalance: 0,
      profileUrl: '',
      nmJoinClass: '',
    },
    authToken: null,
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    setMember(state, payload) {
      state.member = payload;
    },
    setToken(state, payload) {
      state.authToken = payload;
    },
  },
  actions: {
    toggleDrawer({ commit }) {
      commit('toggleDrawer');
    },
    setMember({ commit }, member) {
      commit('setMember', member);
    },
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    logout({ commit }) {
      commit('setToken', '');
      commit('setMember', '');
    },
  },
  plugins: [new VuexPersistence({ modules: ['member', 'token'] }).plugin],
});

export default store;
