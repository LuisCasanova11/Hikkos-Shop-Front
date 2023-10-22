<template>
  <Toast />

  <div>
    <!-- <HeaderComponent /> -->
    <NavBar />
  </div>
  <div class="app">
    <SidebarComponent />
    <router-view />
  </div>
</template>

<script>
// import HeaderComponent from './components/HeaderComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: {
    // HeaderComponent,
    SidebarComponent,
    NavBar,
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
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #E08757;
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
