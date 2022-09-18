<template>
  <div class="parent text-align-center">

    <h1>v-on directive</h1>
    <br>
    <div class="component_wrapper">
      <button v-on:click="increment">Increment</button>
      <br><br>
      {{ counter }}
    </div>

  </div>
</template>

<script>


export default {
  data() {
    return {
      counter: 0
    }
  },
  components: {
    // define component here to be used in html
  },
  methods: {
    increment: function () {
      this.counter++;
    }
  }

}
</script>

<style>

</style>