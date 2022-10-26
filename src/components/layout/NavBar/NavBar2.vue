<template>
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">

        <router-link class="list-group-item list-group-item-action py-2 ripple" to="/">
          <i class="fas fa-home fa-fw me-3"></i> Home
        </router-link>

        <router-link class="list-group-item list-group-item-action py-2 ripple" to="/about">
          <i class="fas fa-info fa-fw me-3"></i> About
        </router-link>
        <hr>
        <a href="#" @click.prevent="changeLayout" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-table fa-fw me-3"></i> Switch
        </a>
      </div>
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