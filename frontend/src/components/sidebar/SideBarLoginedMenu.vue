<template>
  <div>
    <v-list class="sidebar-menu-header">
      <v-list-tile to="/login" avatar>
        <v-list-tile-avatar size="45">
          <img class="sidebar-menu-header__avatar" :src="member.profileUrl">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <span class="sidebar-menu-header__text">{{member.name}}</span>
        </v-list-tile-content>

        <v-list-tile-action>
          <img src="@/assets/images/arrow-bg.png" alt="arrow-icon">
        </v-list-tile-action>
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>

    <v-list class="sidebar-menu-contents">
      <div class="sidebar-menu-contents__header">하트 관리</div>

      <v-list-tile to="/heart">
        <v-list-tile-content>
          <v-container class="pa-0" fill-height>
            <v-layout align-center>
              <v-flex shrink>
                <div class="sidebar-menu-contents__wrap-image">
                  <img
                    class="sidebar-menu-contents__image"
                    src="@/assets/images/heart-icon-bg-2@2x.png"
                  >
                </div>
              </v-flex>
              <v-flex grow>
                <span
                  class="sidebar-menu-contents__text"
                >{{ member.cntHeartBalance | numberWithComma }} heart</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-content>

        <v-list-tile-action>
          <img src="@/assets/images/arrow-bg.png" alt="arrow-icon">
        </v-list-tile-action>
      </v-list-tile>

      <v-divider></v-divider>
    </v-list>

    <v-list v-for="(category, index) in categories" :key="index" class="sidebar-menu-contents">
      <div class="sidebar-menu-contents__header">{{ category.header }}</div>

      <div v-for="item in category.items" :key="item.title">
        <v-list-tile to="item.link">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <img src="@/assets/images/arrow-bg.png" alt="arrow-icon">
          </v-list-tile-action>
        </v-list-tile>

        <v-divider class="my-1"></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SideBarLoginedMenu',
  data() {
    return {
      categories: [
        {
          header: '기부한 프로젝트',
          items: [{ title: '기부한 프로젝트 목록', link: '/me/project' }],
        },
        {
          header: '고객지원',
          items: [
            { title: '이용방식설명', link: '/guide' },
            { title: '공지사항', link: '/notice' },
            { title: '설정', link: '/settings' },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState(['member', 'drawer']),
  },
  filters: {
    numberWithComma(value) {
      if (!value) return value;
      return value
        .toString()
        .split('')
        .reverse()
        .reduce((acc, digit, i) => {
          if (i > 0 && i % 3 === 0) acc.push(',');
          return [...acc, digit];
        }, [])
        .reverse()
        .join('');
    },
  },
};
</script>

<style scoped>
.v-divider {
  margin: 0px 16px;
}
.sidebar-menu-header {
  padding: 0;
  margin-bottom: 20px;
}
.sidebar-menu-header__avatar {
  border: 2px solid #7d51ff;
}
.sidebar-menu-header__text {
  padding: 0 3px;
  font-size: 15px;
  font-weight: bold;
  color: #111111;
}
.sidebar-menu-contents {
  padding: 0;
  margin-bottom: 20px;
}
.sidebar-menu-contents__header {
  padding: 0 16px;
  font-size: 13px;
  font-weight: bold;
  color: #7d51ff;
}
.sidebar-menu-contents__wrap-image {
  padding-top: 7px;
}
.sidebar-menu-contents__image {
  width: 22px;
  height: 20px;
}
.sidebar-menu-contents__text {
  font-size: 17px;
  font-weight: 500;
  color: #3d4049;
}
.sidebar-menu-contents .v-list__tile__title {
  font-size: 17px;
  font-weight: 500;
  color: #3d4049;
}
</style>
