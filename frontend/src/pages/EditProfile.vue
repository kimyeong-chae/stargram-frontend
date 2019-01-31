<template>
  <v-container fluid class="pa-0 text-xs-center">
    <tool-bar :title="menu.title"></tool-bar>

    <v-layout class="pa-4" wrap row>
      <v-flex xs12 sm6>
        <v-badge color="purple red--after" overlap bottom>
          <v-avatar color="primary" size="90">
            <v-icon dark>notifications</v-icon>
          </v-avatar>

          <v-icon slot="badge" dark>notifications</v-icon>
        </v-badge>
      </v-flex>

      <v-flex class="pa-2" xs12 sm6>
        <v-form ref="form">
          <v-text-field label="닉네임(10자 이하)"></v-text-field>
          <v-btn block depressed @click="submit">수정</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ToolBar from '../components/ToolBar';

export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      menu: {
        title: '프로필 수정',
      },
    };
  },
};
</script>

<style scoped>
</style>
