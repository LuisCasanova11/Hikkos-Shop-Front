<template>
      <div id="app">
      <header>
        <Header></Header>
      </header>
      <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/HeaderComponent.vue';
export default {
  components: {
    Header
  }
}
</script>
<style scoped>

</style>
