<template>
  <v-toolbar flat dense>
    <v-btn icon flat>
      <v-icon @click.stop="$router.go(-1)">arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title"></v-toolbar-title>

    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
.v-toolbar {
  background-color: #ffffff;
  border-bottom: 3px solid #f1f1f3;
}
.v-toolbar__title {
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}
</style>
