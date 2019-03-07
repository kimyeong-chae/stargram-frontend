<template>
  <v-container fluid class="result-container" grid-list-md>
    <tool-bar color="transparent"></tool-bar>
    <v-layout class="pt-0" column wrap>
      <v-flex>
        <v-layout row wrap align-center>
          <v-flex>
            <v-divider color="white"></v-divider>
          </v-flex>
          <v-flex class="px-2" shrink>
            <span class="result-header-title" v-text="new Date().toLocaleDateString('ko-KR')"></span>
          </v-flex>
          <v-flex>
            <v-divider color="white"></v-divider>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex>
        <v-card class="result-card">
          <div class="result-card-title">A small River Named Duden Flows by their Place</div>

          <div class="result-card-content">
            <v-layout row wrap>
              <v-flex shrink align-self-center>
                <span>참여자</span>
              </v-flex>

              <v-flex shrink align-self-center>
                <v-avatar class="mx-1" v-for="i in 3" :key="i" size="28" color="grey lighten-2">
                  <img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" alt="alt">
                </v-avatar>
              </v-flex>

              <v-flex shrink align-self-center>
                <span>+ {{ user.project.participant - 3}} People</span>
              </v-flex>
            </v-layout>
          </div>

          <div class="result-card-action">
            <v-btn flat class="result-card-action__button">결과</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-bottom-nav fixed :value="true">
      <v-btn flat color="#9a5af7">
        <v-icon light>mdi-home-variant</v-icon>
      </v-btn>

      <v-btn flat color="#9a5af7">
        <v-icon light>fa-th-list</v-icon>
      </v-btn>
    </v-bottom-nav>

    <side-bar/>
  </v-container>
</template>

<script>
export default {
  components: {
    ToolBar: () => import('@/components/ToolBar'),
    SideBar: () => import('@/components/SideBar/SideBar'),
  },
  data() {
    return {
      user: {
        project: {
          title: 'Back to Nature Campaing Under The Star',
          dueDate: '2d:14h:35m:34s',
          point: 1203,
          goal: 2000,
          participant: 128,
        },
      },
    };
  },
  computed: {
    progressValue() {
      const progressValue =
        (this.user.mission.point / this.user.mission.goal) * 100;
      return progressValue;
    },
  },
};
</script>

<style scoped>
.result-container {
  background-image: linear-gradient(to top, #8e59ff, #f863b7);
  padding: 0;
}
.result-container > .layout {
  padding: 13px;
}
.result-header-title {
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
}
.result-card {
  background: linear-gradient(rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)),
    url("../assets/images/main-image.jpeg");
  background-size: 100%;
  border-radius: 10px;
  color: #ffffff;
}
.result-card-title {
  padding: 16.5px 80px 6px 13px;
  font-size: 14.5px;
  font-weight: 900;
  line-height: 1.31;
  letter-spacing: -0.1px;
}
.result-card-content {
  padding: 10px 13px;
  font-size: 11.8px;
  font-weight: bold;
}
.result-card-action {
  padding: 7px 0;
  text-align: center;
}
.result-card-action__button {
  min-width: 270px;
  height: 46px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  border: solid 1px #ffffff;
  font-size: 16.8px;
  font-weight: bold;
  color: #ffffff;
}
</style>
