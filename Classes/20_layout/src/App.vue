<template>
  <component :is="cpmName" @change="change"></component>
</template>

<script>
import Layout1 from './components/layout/Layout1.vue'
import Layout2 from './components/layout/Layout2.vue'
export default {
  data() {
    return {
      cpmName: ''
    }
  },
  created() {
    let lcV = localStorage.getItem('layout');
    this.cpmName = lcV ? lcV : 'Layout1'
  },
  components: {
    Layout1,
    Layout2
  },
  methods: {
    change() {
      this.cpmName = this.cpmName == 'Layout1' ? 'Layout2' : 'Layout1';
      localStorage.setItem("layout", this.cpmName);
    }
  }
}
</script>
