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
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Employee from 'components/Employee'

export default {
  name: 'employee-index',
  data () {
    return {
      employees: []
    }
  },
  mounted () {
    this.fetchEmployees()
  },
  methods: {
    fetchEmployees () {
      var that = this
      axios.get(process.env.RAILS_URL + '/api/employees')
        .then((res) => {
          that.employees = res.data
        })
    }
  },
  components: {
    Employee
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
