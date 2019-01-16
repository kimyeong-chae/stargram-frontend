<template>
  <div class="nav-bar">
    <div class="arrow-btn">
      <img
        @tap="$router.go(-1)"
        class="arrow-img"
        src="../images/arrow-bg-1.png"
        srcset="../images/arrow-bg-1.png 2x, ../images/arrow-bg-1.png 3x"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
};
</script>

<style scoped>
@media screen and (max-width: 320px) {
  .nav-bar {
    margin-left: 17px;
    margin-top: 15.5px;
    margin-bottom: 34.5px;
  }
  .arrow-img {
    width: 13.5px;
    height: 14px;
    object-fit: contain;
  }
}
</style>
