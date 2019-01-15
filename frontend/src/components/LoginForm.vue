<template>
  <div class="login-container">
    <div class="login-title row">이메일 로그인</div>
    <div class="input-container">
      <form class="col s12 center-align">
        <div class="row">
          <div class="input-field col s10">
            <input type="text" placeholder="이메일 주소 입력">
          </div>
          <div class="input-field col s10">
            <input type="password" placeholder="비밀번호 입력">
          </div>
        </div>

        <div class="row">
          <div class="col s10">
            <div class="row">
              <a class="btn disabled" type="submit">로그인</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 300px) {
  .input-container {
    align-content: center;
  }
  .login-title {
    width: 117px;
    height: 17.5px;
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.03;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }
  .btn {
    width: 258px;
    height: 36px;
    border-radius: 2px;
    background-color: #efefef;
  }
}
</style>
