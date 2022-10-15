<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Even and Odd Number</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input class="form-control" type="text" v-model="number" placeholder="Enter number">
                </div>
            </div>
        </div>

        <div class="row mt-3" v-if="number">
            <div class="col">
                <div :class="className">
                    The value is <strong>{{ evenOdd }}</strong>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    computed: {
        evenOdd() {
            if (/^[0-9]+$/.test(this.number)) {
                this.className = "alert alert-info";
                let findModulus = this.number % 2;
                return findModulus == 0 ? "Even" : "Odd";
            } else {
                this.className = "alert alert-danger";
                return "not a number";
            }
        }
    },
    data() {
        return {
            number: null,
            className: ""
        }
    }
}
</script>
<style>

</style>