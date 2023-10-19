<template>
  <Toast />

  <div>
    <HeaderComponent />
  </div>
  <div class="app">
    <SidebarComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
export default {
  components: {
    HeaderComponent,
    SidebarComponent,
  }
}
</script>

<style lang="scss">
:root {
  --primary: #FFFCF9;
  --primary-alt: #FFFCF9;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #1E1E1E;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: #782816;
  //  var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
