<template>
  <div class="parent-center">
    <div class="container">

      <header>
        <nav-bar></nav-bar>
      </header>

      <div class="main">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
import NavBar from './components/layout/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>
