<template>
    <div class="parent text-align-center">

        <div class="row mb-3">
            <div class="col">
                <h2>Increment and Decrement</h2>
                <button class="btn btn-warning" v-on:click="increment">Increment</button>
                <button class="btn btn-danger ml-2" v-on:click="decrement">Decrement</button>
            </div>
        </div>

        <div class="row">
            <div class="col display-3">
                {{ counter }}
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    components: {
        // define component here to be used in html
    },
    methods: {
        increment: function () {
            this.counter++
        },

        decrement: function () {
            this.counter -= 2
        },
    },
}
</script>