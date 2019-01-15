<template>
  <div>
    <login-form/>
    <finding-password/>
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
</style>
