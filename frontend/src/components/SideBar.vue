<template>
  <v-navigation-drawer v-model="drawer" temporary fixed right width="282">
    <v-list class="pb-4" id="sidebar-top" two-line>
      <v-btn @click.stop="toggleDrawer" icon>
        <v-icon>close</v-icon>
      </v-btn>

      <v-list-tile v-if="!user">
        <v-list-tile-content>
          <v-list-tile-title>로그인/회원가입</v-list-tile-title>
          <v-list-tile-sub-title>더 놀라운 스타그램을 만나보세요!</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon @click="$router.push('/login')">keyboard_arrow_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile v-else avatar>
        <v-list-tile-avatar>
          <img :src="user.profile">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{user.name}}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon @click="$router.push('/profile')">keyboard_arrow_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider></v-divider>
    </v-list>

    <v-list
      v-for="category in categories"
      :key="category.header"
      class="pb-4"
      id="sidebar-middle"
      subheader
    >
      <v-subheader v-if="user || category.required === ''">{{ category.header }}</v-subheader>

      <div v-if="user || category.required === ''" wrap>
        <v-list-tile v-for="item in category.items" :key="item.title">
          <v-list-tile-content v-if="user && category.header === '포인트관리'">
            <v-list-tile-title>{{numberWithCommas(user.point)}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-content v-else-if="user || item.required === ''">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action v-if="user || item.required==''">
            <v-icon @click="$router.push(item.link)">keyboard_arrow_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </div>
    </v-list>

    <v-container v-if="!user" id="sidebar-bottom">
      <v-layout justify-center>
        <v-btn block color="#7d51ff" dark depressed to="/login">
          <span>인플루언서 로그인/회원가입</span>
        </v-btn>
      </v-layout>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  data() {
    return {
      user: {
        profile: 'test',
        name: 'test',
        point: '100000',
      },
      categories: [
        {
          required: 'user',
          header: '포인트관리',
          items: [{ title: '', required: 'user' }],
        },
        {
          required: '',
          header: '고객지원',
          items: [
            { title: '이용방식 설명', link: '/guide', required: '' },
            { title: '공지사항', link: '/notice', required: '' },
            { title: '설정', link: '/setting', required: 'user' },
          ],
        },
      ],
    };
  },
  computed: {
    drawer: {
      get: function () {
        return this.$store.state.drawer;
      },
      set: function () {
        return this.$store.state.drawer;
      },
    },
  },
  methods: {
    numberWithCommas(n) {
      return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} point`;

    },
    ...mapMutations([
      'toggleDrawer' // this.increment()를 this.$store.commit('increment')에 매핑합니다.
    ]),
  },

};
</script>

<style scoped>
#sidebar-top .v-divider {
  margin: 0 16px;
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
