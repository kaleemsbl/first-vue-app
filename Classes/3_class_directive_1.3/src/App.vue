<template>

  <h1>Directive v-for</h1>

  <div v-for="i in 5">
    <p>{{ i }}: Kaleem Khan</p>
  </div>

  <hr>

  <div class="user-info" v-for="userData in users">

    <img :src="userData.imageUrl" :width="widthVar" :height="heightVar">
    <h3>{{ userData.name }}</h3>

  </div>

  <!-- <div class="" v-for="(userData, index) in users">
    <pre> {{ index }} </pre>
    <pre>{{ userData }}</pre>
    <h3>{{ userData.name }}</h3>
    <img :src="userData.imageUrl" :width="widthVar">
  </div> -->



</template>

<script>
export default {

  data() {
    return {
      users: [
        {
          id: 1,
          name: "Shahrukh Khan",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"
        },
        {
          id: 2,
          name: "Salman Khan",
          imageUrl: "https://images.news18.com/ibnlive/uploads/2022/07/salman-khan-2.jpg"
        },
        {
          id: 3,
          name: "Rashmika Mandanna",
          imageUrl: "https://pinkroom-main.s3.amazonaws.com/5acda1e7-0751-42d9-b2c8-4845150522f5.jpg"
        }
      ],
      widthVar: 250,
      heightVar: 250
    }
  }

}
</script>

<style>
.user-info {
  display: inline-block;
  margin-left: 10%;
  margin-top: 50px;
}
</style>