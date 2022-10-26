<template>
  <div class="parent-center">
    <div class="container">

      <header>
        <nav-bar @change="change"></nav-bar>
      </header>

      <div class="main">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
import NavBar from './NavBar/NavBar1.vue'
export default {
  components: {
    NavBar
  },
  methods: {
    change(value) {
      this.$emit('change', value)
    }
  }
}
</script>
