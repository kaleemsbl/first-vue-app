<template>
  <div class="row mb-3">
    <div class="col text-center">
      <h4>CRUD Operation (Create, Read, Update and Delete)</h4>
    </div>
  </div>
  <Loader name="loader_3" :show="showLoader" />
  <div class="row">
    <div class="col mb-3" v-for="user in users">

      <div class="card card-custom-width">
        <img class="card-img-top" :src="user.image" :alt="user.first_name" height="250">
        <div class="card-body">
          <h5 class="card-title">{{ fullName(user.first_name, user.last_name) }}</h5>
          <p class="card-text">{{ user.phone }}</p>
          <p class="card-text">{{ user.gender }}, {{ user.city }}</p>

          <button class="btn btn-warning" @click="$emit('editUser', user)">
            <i class="fa fa-edit"></i> Edit
          </button>

          <button class="btn btn-danger ml-2" @click="deleteItem(user.id)">
            <i class="fa fa-trash-alt"></i> Delete
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2';
import Loader from "../loader/Loader.vue";
export default {
  components: {
    Loader
  },
  data() {
    return {
      users: [],
      showLoader: false
    }
  },
  async created() {
    this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
      this.showLoader = true;

      let result = await axios.get("http://localhost:3000/users");
      this.users = result.data;

      this.showLoader = false;
    },
    fullName(fname, lname) {
      const concatName = fname + " " + lname;
      return concatName;
    },
    deleteItem(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          let result = await axios.delete(`http://localhost:3000/users/${id}`);
          if (result.status == 200) {
            this.getAllUsers();
          }
          Swal.fire(
            'Deleted!',
            'Your user has been deleted.',
            'success'
          )
        }
      });
    }
  }
}
</script>