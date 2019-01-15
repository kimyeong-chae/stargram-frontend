<template>
  <div class="login">
    <login-form/>
    <find-password/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm';
import FindingPassword from '../components/FindingPassword';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
    FindingPassword,
  },
};
</script>

<style scoped>
.login {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
