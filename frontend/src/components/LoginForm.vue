<template>
  <div id="login-container">
    <h1>이메일 로그인</h1>
    <div id="input-container" class="row">
      <form class="col s12" @submit.prevent="onSubmit">
        <div class="row center">
          <div class="input-field col s12" :class="{error: errors.has('email')}">
            <input
              type="email"
              name="email"
              placeholder="이메일 주소 입력"
              v-validate="'required|email'"
              v-model="email"
            >
            <span class="col s12" v-if="errors.has('email')">{{errors.first('email')}}</span>
          </div>
          <div class="input-field col s12" :class="{error: errors.has('password')}">
            <input
              type="password"
              name="password"
              placeholder="비밀번호 입력"
              v-validate="'required|min:6'"
              v-model="password"
            >
            <span class="col s12" v-if="errors.has('password')">{{errors.first('password')}}</span>
          </div>
        </div>

        <div class="row center">
          <div class="col s12">
            <input type="submit" :class="checkForm" class="btn" value="로그인">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll();
    },
  },
  computed: {
    checkForm() {
      if (this.email !== '' && this.password !== '' && !this.errors.any()) {
        return { 'correct-value': true };
      }
      return { 'correct-value': false };
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 320px) {
  h1 {
    font-size: 18px;
    font-weight: bold;
    margin: 0px 0px 40px 0px;
  }
  .col {
    padding: 0px;
    margin: 0px;
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
    width: 258px;
    padding: 0px;
  }
  .input-field input[type="password"] {
    width: 258px;
    padding: 0px;
  }
  .input-field input[type="email"]:focus {
    border-bottom: 1px solid #7d51ff;
  }
  .input-field input[type="password"]:focus {
    border-bottom: 1px solid #7d51ff;
  }
  .btn {
    width: 258px;
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
}
</style>
