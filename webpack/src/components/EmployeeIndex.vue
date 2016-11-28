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
        <tr v-for="employee in employees">
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.manager }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'employee-index',
  data () {
    return {
      employees: []
    }
  },
  beforeCreate () {
    var that = this
    axios.get(process.env.RAILS_URL + '/api/employees')
      .then((res) => {
        that.employees = res.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

table {
  margin: 0 auto;
}
</style>
