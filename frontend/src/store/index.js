import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    drawer: '',
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    toggleDrawer({ commit }) {
      commit('toggleDrawer');
    },
  },
});

export default store;
