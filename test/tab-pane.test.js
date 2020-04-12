const expect = chai.expect;
import Vue from 'vue'
import ZchTab from '../src/components/tabs/tab'
import ZchTabPane from '../src/components/tabs/tab-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('ZchTabPane', () => {
  const Constructor = Vue.extend(ZchTabPane)
  it('存在', () => {
    expect(ZchTabPane).to.be.exist
  })
})