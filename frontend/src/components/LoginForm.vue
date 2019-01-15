<template>
  <div id="login-container">
    <div id="login-title" class="row">이메일 로그인</div>
    <div id=" input-container" class="row">
      <form class="col s12">
        <div class="row center">
          <div class="input-field col s12">
            <input type="text" placeholder="이메일 주소 입력">
          </div>
          <div class="input-field col s12">
            <input type="password" placeholder="비밀번호 입력">
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <a id="login-btn" href="#" class="btn disabled">로그인</a>
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

<style scoped>
/* iphone5 */
@media screen and (max-width: 320px) {
  #login-container {
    margin: 0px 31px;
  }
  #input-container {
    align-content: center;
  }
  #login-title {
    font-size: 17.5px;
    font-weight: bold;
    color: #000000;
  }
  .input-field input[type="text"]:focus {
    border-bottom: 1px solid #7d51ff;
    box-shadow: 0 1px 0 0 #7d51ff;
  }
  .input-field input[type="password"]:focus {
    border-bottom: 1px solid #7d51ff;
    box-shadow: 0 1px 0 0 #7d51ff;
  }
  #login-btn {
    width: 240px;
    height: auto;
    border-radius: 2px;
    background-color: #efefef;
  }
}
</style>
