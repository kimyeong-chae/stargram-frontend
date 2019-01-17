<template>
  <div id="finding-container">
    <h1>비밀번호를 잊으셨나요</h1>
    <div id="input-container" class="row">
      <h2>비밀번호를 재설정하려는 이메일을 입력해주세요.</h2>
      <form class="col s12" @submit.prevent="onSubmit">
        <div class="row">
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
        </div>
        <div class="row">
          <div class="col s12">
            <input type="submit" :class="checkForm" class="btn" value="이메일 전송">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FidingPassword',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll();
    },
  },
  computed: {
    checkForm() {
      if (this.email !== '' && !this.errors.any()) {
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
  margin: 0px 0px 25.5px 0px;
}
h2 {
  font-size: 13px;
  color: #6d6d6d;
  overflow: hidden;
  margin: 0px 0px 39px 0px;
}
.col {
  padding: 0px;
  margin: 0px;
}
.row {
  margin: 0px 0px 20px 0px;
}
#finding-container {
  margin: 0px 25px 0px 31px;
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
</style>
