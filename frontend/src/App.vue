<template>
  <div class="main">
    <div class="header">
      <nav-bar v-show="$route.path === '/' ? false : true"/>
    </div>

    <div class="section">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavigationBar';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");

.main {
  font-family: "Noto Sans KR", sans-serif;
}

.section {
  padding: 0px;
}
</style>
