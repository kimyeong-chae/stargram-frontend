<template>
  <v-container fluid class="pa-0 text-xs-center">
    <tool-bar :title="title" color="white"></tool-bar>

    <v-layout wrap row>
      <v-flex class="settings-content-1 py-3" xs12>
        <v-subheader>프로필 및 계정</v-subheader>

        <v-list class="py-0">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="purple-title">{{ member.userId }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <span>수정</span>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>연결된 계정</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <span class="purple-title">{{ member.accountType }}</span>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>

      <v-flex class="settings-content-2 pb-3" xs12>
        <v-subheader>고객지원</v-subheader>

        <v-list class="py-0">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>문의사항</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>서비스 이용약관</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>개인정보 처리방침</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>

      <v-flex class="settings-content-3" xs12>
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>로그아웃</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>서비스 탈퇴</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ToolBar from '../components/ToolBar';

export default {
  name: 'Settings',
  components: {
    ToolBar,
  },
  data() {
    return {
      title: '설정',
      member: {
        userId: 'lori_harvey_',
        accountType: 'facebook',
      },
    };
  },
};
</script>

<style scoped>
.v-subheader {
  height: 40px;
  font-size: 13px;
  font-weight: bold;
  color: #7d51ff;
}
.v-list__tile__content,
.v-list__tile__action {
  border-bottom: 1px solid #ededed;
  font-size: 13px;
  font-weight: 500;
  color: #080808;
}
.purple-title {
  color: #7d51ff;
}
</style>
