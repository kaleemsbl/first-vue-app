<template>

  <h1>Directive v-for</h1>

  <div class="mt-10">
    <h3>One Way Data Binding</h3>
    <input type="text" v-bind:value="firstName" placeholder="One Way Data Binding">
    <br>
    <pre>{{ firstName }}</pre>
  </div>

  <div class="mt-10">
    <h3>Two Way Data Binding</h3>
    <input type="text" v-model="lastName" placeholder="Two Way Data Binding">
    <br>
    <pre>{{ lastName }}</pre>
  </div>

</template>

<script>
export default {

  data() {
    return {
      firstName: "Shakeel",
      lastName: "Ahamed"
    }
  }

}
</script>