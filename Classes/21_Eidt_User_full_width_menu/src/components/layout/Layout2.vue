<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-2">
        <header>
          <nav-bar @change="change"></nav-bar>
        </header>
      </div>

      <div class="col-10">
        <div class="main">
          <router-view></router-view>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import NavBar from './NavBar/NavBar2.vue'
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
