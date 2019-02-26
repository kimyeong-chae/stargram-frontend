import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    drawer: null
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {

  },
});

export default store;
