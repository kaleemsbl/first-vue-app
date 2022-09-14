<template>

  <h1>Directive v-if</h1>

  <div v-if="flag">
    <h3>Id: {{ user.id }}</h3>
    <h3>Name: {{ user.name }}</h3>
    <h3>Address: {{ user.address }}</h3>
  </div>



</template>

<script>
export default {

  data() {
    return {
      flag: true,
      user: {
        id: 1,
        name: "Kaleem Khan",
        address: "Ashrafpur"
      }

    }
  }

}
</script>