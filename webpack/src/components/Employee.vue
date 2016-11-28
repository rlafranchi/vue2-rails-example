<template>
  <tr>
    <td>{{ employee.name }}</td>
    <td>{{ employee.email }}</td>
    <td>{{ employee.manager ? '&#10004;' : '' }}</td>
  </tr>
</template>

<script>
export default {
  name: 'employee',
  props: ['employee']
}
</script>
