<template>
  <div>
    <v-list class="sidebar-menu-header" two-line>
      <v-list-tile to="/login">
        <v-list-tile-content>
          <v-list-tile-title class="mb-1">로그인/회원가입</v-list-tile-title>
          <v-list-tile-sub-title>더 놀라운 스타그램을 만나보세요!</v-list-tile-sub-title>
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
export default {
  name: 'SideBarMenu',
  data() {
    return {
      categories: [
        {
          header: '고객지원',
          items: [
            { title: '이용방식설명', link: '/guide' },
            { title: '공지사항', link: '/notice' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-divider {
  margin: 0px 16px;
}
.sidebar-menu-header {
  padding: 0;
  margin-bottom: 54px;
}
.sidebar-menu-header .v-list__tile__title {
  font-size: 17px;
  font-weight: 900;
}
.sidebar-menu-header .v-list__tile__sub-title {
  font-size: 11px;
  font-weight: 500;
  color: #7b7b7b;
}
.sidebar-menu-contents {
  padding: 0;
}
.sidebar-menu-contents__header {
  padding: 5px 16px;
  font-size: 13px;
  font-weight: bold;
  color: #7d51ff;
}
.sidebar-menu-contents .v-list__tile__title {
  font-size: 17px;
  font-weight: 500;
}
</style>
