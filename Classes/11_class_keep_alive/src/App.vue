<template>
  <div class="custom-parent">
    <div class="container">

      <div class="row mb-5">
        <div class="col text-center">
          <h2>Dynamic Components</h2>
        </div>
      </div>

      <div class="row mb-5 text-center">
        <div class="col">
          <button type="button" class="btn btn-primary" @click="changeComponent('PercentCalculate')">Calculate
            %</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-success" @click="changeComponent('IncDec')">Counter</button>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <keep-alive>
            <component :is="cpmName"></component>
          </keep-alive>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import IncDec from "./components/IncDec.vue";
import PercentCalculate from "./components/PercentCalculate.vue";
export default {
  data() {
    return {
      cpmName: ''
    }
  },
  components: {
    IncDec,
    PercentCalculate
  },
  methods: {
    changeComponent: function (name) {
      this.cpmName = name;
    }
  }
}
</script>