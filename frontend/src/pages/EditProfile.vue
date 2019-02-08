<template>
  <v-container fluid class="pa-0 text-xs-center">
    <tool-bar :title="menu.title" color="white"></tool-bar>

    <v-layout wrap row>
      <v-flex class="py-2" xs12 sm6>
        <v-avatar extended size="90">
          <v-img v-if="member.profileUrl === ''" :src="DefaultImagePath"></v-img>

          <v-img v-else :src="member.profileUrl" dark></v-img>

          <v-bottom-sheet v-model="bottomSheet">
            <v-btn
              id="select-picture"
              fab
              small
              color="#745bf5"
              slot="activator"
              dark
              absolute
              depressed
            >
              <v-icon>camera_alt</v-icon>
            </v-btn>

            <v-list class="bottom-sheet">
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>사진 촬영</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-divider></v-divider>

              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>앨범</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-bottom-sheet>
        </v-avatar>
      </v-flex>

      <v-flex class="py-2" xs12 sm6>
        <v-form ref="form" @submit.prevent="submit" v-model="valid">
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
            v-text="selectText"
          ></v-btn>
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
      bottomSheet: false,
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
  computed: {
    selectText() {
      return this.menu.title === '프로필 수정' ? '수정' : '확인';
    },
  },
};
</script>

<style scoped>
.layout {
  padding: 31px;
}
#select-picture {
  top: 60px;
  left: 60px;
}
.bottom-sheet .v-list__tile__title {
  font-size: 14px;
  font-weight: 500;
}
</style>
