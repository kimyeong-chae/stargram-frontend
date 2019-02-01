<template>
  <v-container fluid class="pa-0 text-xs-center">
    <tool-bar :title="menu.title"></tool-bar>

    <v-layout wrap row>
      <v-flex class="py-2" xs12 sm6>
          <v-avatar extended size="90">
            <v-img
              v-if="member.profileUrl === ''"
              :src="DefaultImagePath"
            ></v-img>

            <v-img v-else :src="member.profileUrl" dark></v-img>

            <v-btn
              id="select-picture"
              fab
              small
              color="#745bf5"
              dark
              absolute
            >
              <v-icon>camera_alt</v-icon>
            </v-btn>
          </v-avatar>
      </v-flex>

      <v-flex class="py-2" xs12 sm6>
        <v-form
          ref="form"
          @submit.prevent="submit"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="nickname"
            :rules="nicknameRules"
            flat
            color="#745bf5"
            height="40"
            placeholder="닉네임(10자 이하)"
            required
          ></v-text-field>

          <v-btn
            color="#745bf5"
            :disabled="!valid"
            :dark="valid"
            block
            depressed
            @click="submit"
          >수정</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DefaultImagePath from '@/assets/images/profile-image-default@2x.png';
import ToolBar from '../components/ToolBar';

export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      DefaultImagePath,
      valid: false,
      nickname: '',
      nicknameRules: [
        v => !!v || '닉네임을 입력해주세요.',
        v => (v && v.length <= 10) || '10자 이내로 입력해주세요.',
      ],
      member: {
        profileUrl: '',
        nickname: 'test',
      },
      menu: {
        title: '프로필 수정',
      },
    };
  },
  methods: {
    submit() {
      // validation
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>
.layout {
  padding: 31px;
}
#select-picture {
  top:60px;
  left:60px;
}
</style>
