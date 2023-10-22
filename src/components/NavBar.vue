<template>
    <div class="navbar">
        <div class="left">
            <div class="logo">
                <img src="../assets/Logo.png" alt="Logo" />
            </div>
        </div>
        <div class="right">
            <div class="search">
                <input type="text" placeholder="Search" />
            </div>
            <div class="cart">
                <a href="#">
                    <font-awesome-icon class="material-icons" icon="cart-shopping" />
                    <span class="count">12</span>
                </a>
            </div>
            <div class="profile" @click="toggle">
                <img src="../assets/perfil.png" alt="User image" />
                <a href="#">Bryan Rueda</a>
            </div>
        </div>
    </div>
    <OverlayPanel ref="op" class="overlay">
        <div class="flex flex-wrap justify-content-between">
            <div>
                <font-awesome-icon icon="right-from-bracket" />
            </div>
            <div class="logout-text">
                <a href="/login">Log out</a>
            </div>
        </div>
    </OverlayPanel>
</template>
  
<script setup>
import OverlayPanel from 'primevue/overlaypanel';

import { ref } from 'vue'

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}

// const count = ref(0)

// // Aumento el contador del carrito
// function increaseCount() {
//     count.value++
// }
</script>
  
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    margin-bottom: 2px;
    background: #F2D0B6;
    box-shadow: 0px 4px 24px -1px #00000025;

}

.right {
    display: flex;
    align-items: center;
    padding-right: 10px;
}

.search {
    width: 200px;
    margin-top: 10px;
    margin-right: 10px;
    color: #FFFCF9;
}

.search input {
    border: none;
    height: 100%;
    width: 100%;
    padding: 0px 5px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    background-color: #FFFFFF00;
    color: #FFFCF9;
}

.search input:focus {
    outline: none;
}

.search input::placeholder {
    color: #FFFCF9;
}

.cart {
    display: flex;
    align-items: center;
}

.cart span {
    margin-left: 5px;
    margin-right: 5px;

}

.profile {
    display: flex;
    align-items: center;
}

.profile img {
    width: 30px;
}

.profile img {
    border-radius: 50px;
    margin-left: 10px;
}

.profile a {
    margin-left: 5px;
    margin-right: 10px;
}

a {
    text-decoration: none;
    color: #FFFCF9;
}

.logout-text a {
    padding: 5px;
    color: #183045;
}

.logo {
    width: 100px;
    padding-left: 10px;
}

.logo img {
    width: 100px;
}
</style>
  