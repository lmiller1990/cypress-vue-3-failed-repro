import { mount } from '@cypress/vue'
import { defineComponent, h } from 'vue'
import Emitter from './Emitter.vue'

it('example 1', () => {
  const stub = cy.stub()
  const Wrapper = defineComponent({
    setup(props, ctx) {
      return () => h(Emitter, { onHello: stub })
    }
  })

  mount(Wrapper)

  cy.get('button').trigger('click').then(() => {
    expect(stub).to.have.been.calledWith('Hello world')
  })
})

it('example 2', () => {
  const stub = cy.stub()
  mount(() => h(Emitter, { onHello: stub }))

  cy.get('button').trigger('click').then(() => {
    expect(stub).to.have.been.calledWith('Hello world')
  })
})