<template>
  <div>
    <div class="row">
      <div class="col">
        <header class="navbar-header">
          <nav-bar @change="change"></nav-bar>
        </header>
      </div>
    </div>

    <div class="container mt-5">

      <div class="row">
        <div class="col">
          <div class="main">
            <router-view></router-view>
          </div>
        </div>
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
