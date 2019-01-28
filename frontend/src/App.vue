<template>
  <div class="main">
    <div class="header">
      <side-bar/>
      <nav-bar v-show="$route.path === '/' ? false : true"/>
    </div>

    <div class="section">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavigationBar';
import SideBar from './components/SideBar';

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons");

.main {
  font-family: "Noto Sans KR", sans-serif;
}

.section {
  padding: 0px;
}
</style>
