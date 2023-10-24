<template>
    <div class="sidebar" :class="`${isExpanded ? 'expanded' : ''}`" @mouseover="expand" @mouseout="collapse">
        <ul>
            <li>
                <router-link to="/products">Home</router-link>
            </li>
            <li>
                <router-link to="/users">Users</router-link>
            </li>
            <li>
                <router-link to="/categories">Products</router-link>
            </li>
        </ul>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

// Expande el sidebar al pasar el mouse sobre él
function expand() {
    isExpanded.value = true
    // Agrego la siguiente lógica para expandir el sidebar
    document.querySelector('.sidebar').classList.toggle('expanded')
}

// Contrae el sidebar al quitar el mouse del sidebar
function collapse() {
    isExpanded.value = false
    // Agrego la siguiente lógica para contraer el sidebar
    document.querySelector('.sidebar').classList.toggle('expanded')
}
</script>
  
<style scoped>
.sidebar {
    width: 200px;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    transition: width 0.5s ease-in-out;
}

.sidebar.expanded {
    width: 500px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
}

a {
    color: #000;
}
</style>
  