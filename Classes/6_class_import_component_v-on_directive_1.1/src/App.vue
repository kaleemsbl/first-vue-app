<template>

  <div class="parent">
    <h1 class="text-align-center">Parent</h1>

    <div class="component_wrapper">
      <TestComponent />
    </div>

    <div class="component_wrapper">
      <TestCompo />
    </div>
  </div>

</template>

<script>
import TestComponent from './components/TestComponent.vue';
import TestCompo from './components/TestCompo.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    TestComponent,
    TestCompo
  }

}
</script>

<style>
.parent {
  height: 100vh;
  background: rgba(42, 185, 228, 0.51);
}

.component_wrapper {
  width: 80%;
  margin: 10px auto 0px auto;
}
</style>