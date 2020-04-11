const expect = chai.expect;
import Vue from 'vue'
import ZchTab from '../src/components/tabs/tab'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('ZchTab', () => {
  const Constructor = Vue.extend(ZchTab)
  it('存在', () => {
    expect(ZchTab).to.be.exist
  })
})