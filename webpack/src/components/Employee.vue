<template>
  <tr>
    <td>
      <!-- Show input when in edit mode -->
      <div v-if="editMode">
        <input type="text" v-model="employee.name"><br>
        <span class="error" v-if="errors.name">{{ errors.name.join(', ') }}</span>
      </div>
      <div v-else>{{ employee.name }}</div>
    </td>
    <td>
      <div v-if="editMode">
        <input type="text" v-model="employee.email"><br>
        <span class="error" v-if="errors.email">{{ errors.email.join(', ') }}</span>
      </div>
      <div v-else>{{ employee.email }}</div>
    </td>
    <td>
      <div v-if="editMode">
        <input type="checkbox" v-model="employee.manager">
      </div>
      <div v-else>{{ employee.manager ? '&#10004;' : '' }}</div>
    </td>
    <td>
      <!-- Save button calls updateEmployee -->
      <button v-if="editMode" @click="updateEmployee">Save</button>
      <!-- Edit button puts row into edit mode -->
      <button v-else @click="editMode = true">Edit</button>
      <!-- Promote / Demote based on current status -->
      <button v-if="!editMode" @click="toggleManagerStatus">{{ employee.manager ? 'Demote' : 'Promote' }}</button>
      <!-- the Fire button inside the component template-->
      <button v-if="!editMode" @click="fireEmployee" style="color:red">Fire</button>
    </td>
  </tr>
</template>

<script>
import axios from 'axios'
var apiUrl = process.env.RAILS_URL + '/api'
const employeeUrl = (id) => {
  return apiUrl + '/employees/' + id
}

export default {
  name: 'employee',
  props: ['employee'],
  data () {
    return {
      editMode: false,
      errors: {}
    }
  },
  methods: {
    toggleManagerStatus () {
      this.employee.manager = !this.employee.manager
      this.updateEmployee()
    },
    updateEmployee () {
      var that = this
      axios.put(employeeUrl(that.employee.id), {
        employee: that.employee
      }).then((res) => {
        that.errors = {}
        that.employee = res.data
        that.editMode = false
      }).catch((error) => {
        that.errors = error.response.data.errors
      })
    },
    fireEmployee: function () {
      var that = this
      axios.delete(employeeUrl(that.employee.id))
        .then((res) => {
          that.$el.remove()
        })
    }
  }
}
</script>
