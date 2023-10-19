<template>
    <header class="app-header">
        <div class="left">
            <img src="../assets/Logo.png" alt="Logo" />
        </div>
        <div class="right" @click="toggle">
            <img src="../assets/perfil.png" alt="user profile" />
            <span>Bryan Rueda</span>
        </div>
    </header>
    <OverlayPanel ref="op">
        <div class="flex flex-wrap justify-content-between">
            <div>
                <font-awesome-icon icon="right-from-bracket" />
            </div>
            <div>
                <span class="pl-1"><a href="/login">Log out</a></span>
            </div>
        </div>
    </OverlayPanel>
</template>
<script setup>
import OverlayPanel from 'primevue/overlaypanel';

import { ref } from 'vue';

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}

</script>
<style scoped>
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 2px;
    /* Added bluf effect */
    background: #B94429;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    ;
}

.left {
    display: flex;
    align-items: center;
}

.left img {
    height: 30px;
}

.right {
    display: flex;
    align-items: center;
}

.right img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
}

.right span {
    font-size: 12px;
    color: #FFFCF9
}

.menu {
    padding: 10px;
}
</style>
