<template>
  <div class="row mb-3">
    <div class="col text-center">
      <h4>Edit User</h4>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">First Name</label>
          <input type="text" class="form-control" v-model="userSingleData.first_name">
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Last Name</label>
          <input type="text" class="form-control" v-model="userSingleData.last_name">
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Phone</label>
          <input type="text" class="form-control" v-model="userSingleData.phone">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Gender</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="userSingleData.gender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">City</label>
          <input type="text" class="form-control" v-model="userSingleData.city">
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Image Url</label>
          <input type="text" class="form-control" v-model="userSingleData.image">
        </div>
        <div class="pb-3">
          <button class="btn btn-warning" @click.prevent="cancel">Cancel</button>
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
  props: ['userSingleData'],
  methods: {
    async updateRecord() {
      let result = await axios.put(`${import.meta.env.VITE_API_URL}/users/${this.userSingleData.id}`, this.userSingleData);
      console.log(result);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your data has been modified',
        showConfirmButton: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.$emit('updatSuccess', true);
        }
      });
    },
    cancel() {
      this.$emit('updatSuccess', false);
    }
  }
}
</script>