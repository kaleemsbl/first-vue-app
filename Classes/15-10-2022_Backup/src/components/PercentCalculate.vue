<template>
    <div class="heading">
        <h2>Find %</h2>
    </div>

    <div class="form-group">
        <input class="form-control" type="text" v-model="amount" placeholder="Enter Total value" />
    </div>



    <div class="form-group">
        <input class="form-control" type="text" v-model="finder" placeholder="Enter % value " />
    </div>


    <div class="row" v-if="amount && finder != ''">
        <div class="col display-3">
            Result : {{ (amount * finder) / 100 }}
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            amount: null,
            finder: null,
        };
    },
};
</script>