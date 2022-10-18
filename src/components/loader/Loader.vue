<template>
  <div class="row loaderHeight" v-if="show">
    <div class="col text-center loaderContent">
      <img :src="`/public/loader/${name}.gif`" :width="width">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default() {
        return 'loader_1';
      }
    },
    show: {
      type: Boolean,
      default() {
        return false;
      }
    },
    width: {
      type: String,
      default() {
        return '200';
      }
    }
  }
}
</script>

<style scoped>
.loaderHeight {
  height: 100vh;
}

.loaderContent {
  margin: auto;
}
</style>