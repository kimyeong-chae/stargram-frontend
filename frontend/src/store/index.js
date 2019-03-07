import Vue from 'vue';
import Vuex from 'vuex';
import FamenceAPI from '../api/famenceAPI';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    drawer: false,
    member: {},
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    fetchMemberOne(state, payload) {
      state.member = payload;
    },
  },
  actions: {
    toggleDrawer({ commit }) {
      commit('toggleDrawer');
    },
    async fetchMemberOne({ commit }, memberId) {
      try {
        const response = await FamenceAPI.fetchMemberOne(memberId);
        commit('fetchMemberOne', response.data);
      } catch (error) {
        // implementation error handling
      }
    },
  },
});

export default store;
