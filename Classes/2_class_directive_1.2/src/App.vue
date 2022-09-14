<template>

  <h1>Example of v-show and v-if</h1>

  <h3 v-show="showFlag">{{ message }}</h3>


  <h3 v-if="ifTrue > 10"> If Data</h3>
  <h3 v-else-if="ifTrue > 20">else-if data</h3>
  <h3 v-else>else</h3>

</template>

<script>
export default {

  data() {
    return {
      message: "v-show text",
      showFlag: true,
      ifTrue: 5
    }
  }

}
</script>