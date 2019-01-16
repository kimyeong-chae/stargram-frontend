<template>
  <div class="row center">
    <a href="#" class="col s12">
      <span>비밀번호를 잊으셨나요?</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FindingPassword',
};
</script>

<style scoped>
@media screen and (max-width: 320px) {
  .col {
    padding: 0px;
    margin: 0px;
    font-family: NotoSansKR;
    font-size: 12px;
    color: #b7b7b7;
  }
  div {
    margin: 0px;
  }
  span {
    width: 120px;
    text-decoration: none;
    border-bottom: 1px solid #b7b7b7;
    padding-bottom: 3px;
  }
}
</style>
