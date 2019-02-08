<template>
  <v-toolbar :color="color" :class="{ 'tool-bar-divider': title}" flat dense>
    <v-btn v-if="title" icon flat>
      <v-icon @click.stop="$router.go(-1)">arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title v-if="title" v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon v-if="!title" dark @click.stop="toggleDrawer()"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
export default {
  props: ['title', 'color'],
};
</script>

<style scoped>
.tool-bar-divider {
  border-bottom: 3px solid #f1f1f3 !important;
}
.v-toolbar__title {
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}
</style>
