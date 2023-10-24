<template>
    <div class="login-page">
        <h1>Login</h1>
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

//   async function login() {
//     // TODO: Implement login logic
//   }
</script>
  
<style>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

input {
    margin-bottom: 10px;
}

button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}
</style>
  