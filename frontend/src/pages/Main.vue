<template>
  <v-container fluid class="pa-0 main-container" grid-list-md>
    <tool-bar color="transparent"></tool-bar>

    <v-layout wrap row>
      <v-flex xs12>
        <v-card class="py-0" color="white">
          <v-btn class="main-header-avatar" fab absolute top>
            <v-avatar size="58" color="red">
              <img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" alt="alt">
            </v-avatar>
          </v-btn>
          <v-card-text class="pb-1">
            <div class="main-header-title-1 text-xs-center">Double tap for this hottie</div>
            <div class="main-header-title-2 text-xs-center">1h</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <div class="main-mission-title">Mission - 1</div>
      </v-flex>

      <v-flex xs12>
        <v-card class="outter-card" :img="main_bg">
          <v-card-text class="pb-2">
            <div class="main-header-title-3 text-xs-center">{{ user.mission.title }}</div>
          </v-card-text>

          <v-layout justify-center>
            <v-flex xs7>
              <div class="main-header-time text-xs-center">{{ user.mission.dueDate }}</div>
            </v-flex>
          </v-layout>
        </v-card>

        <v-layout justify-center>
          <v-flex class="mx-2" xs12>
            <v-card class="main-menu-rewards">
              <v-card-text class="pa-2">
                <v-layout class="main-menu-point" row wrap>
                  <v-flex class="py-0" grow>
                    <div class="main-menu-rewards-title">My Rewards Points</div>
                    <span class="main-menu-point-title-1">{{ user.mission.point | numberWithComma }}</span>
                    <span class="main-menu-point-title-2">points</span>
                  </v-flex>
                  <v-flex class="pa-0" align-self-end shrink>
                    <div class="main-header-goal">{{ user.mission.goal| numberWithComma }}</div>
                  </v-flex>
                </v-layout>

                <v-layout class="px-1 pb-1 main-menu-progress-bar">
                  <v-flex class="pa-0" align-self-center grow>
                    <v-progress-linear
                      class="progress"
                      :value="progressValue"
                      color="#9a5af7"
                      height="5.5"
                      background-color="#f1f1f1"
                    ></v-progress-linear>
                  </v-flex>
                  <v-flex class="pa-0" align-self-center shrink>
                    <div class="main-menu-finish-bar"></div>
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex class xs4 grow>
                    <div class="main-menu-group">
                      <span class="main-menu-group-title-1">참여한 사람들</span>
                      <br>
                      <span
                        class="main-menu-group-title-2"
                      >{{ user.mission.participant | numberWithComma}}</span>
                      <span class="main-menu-group-title-2">peoples</span>
                    </div>
                  </v-flex>
                  <v-flex xs8 align-self-center shrink>
                    <v-layout class="ma-0" align-center justify-space-around wrap>
                      <v-avatar v-for="i in 5" :key="i" size="30" color="grey lighten-4">
                        <img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" alt="avatar">
                      </v-avatar>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <v-card-actions class="pt-0">
                <v-btn color="#f76592" block dark round>
                  <v-icon>mdi-cards-heart</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-bottom-nav fixed :value="true">
      <v-btn flat color="#9a5af7">
        <v-icon light>mdi-home-variant</v-icon>
      </v-btn>

      <v-btn color="#9a5af7">
        <!-- issued -->
        <img :src="complete">
      </v-btn>
    </v-bottom-nav>
  </v-container>
</template>

<script>
import complete from '@/assets/images/complete-icon@2x.png';
import main_bg from '@/assets/images/main-image.jpeg';
import ToolBar from '../components/ToolBar';

export default {
  data() {
    return {
      complete,
      main_bg,
      user: {
        mission: {
          title: 'Back to Nature Campaing Under The Star',
          dueDate: '2d:14h:35m:34s',
          point: 1203,
          goal: 2000,
          participant: 128,
        },
      },
    };
  },
  components: {
    ToolBar,
  },
  computed: {
    progressValue() {
      const progressValue =
        (this.user.mission.point / this.user.mission.goal) * 100;
      return progressValue;
    },
  },
  filters: {
    numberWithComma(value) {
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
.main-container {
  background-image: linear-gradient(to top, #8e59ff, #f863b7);
}
.main-container > .layout {
  padding: 13px;
}
.main-container > .layout > .flex {
  padding: 4px 0;
}
.v-card {
  border-radius: 15px;
}
.main-header-avatar {
  width: 63px;
  height: 63px;
  left: 50%;
  transform: translateX(-50%);
}
.main-header-title-1 {
  font-size: 18px;
  font-weight: 800;
  padding-top: 30px;
  color: #f463ba;
}
.main-header-title-2 {
  font-size: 16px;
  font-weight: bold;
  color: #979797;
}
.main-header-title-3 {
  /*text-align: center;*/
  /*width: 80%;*/
  font-size: 29px;
  font-weight: 600;
  line-height: 1.05;
  color: white;
}
.main-mission-title {
  font-size: 17px;
  font-weight: bold;
  color: white;
}

.outter-card {
  height: 264px;
}

.main-header-time {
  opacity: 0.7;
  border-radius: 12px;
  background-color: #9a5af7;
  font-size: 15.3px;
  font-weight: 600;
  color: white;
}
.main-menu-rewards {
  margin-top: -110px;
}
.main-menu-rewards-title {
  font-size: 12.3px;
  font-weight: 600;
  color: #985af8;
}
.main-menu-point {
  line-height: 1.3;
}
.main-menu-point-title-1 {
  font-size: 28.8px;
  font-weight: 900;
  color: #9a5af7;
}
.main-menu-point-title-2 {
  font-size: 10.8px;
  font-weight: 500;
  color: #9a5af7;
}
.main-header-goal {
  font-size: 9.8px;
  font-weight: bold;
  color: #9a5af7;
}
.v-progress-linear {
  border-radius: 18px;
}
.main-menu-progress-bar {
  height: 11px;
}
.main-menu-finish-bar {
  width: 2.5px;
  height: 10.5px;
  border-radius: 1px;
  background-color: #9a5af7;
}
.main-menu-group {
  line-height: 1.2;
}
.main-menu-group-title-1 {
  font-size: 13.3px;
  font-weight: bold;
}
.main-menu-group-title-2 {
  font-size: 12.3px;
  font-weight: bold;
  color: #a2a2a2;
}
.v-bottom-nav img {
  width: 20px;
  height: 20px;
}
.v-btn--round {
  border-radius: 19px;
}
</style>
