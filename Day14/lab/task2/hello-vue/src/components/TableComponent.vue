<template>
  <div class="fs-6 col-8">
    <table class="table table-striped text-center">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="member in members" :key="member.id">
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.city }}</td>
        </tr>
      </tbody>
    </table>
    <div class="table-group-divider p-2 text-center fs-5">
      Number of members : {{ members.length }}
    </div>
    <div class="text-center my-2">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
        Add Member
      </button>
    </div>

    <div class="modal fade" id="myModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Member</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" aria-describedby="name" v-model="nameInput" @focus="removeErrorMessage">
              <div class="text-danger" v-if="nameMsg">{{ nameMsg }}</div>
            </div>
            <div class="mb-3">
              <label for="city" class="form-label">City</label>
              <input type="text" class="form-control" id="city" aria-describedby="city" v-model="cityInput" @focus="removeErrorMessage">
              <div class="text-danger" v-if="cityMsg">{{ cityMsg }}</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addMember">Add!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import members from './members.js'

export default {
  data() {
    return {
      members,
      nameInput: '',
      nameMsg: '',
      cityInput: '',
      cityMsg: ''
    }
  },
  methods: {
    addMember(){
      let { nameInput: name, cityInput: city } = this.$data;
      if (name && city) {
        this.$data.members.push({
          id: this.$data.members.length + 1,
          name,
          city
        })
      } else {
        if (!this.$data.nameInput) this.$data.nameMsg = 'Name is Required !!!';
        if (!this.$data.cityInput) this.$data.cityMsg = 'City is Required !!!';
      }
    },
    removeErrorMessage(e) {
      if (e.target.id == 'name') this.$data.nameMsg = '';
      if (e.target.id == 'city') this.$data.cityMsg = '';
    }
  }
}
</script>

<style scoped>
</style>
