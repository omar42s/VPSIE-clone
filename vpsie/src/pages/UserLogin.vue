<template>
  <q-page class="q-gutter-md">
    <q-page-container  class=" row q-m-none">
      <q-card class="registration-card col">
        <q-card-section class="registration-section">
          <div class="registration-container q-grid q-gutter-md">
            <div class="registration-form q-col-md-6">
              <q-form @submit="loginUser">
                <q-input v-model="email" label="Email" outlined dense required type="email"></q-input>
                <q-input v-model="password" label="Password" outlined dense required type="password"></q-input>
                <q-btn type="submit" label="Login" color="primary" class="q-mt-md"></q-btn>
                <div class="q-mt-md">
                  <span>Don't have an account?</span>
                  <q-btn
                    label="Register"
                    color="primary"
                    @click="goToRegister"
                  ></q-btn>
                </div>
              </q-form>
              <q-btn
                label="Forget Password"
                color="primary"
                class="q-mt-md"
                @click="goToForgetPassword"
              ></q-btn>
            </div>

          </div>
        </q-card-section>
      </q-card>
       <div class="registration-image q-col-md-6 ">
              <img src="../../../statics/signup.jpg" alt="Login Image" class="image-placeholder">
      </div>
    </q-page-container>
  </q-page>
</template>

<script >
import axios from 'axios';

export default {
  name: 'user-login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          email: this.email,
          password: this.password
        });

        if (response.status === 200) {
          
          console.log('Login successful');
        } else {
          // Handle other response statuses if needed
          console.error('Login failed:', response.data.error);
        }
      } catch (error) {
        console.error('Error logging in user:', error);
      }
    },
    goToForgetPassword() {
      // Redirect to the forget password page
      this.$router.push({ name: 'forget-password' });
    },
    goToRegister() {
      // Redirect to the register page
      this.$router.push({ name: 'user-register' });
    }
  }
};
</script>

<style scoped>
.registration-card {
  width: 100%;
}

.registration-section {
  display: grid;
  gap: 0;
}

.registration-container {
  display: flex;
}

.registration-form {
  flex: 1;
  max-width: 100%;
}

.registration-image {
  flex: 1;
  max-width: 100%;
  height: auto;
}

.q-card {
  box-shadow: none;
}

.q-form {
  display: grid;
}

.image-placeholder {
  height: auto;
}
</style>
