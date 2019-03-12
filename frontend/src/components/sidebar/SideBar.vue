<template>
  <v-navigation-drawer :value="drawer" temporary fixed right width="282">
    <v-btn @click.stop="toggleDrawer()" icon>
      <v-icon>close</v-icon>
    </v-btn>

    <component :is="member.idMember ? 'SideBarLoginedMenu' : 'SideBarMenu'"/>

    <div class="sidebar-bottom">
      <v-btn class="sidebar-bottom__button" block color="#7d51ff" dark depressed to="/login">
        <v-layout column align-center>
          <v-flex class="pa-0">
            <span class="sidebar-bottom__button--title">인플루언서 로그인/회원가입</span>
          </v-flex>
          <v-flex class="pa-0">
            <span class="sidebar-bottom__button--sub-title">스타그램을 통해 수익 창출을 해보세요!!</span>
          </v-flex>
        </v-layout>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    SideBarMenu: () => import('@/components/sidebar/SideBarMenu'),
    SideBarLoginedMenu: () => import('@/components/sidebar/SideBarLoginedMenu'),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['toggleDrawer']),
  },
  computed: {
    ...mapState(['member', 'drawer']),
  },
};
</script>

<style scoped>
.v-navigation-drawer {
  font-family: "Noto Sans KR";
}
.sidebar-bottom {
  padding: 16px;
  position: fixed;
  bottom: 0;
}
.sidebar-bottom__button {
  min-width: 250px;
  height: 64px;
  border-radius: 6px;
}
.sidebar-bottom__button--title {
  font-size: 17px;
  font-weight: 900;
}
.sidebar-bottom__button--sub-title {
  font-size: 11px;
  font-weight: 500;
}
</style>
