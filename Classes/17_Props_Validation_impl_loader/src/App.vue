<template>
  <div class="parent-center">
    <div class="container">
      <div v-if="userListShow">
        <UsersList @editUser="editUser" />
      </div>
      <div v-else>
        <EditUser :userSingleData="user" @updatSuccess="updatSuccess" />
      </div>
    </div>
  </div>
</template>

<script>
import UsersList from "./components/users/UsersList.vue";
import EditUser from "./components/users/EditUser.vue";
export default {
  data() {
    return {
      userListShow: true,
      componentName: 'UsersList',
      user: null
    }
  },
  components: {
    UsersList,
    EditUser
  },
  methods: {
    async editUser(userData) {
      this.user = userData;
      this.userListShow = false;
    },
    updatSuccess(status) {
      this.userListShow = true;
    }
  }
}
</script>