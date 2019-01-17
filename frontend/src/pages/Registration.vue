<template>
  <div id="login-container">
    <h1>이메일로 회원가입</h1>
    <div id="input-container" class="row">
      <div class="row center">
        <div class="input-field col s12" :class="{error: errors.has('email')}">
          <input
            type="email"
            name="email"
            placeholder="이메일 주소 입력"
            v-validate="'required|email'"
            v-model="user.email"
          >
          <span class="col s12" v-if="errors.has('email')">{{errors.first('email')}}</span>
        </div>

        <div class="input-field col s12" :class="{error: errors.has('password')}">
          <input
            type="password"
            name="password"
            placeholder="비밀번호(영문,숫자,특수문자)"
            v-validate="'required|min:6'"
            v-model="user.password"
            ref="password"
          >
          <span class="col s12" v-if="errors.has('password')">{{errors.first('password')}}</span>
        </div>

        <div class="input-field col s12" :class="{error: errors.has('password_confirmation')}">
          <input
            type="password"
            name="password_confirmation"
            placeholder="비밀번호 확인"
            v-validate="'required|confirmed:password'"
            v-model="user.password_confirmation"
            data-vv-as="password"
          >
          <span
            class="col s12"
            v-if="errors.has('password_confirmation')"
          >{{errors.first('password_confirmation')}}</span>
        </div>
      </div>
      <form class="col s12" @submit.prevent="onSubmit">

        <div class="row center">
          <div class="col s12">
            <input type="submit" :class="checkForm" class="btn" value="회원가입">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginEmail',
  data() {
    return {
      user: {
        email: '',
        password: '',
        password_confirmation: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll();
    },
  },
  computed: {
    checkForm() {
      if (!Object.values(this.user).includes('') && !this.errors.any()) {
        return { 'correct-value': true };
      }
      return { 'correct-value': false };
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 40px 0px;
}
.col {
  padding: 0px;
  margin: 0px;
}
.row {
  margin: 0px 0px 20px 0px;
}
#login-container {
  margin: 0px 31px;
  padding: 0px;
}
#input-container {
  align-content: center;
  padding: 0px;
}
.input-field input[type="email"] {
  padding: 0px;
}
.input-field input[type="password"] {
  padding: 0px;
}
.input-field input[type="email"]:focus {
  border-bottom: 1px solid #7d51ff;
}
.input-field input[type="password"]:focus {
  border-bottom: 1px solid #7d51ff;
}
.btn {
  width: 100%;
  height: auto;
  padding: 0px;
  font-size: 12px;
  font-weight: bold;
  color: #b4b4b4;
  border-radius: 2px;
  background-color: #efefef;
  box-shadow: 0px 0px;
}
.correct-value {
  background-color: #7d51ff;
}
.find-password {
  width: 120px;
  text-decoration: none;
  border-bottom: 1px solid #b7b7b7;
  padding-bottom: 3px;
  font-size: 12px;
  color: #b7b7b7;
}
span {
  font-size: 11px;
}
</style>
