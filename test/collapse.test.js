const expect = chai.expect;
import Vue from 'vue'
import zchCollapse from '../src/components/collapse/collapse'
import zchCollapseItem from '../src/components/collapse/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchCollapse', () => {
  const Constructor = Vue.extend(zchCollapse)
  it('存在', () => {
    expect(zchCollapse).to.be.exist
  })
})