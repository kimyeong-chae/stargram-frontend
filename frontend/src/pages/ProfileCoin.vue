<template>
  <v-container fluid class="pa-0 text-xs-center">
    <tool-bar :title="menu.title"></tool-bar>

    <v-layout row wrap justify-center>
      <v-flex class="pt-2 coin-menu-top" xs12 sm6>
        <v-list>
          <v-list-tile>
            <v-img class="ml-2 mr-4" max-width="22" :src="heart"></v-img>
            <v-list-tile-content>
              <v-list-tile-title>
                <div class="title">0</div>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn depressed>충전</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>

      <v-flex class="pa-3" xs12 sm6>
        <v-tabs v-model="tabs" color="#f1f1f3" grow hide-slider>
          <v-tab :class="{ 'tab-active': !tabs }" @click="tabs = !tabs">
            <div class="text-no-wrap" :class="{'tab-content-active': !tabs}">충전 내역</div>
          </v-tab>
          <v-tab :class="{ 'tab-active': tabs }" @click="tabs = !tabs">
            <div class="text-no-wrap" :class="{'tab-content-active': tabs}">사용 내역</div>
          </v-tab>

          <v-tabs-items class="coin-tab-content" v-model="tabs">
            <v-tab-item v-for="(item, index) in coin" :key="index">
              <v-list>
                <v-list-tile class="pt-2" v-for="(item, index) in item.items" :key="index">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <div v-if="item.to">
                        <span class="text-color-1">{{ item.to }}</span>
                        <span class>에</span>
                        <span class="text-color-2">{{ item.amount }}</span>
                        <span class>코인을 사용했습니다.</span>
                      </div>
                      <div v-else>
                        <span class="text-color-2">{{ item.amount }}</span>
                        <span class>코인을 충전했습니다.</span>
                      </div>
                    </v-list-tile-title>
                    <v-list-tile-sub-title>{{ getDateToString(item.date) }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import heart from '@/assets/images/heart-icon-bg.png';
import ToolBar from '../components/ToolBar';

export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      heart,
      tabs: null,
      menu: {
        title: '마이 코인',
      },
      coin: {
        charge: {
          items: [
            { date: new Date(), amount: 100 },
            { date: new Date(), amount: 500 },
          ],
        },
        usage: {
          items: [
            { date: new Date(), amount: 100, to: 'luv' },
            { date: new Date(), amount: 500, to: 'blanca' },
          ],
        },
      },
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
.title {
  color: #7d51ff;
  font-weight: 900;
}
.coin-menu-top .v-btn {
  font-size: 12px;
  font-weight: bold;
  min-width: 53px;
}
.tab-active {
  background-color: #474658;
}
.tab-content-active {
  color: #ffffff;
}
.text-color-1 {
  color: #ff3030;
}
.text-color-2 {
  color: #7d51ff;
}
.coin-tab-content .v-list__tile__content {
  font-size: 13px;
  font-weight: 500;
  padding-bottom: 15px;
  border-bottom: 1px solid #e6e6e6;
}
.coin-tab-content .v-list__tile__sub-title {
  font-size: 12px;
}
</style>
