<template>
  <v-app class="white">
    <side-bar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from './components/SideBar';

export default {
  name: 'App',
  components: {
    SideBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons");

#app {
  font-family: "Noto Sans KR", sans-serif;
}
</style>
