<template>
  <div class="main">
    <div class="header">
      <NavBar/>
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
</style>
