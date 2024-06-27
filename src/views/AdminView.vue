<template>
  <div class="mt-[300px]">
    <div class="auth-container">
      <h2 v-if="isLogin">Login</h2>
      <h2 v-else>Register</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="form.email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="form.password" required />
        </div>
        <button type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
      </form>
      <button @click="toggleMode" class="mt-[30px]">
        {{ isLogin ? 'Switch to Register' : 'Switch to Login' }}
      </button>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      isLogin: true,
      form: {
        email: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    toggleMode() {
      this.isLogin = !this.isLogin
    },
    async handleSubmit() {
      try {
        const url = this.isLogin
          ? 'https://serverexpress.onrender.com/login'
          : 'https://serverexpress.onrender.com/register'
        const response = await axios.post(url, this.form)

        // Сохраняем токен в localStorage

        localStorage.setItem('token', response.data.token)

        // Переходим на страницу панели (/panel)
        setTimeout(() => {
          this.$router.push('/panel')
        }, 100)
      } catch (error) {
        console.error('Error:', error.response.data)
        this.errorMessage = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
}
button:hover {
  background-color: #0056b3;
}
p {
  color: red;
}
</style>
