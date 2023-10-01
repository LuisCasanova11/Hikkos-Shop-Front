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
            <div >
                <font-awesome-icon icon="right-from-bracket" />
            </div>
            <div>
                <span class="pl-1">Log out</span>
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
    margin-bottom: 5px;
    background: linear-gradient(45deg, #8D99AE 0%, #595959 100%);
    color: #fff;
}

.left {
    display: flex;
    align-items: center;
}

.right {
    display: flex;
    align-items: center;
}

.right img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.menu {
    padding: 10px;
}
</style>
