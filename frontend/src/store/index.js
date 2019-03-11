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
    setMember(state, payload) {
      localStorage.setItem('member', JSON.stringify(payload));
      state.member = payload;
    },
    getMember(state) {
      const member = localStorage.getItem('member');
      if (member) {
        state.member = JSON.parse(member);
      }
    },
    findOneMember(state, payload) {
      state.member = payload;
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
  },
});

export default store;
