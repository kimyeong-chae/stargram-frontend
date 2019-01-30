<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <tool-bar :title="menu.title"></tool-bar>

      <v-list subheader two-line>
        <v-list-group v-for="item in items" :key="item.title">
          <v-list-tile class="outter-content" slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ getDateToString(item.date) }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <v-list-tile class="inner-content" v-for="subitem in item.items" :key="subitem.title">
            <v-list-tile-content>
              <v-list-tile-title>{{ subitem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import ToolBar from '../components/ToolBar';

export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      menu: {
        title: '공지사항',
      },
      items: [
        {
          title: '스타그램',
          date: new Date(),
          items: [{ title: '스타그램 내용' }],
        },
        {
          title: '스타그램',
          date: new Date(),
          items: [{ title: '스타그램 내용' }],
        },
        {
          title: '스타그램',
          date: new Date(),
          items: [{ title: '스타그램 내용' }],
        },
        {
          title: '스타그램',
          date: new Date(),
          items: [{ title: '스타그램 내용' }],
        },
        {
          title: '스타그램',
          date: new Date(),
          items: [{ title: '스타그램 내용' }],
        },
      ],
    };
  },
  methods: {
    getDateToString(date) {
      return date.toLocaleDateString('ko-KR');
    },
  },
};
</script>

<style scoped>
.outter-content .v-list__tile__title {
  font-size: 13px;
}
.outter-content .v-list__tile__sub-title {
  font-size: 12px;
}
.inner-content {
  background-color: #f1f1f3;
}
.inner-content .v-list__tile__title {
  font-size: 13px;
  font-weight: 500;
  color: #5f5f5f;
}
</style>
