const expect = chai.expect;
import Vue from 'vue'
import ZchTag from '../src/components/tag'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('ZchTag', () => {
  const RowConstructor = Vue.extend(ZchTag)
  it('存在', () => {
    expect(ZchTag).to.be.exist
  })
  describe('测试 type', () => {
    ['success', 'info', 'warning', 'error', 'magenta', 'red', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'].map(type => {
      it(type, () => {
        const vm = new RowConstructor({
          propsData: {
            type
          },
        }).$mount()
        expect(vm.$el.classList.contains(`type-${type}`)).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
      })
    })
  })
})