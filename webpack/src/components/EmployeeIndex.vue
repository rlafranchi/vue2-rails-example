<template>
  <div id="employees">
    <h1>Employees</h1>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        <employee
          :employee="employee"
          v-bind:key="employee.id"
          v-for="employee in employees">
        </employee>
        <tr>
          <td>
            <!-- Input -->
            <input type="text" v-model="employee.name"><br>
            <!-- Validation errors -->
            <span class="error">{{ errors.name ? errors.name.join(', ') : '' }}</span>
          </td>
          <td>
            <!-- Input -->
            <input type="text" v-model="employee.email"><br>
            <!-- Validation errors -->
            <span class="error">{{ errors.email ? errors.email.join(', ') : '' }}</span>
          </td>
          <td><input type="checkbox" v-model="employee.manager"></td>
          <!-- button click calls hireEmployee -->
          <td><button @click="hireEmployee">Hire</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Employee from 'components/Employee'
var apiUrl = process.env.RAILS_URL + '/api'
const employeesUrl = apiUrl + '/employees'

export default {
  name: 'employee-index',
  data () {
    return {
      employees: [],
      employee: {
        name: '',
        email: '',
        manager: false
      },
      errors: {}
    }
  },
  created () {
    this.fetchEmployees()
  },
  methods: {
    fetchEmployees () {
      var that = this
      axios.get(employeesUrl)
        .then((res) => {
          that.employees = res.data
        })
    },
    hireEmployee () {
      var that = this
      axios.post(employeesUrl, {
        employee: that.employee
      }).then((res) => {
        that.errors = {}
        that.employees.push(res.data)
        that.employee = {
          name: '',
          email: '',
          manager: false
        }
      }).catch((error) => {
        that.errors = error.response.data.errors
      })
    }
  },
  components: {
    Employee
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

table {
  margin: 0 auto;
  text-align: left;
}

.error {
  color: red;
}
</style>
