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
})