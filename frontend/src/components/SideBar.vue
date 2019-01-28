<template>
  <v-layout>
    <v-container>
      <v-layout justify-center>
        <v-btn color="pink" dark @click.stop="drawer = !drawer">메뉴</v-btn>
      </v-layout>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary right width="282">
      <v-list class="pb-4" id="sidebar-top" two-line>
        <v-btn @click.stop="drawer = !drawer" icon>
          <v-icon>close</v-icon>
        </v-btn>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>로그인/회원가입</v-list-tile-title>
            <v-list-tile-sub-title>더 놀라운 스타그램을 만나보세요!</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pb-4" id="sidebar-middle" subheader>
        <v-subheader>{{ header }}</v-subheader>

        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-container id="sidebar-bottom">
        <v-layout justify-center>
          <v-btn block color="#7d51ff" dark depressed to="/login/email">
            <span>인플루언서 로그인/회원가입</span>
          </v-btn>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      header: '고객지원',
      items: [{ title: '이용방식 설명' }, { title: '공지사항' }],
    };
  },
};
</script>

<style scoped>
#sidebar-top .v-list__tile__content,
#sidebar-top .v-list__tile__action {
  border-bottom: 1px solid #e6e6e6;
}
#sidebar-top .v-list__tile__title {
  font-size: 17.5px;
  font-weight: 900;
}
#sidebar-top .v-list__tile__sub-title {
  font-size: 11px;
}
#sidebar-middle .v-subheader {
  font-size: 13px;
  font-weight: bold;
  color: #7d51ff;
}
#sidebar-middle .v-list__tile__content,
#sidebar-middle .v-list__tile__action {
  font-size: 16px;
  border-bottom: 1px solid #e6e6e6;
}
#sidebar-bottom {
  position: fixed;
  bottom: 0;
}
#sidebar-bottom span {
  font-size: 17.5px;
  font-weight: 900;
}
</style>
