<template>
  <q-page class="q-gutter-md">
    <q-page-container class="q-pa-md">
      <q-card class="registration-card">
        <q-card-section class="registration-section">
          <div class="registration-container q-grid q-gutter-md">
            <div class="registration-form q-col-md-6">
              <q-form
              class=""
              @submit="registerUser" >
                <q-input v-model="firstName" label="First Name" outlined dense required></q-input>
                <q-input v-model="lastName" label="Last Name" outlined dense required></q-input>
                <q-input v-model="email" label="Email" outlined dense required type="email"></q-input>
                <q-input v-model="password" label="Password" outlined dense required type="password"></q-input>
                <q-btn type="submit" label="Register" color="primary" class="q-mt-md"></q-btn>
              </q-form>
            </div>
            <div class="registration-image q-col-md-6">
              <img src="../../../statics/signup.jpg" alt="Registration Image" class="image-placeholder">
            </div>
          </div>
        </q-card-section>
      </q-card>

      <div class="links">
        <router-link to="/user-login" class="link-button">Login</router-link>
        <router-link to="/forgetPass" class="link-button">Forgot Password</router-link>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  name: 'user-register',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/register', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        });
        console.log('Axios response:', response);

        if (response.status !== 201) {
          throw new Error('Failed to register user');
        }
        if(response.data.error === "User already registered"){
          console.log('user already registered')
        }
      } catch (error) {
        console.error('Error registering user:', error);
      }
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


.links {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.link-button {
  margin: 0 8px;
  text-decoration: none;
  color: #1976d2; 
}
</style>
