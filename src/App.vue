<template>
  <div class="parent-center">
    <div class="container">
      <div class="row mb-3">
        <div class="col">
          <h2>Dynamic Components</h2>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-sm-3">
          <button type="button" class="btn btn-primary" @click="changeComponent('PercentCalculate')">Calculate
            %</button>
        </div>
        <div class="col-sm-3">
          <button type="button" class="btn btn-success" @click="changeComponent('incrementDecrement')">Counter</button>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <component :is="selectedComponent"></component>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import PercentCalculate from './components/PercentCalculate.vue';
import incrementDecrement from './components/IncDec.vue';
export default {
  data() {
    return {
      selectedComponent: ""
    }
  },
  components: {
    PercentCalculate,
    incrementDecrement
  },
  methods: {
    changeComponent(changer) {
      this.selectedComponent = changer;
    }
  }
}
</script>