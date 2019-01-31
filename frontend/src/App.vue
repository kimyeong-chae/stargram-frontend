<template>
  <div>
    <side-bar/>
    <router-view></router-view>
  </div>
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

div {
  font-family: "Noto Sans KR", sans-serif;
}
</style>
