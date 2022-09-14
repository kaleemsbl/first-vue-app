<template>

  <h1>Directive v-model</h1>


  <div class="mt-10">
    <h3>Two Way Data Binding</h3>
    <input type="text" v-model="tabluar" placeholder="Two Way Data Binding">
  </div>

  <div class="mt-10" v-if="tabluar">

    <p v-for="i in 10">
      {{ i * tabluar }}
    </p>

  </div>

</template>

<script>
export default {

  data() {
    return {
      tabluar: null
    }
  }

}
</script>