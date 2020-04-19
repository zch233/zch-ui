const expect = chai.expect;
import Vue from 'vue'
import zchCollapse from '../src/components/collapse/collapse'
import zchCollapseItem from '../src/components/collapse/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchCollapseItem', () => {
  const Constructor = Vue.extend(zchCollapseItem)
  it('存在', () => {
    expect(zchCollapseItem).to.be.exist
  })
  it('测试 title ', () => {
    const title = 'zch111'
    const vm = new Constructor({
      propsData: {
        title
      }
    }).$mount()
    const titleElement = vm.$el.querySelector('.zch-collapse-item-title')
    expect(titleElement.innerHTML).to.eq(title)
    vm.$el.remove()
    vm.$destroy()
  })
})