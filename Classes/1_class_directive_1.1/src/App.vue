<template>
  <h1 v-text="msg"></h1>
  <h2>{{ name }}</h2>
  <h2>{{ profile }}</h2>
  <h3 v-html="profile"></h3>
</template>

<script>
export default {

  data() {
    return {
      msg: "Hello World Changed",
      name: "Shakeel Ahamed",
      profile: "<span class='nameColor'>Shahrukh</span>"
    }
  }

}
</script>

<style>
.nameColor {
  color: rgb(87, 87, 169);
}
</style>