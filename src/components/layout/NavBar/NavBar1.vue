<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mr-auto">

        <li class="nav-item">
          <!-- <a class="nav-link" href="/">Home</a> -->
          <router-link class="nav-link" to="/">Home</router-link>
        </li>

        <li class="nav-item">
          <!-- <a class="nav-link" href="/edit">Edit</a> -->
          <router-link class="nav-link" to="/about">About</router-link>
        </li>

      </ul>
      <ul class="navbar-nav">
        <li class="nav-item float-right">
          <a href="#" @click.prevent="changeLayout" class="nav-link">
            <i class="fas fa-table fa-fw me-3"></i> Switch
          </a>
        </li>
      </ul>

    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    changeLayout() {
      this.$emit('change', true)
    }
  }
}
</script>