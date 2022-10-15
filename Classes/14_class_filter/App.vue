<template>
  <div id="app">
    {{ fullName | upperCase }}
    <br>
    {{ upper }}
  </div>
</template>

<script>

export default {
  data: () => ({
    fullName: "Kaleem Khan"
  }),
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    upper() {
      return this.fullName.toUpperCase();
    }
  }
};
</script>
