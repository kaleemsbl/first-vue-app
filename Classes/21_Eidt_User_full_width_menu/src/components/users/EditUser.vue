<template>
  <div class="row">
    <div class="col">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">First Name</label>
          <input type="text" class="form-control" v-model="user.first_name">
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Last Name</label>
          <input type="text" class="form-control" v-model="user.last_name">
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Phone</label>
          <input type="text" class="form-control" v-model="user.phone">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Gender</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="user.gender">
            <option>Male</option>
            <option>Female</option>
            <option>Genderfluid</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">City</label>
          <input type="text" class="form-control" v-model="user.city">
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Image Url</label>
          <input type="text" class="form-control" v-model="user.image">
        </div>
        <div class="pb-3">
          <button class="btn btn-warning" @click.prevent="cancel">Back</button>
          <button class="btn btn-primary ml-2" @click.prevent="updateRecord">Submit</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      user: {}
    }
  },
  async created() {
    let result = await axios.get(`${import.meta.env.VITE_API_URL}/users/${this.$route.params.id}`);
    this.user = result.data;
  },
  methods: {
    async updateRecord() {
      let result = await axios.put(`${import.meta.env.VITE_API_URL}/users/${this.$route.params.id}`, this.user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your data has been modified',
        showConfirmButton: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.$router.push('/');
        }
      });
    },
    cancel() {
      this.$router.push('/');
    }
  }
}
</script>