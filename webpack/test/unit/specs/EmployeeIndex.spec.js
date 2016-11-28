import Vue from 'vue'
import EmployeeIndex from 'src/components/EmployeeIndex'

describe('EmployeeIndex.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(EmployeeIndex)
    })
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Employees')
  })
})
