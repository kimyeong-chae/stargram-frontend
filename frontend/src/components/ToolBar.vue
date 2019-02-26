<template>
  <v-toolbar :color="color" :class="{ 'tool-bar-divider': (color !== 'transparent')}" flat dense>
    <v-btn v-if="title" icon flat :dark="color === 'transparent'">
      <v-icon @click.stop="$router.go(-1)">arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title v-if="color !== 'transparent' && title " v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon v-if="!title || color !== 'transparent'" dark @click.stop="toggleDrawer"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['title', 'color'],
  methods: {
    ...mapActions(['toggleDrawer']),
  },
};
</script>

<style scoped>
.tool-bar-divider {
  border-bottom: 3px solid #f1f1f3 !important;
}
.white-text {
  color: #ffffff;
}
.v-toolbar__title {
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}
</style>
