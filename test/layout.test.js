const expect = chai.expect;
import Vue from 'vue'
import zchLayout from '../src/components/layout'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchLayout', () => {
  const Constructor = Vue.extend(zchLayout)
  it('存在', () => {
    expect(zchLayout).to.be.exist
  })
  it('测试 direction ', () => {
    const vm = new Constructor({
      propsData: {
        direction: 'vertical'
      }
    }).$mount()
    const directionClass = vm.$el.classList.contains('is-vertical')
    expect(directionClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
})