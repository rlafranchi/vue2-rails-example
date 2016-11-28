import Vue from 'vue'
import Employee from 'src/components/Employee'

// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el.textContent
}

describe('Employee.vue', () => {
  it('should render correct contents', () => {
    expect(getRenderedText(Employee, {
      employee: {
        name: 'Bob',
        email: 'bob@example.com',
        manager: false
      }
    })).to.equal('Bob bob@example.com ')
  })
})
