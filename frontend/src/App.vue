<template>
  <v-app class="white">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons");

#app {
  font-family: "Noto Sans", "Noto Sans KR", sans-serif;

  /* temporary values */
  max-width: 650px;
  min-width: 300px;
  margin: 0px auto;
}
</style>
