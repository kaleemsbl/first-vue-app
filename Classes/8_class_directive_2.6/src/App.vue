<template>
  <div class="container text-align-center">

    <div class="mt-10">
      <h1>v-on directive</h1>
    </div>

    <div class="mt-10">
      stop.prevent <a v-on:click.stop.prevent href="https://www.google.com">Click me</a>
    </div>

    <div class="mt-10">
      <h2>form submit prevent default behavior (v-on:submit.prevent)</h2>
      <form @submit.prevent="getData">
        <div class="form-control">
          <input type="text" name="firstName" placeholder="Enter First Name">
        </div>
        <div class="form-control">
          <input type="text" name="lastName" placeholder="Enter Last Name">
        </div>
        <div class="form-control">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>

    <div class="mt-10">
      <h2>Key Modifiers</h2>
      <div class="form-control">
        <input @keyup.enter="commonFunction" type="text" placeholder="Enter First Name">
      </div>
    </div>

    <div class="mt-10">
      <h2>v-once</h2>
      <div class="form-control">
        <p v-once>{{ tittle }}</p>
        <br>
        <button @click="changeTitle">Change Title</button>
      </div>
    </div>


  </div>
</template>

<script>


export default {
  data() {
    return {
      counter: 0,
      tittle: "Hello"
    }
  },
  components: {
    // define component here to be used in html
  },
  methods: {
    getData() {
      alert("Submited");
    },
    commonFunction() {
      alert("You have press enter button!")
    },
    changeTitle: function () {
      this.tittle = "Kaleem: " + Math.random();;
    }
  }

}
</script>

<style>

</style>