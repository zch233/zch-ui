const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/components/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在', () => {
    expect(Button).to.be.exist
  })
})