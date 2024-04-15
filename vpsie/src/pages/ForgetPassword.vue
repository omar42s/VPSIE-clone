<template>
  <q-page class="q-gutter-md">
    <q-page-container class="q-pa-md">
      <q-card class="forgot-password-card">
        <q-card-section class="forgot-password-section">
          <div class="forgot-password-container">
            <p>Forgot your password? Please enter your email address below and we'll send you a link to reset your password.</p>
            <q-input v-model="email" label="Email" outlined dense required type="email"></q-input>
            <q-btn type="submit" label="Reset Password" color="primary" class="q-mt-md"></q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: ''
    };
  }
};
</script>

<style scoped>
/* Add your forgot password page styles here */
</style>
