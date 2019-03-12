import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import FamenceAPI from '../api/famenceAPI';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    drawer: false,
    member: {},
    authToken: null,
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    setMember(state, payload) {
      state.member = payload;
    },
    getMember(state) {
      return state.member;
    },
    findOneMember(state, payload) {
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
    getMember({ commit }) {
      commit('getMember');
    },
    async findOneMember({ commit }, idMember) {
      try {
        const response = await FamenceAPI.findOneMember(idMember);
        commit('fetchMemberOne', response.data);
      } catch (error) {
        // implementation error handling
      }
    },
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    logout({ commit }) {
      commit('setToken', '');
      commit('setMember', '');
    },
  },
  plugins: [new VuexPersistence({ modules: ['member', 'token']}).plugin],
});

export default store;
