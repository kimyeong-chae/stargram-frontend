<template>
  <v-container fluid class="pa-0 text-xs-center">
    <tool-bar title="프로필 수정" color="white"></tool-bar>

    <v-layout class="profile-edit__wrap" wrap row>
      <v-flex class="py-2" xs12 sm6>
        <v-avatar extended size="90">
          <v-img :src="member.profileUrl || defaultImagePath"></v-img>

          <v-btn
            class="profile-edit__camera-button"
            fab
            small
            color="#745bf5"
            dark
            absolute
            depressed
            @click="pickFile"
          >
            <v-icon>camera_alt</v-icon>
          </v-btn>
        </v-avatar>
      </v-flex>

      <v-flex class="py-2" xs12>
        <v-form enctype="multipart/form-data" ref="form" @submit.prevent="submit" v-model="valid">
          <v-text-field
            v-model="member.nickname"
            :rules="nicknameRules"
            flat
            color="#745bf5"
            height="40"
            placeholder="닉네임(10자 이하)"
            required
          ></v-text-field>

          <input
            style="display:none"
            type="file"
            accept="image/*"
            capture="camera"
            ref="image"
            @change="onFilePicked"
          >

          <v-btn color="#745bf5" :disabled="!valid" :dark="valid" block depressed @click="submit">수정</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import defaultImagePath from '@/assets/images/profile-image-default@2x.png';
import FamenceAPI from '@/api/famenceAPI';
import ToolBar from '../components/ToolBar';

export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      defaultImagePath,
      valid: false,
      imageFile: '',
      nicknameRules: [
        v => !!v || '닉네임을 입력해주세요.',
        v => (v && v.length <= 10) || '10자 이내로 입력해주세요.',
      ],
      menu: {
        title: '프로필 수정',
      },
    };
  },
  methods: {
    async submit() {
      try {
        if (this.$refs.form.validate()) {
          const formData = new FormData();
          formData.append('imgFile', this.imageFile);
          formData.append('nickname', this.member.nickname);

          // 기존 프로필 삭제 로직 필요?

          const response = await FamenceAPI.updateMemberProfile(
            this.member.idMember,
            formData,
          );
          console.log(response);

          this.$store.dispatch('setMember', this.member);

          // 완료 후 라우팅? 모달?
        }
      } catch (error) {
        console.error(error);
      }
    },
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;

      if (files[0] !== undefined) {
        const imageName = files[0].name;

        if (
          imageName.lastIndexOf('.') <= 0 ||
          !/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(imageName)
        ) {
          alert('올바른 이미지를 올려주세요');
          return;
        }

        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener('load', () => {
          this.member.profileUrl = fr.result;
          this.imageFile = files[0];
        });
      } else {
        this.member.profileUrl = '';
        this.imageFile = '';
      }
    },
  },
  computed: {
    ...mapState(['member']),
  },
};
</script>

<style scoped>
.profile-edit__wrap {
  padding: 31px;
}
.profile-edit__camera-button {
  top: 60px;
  left: 60px;
}
</style>
