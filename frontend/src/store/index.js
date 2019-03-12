import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import FamenceAPI from '../api/famenceAPI';

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
    findOneMember(state, payload) {
      state.member = payload;
    },
    updateMemberProfile(state, payload) {
      state.member.nickname = payload.nickname;
      state.member.profileUrl = payload.profileUrl;
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
    async findOneMember({ commit }, idMember) {
      try {
        const response = await FamenceAPI.findOneMember(idMember);
        commit('fetchMemberOne', response.data);
      } catch (error) {
        // implementation error handling
      }
    },
    async updateMemberProfile({ commit }, formData) {
      try {
        const response = await FamenceAPI.updateMemberProfile(
          this.member.idMember,
          formData,
        );
        commit('updateMemberProfile', response.data);
        // 완료 후 라우팅? 모달?
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
  plugins: [new VuexPersistence({ modules: ['member', 'token'] }).plugin],
});

export default store;
