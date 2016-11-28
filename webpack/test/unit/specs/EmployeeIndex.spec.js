import Vue from 'vue'
import EmployeeIndex from 'src/components/EmployeeIndex'
require('es6-promise').polyfill()
var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')
var mock = new MockAdapter(axios)

mock.onGet(process.env.RAILS_URL + '/api/employees').reply(200,
  [
    {
      id: 1,
      name: 'Bob',
      email: 'bob@test.com',
      manager: false,
      created_at: '2016-11-26T15:23:08.018Z',
      updated_at: '2016-11-26T15:23:08.018Z'
    }
  ]
)

describe('EmployeeIndex.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(EmployeeIndex)
    })
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Employees')
  })

  it('should render table headers', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(EmployeeIndex)
    })
    expect(vm.$el.querySelector('thead').textContent)
      .to.equal('Name Email Manager')
  })
})
