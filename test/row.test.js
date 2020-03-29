const expect = chai.expect;
import Vue from 'vue'
import zchRow from '../src/components/row'
import zchCol from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchRow', () => {
  const RowConstructor = Vue.extend(zchRow)
  const ColConstructor = Vue.extend(zchCol)
  it('存在', () => {
    expect(zchRow).to.be.exist
  })
  it('添加 gutter ', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    Vue.component('zch-row', zchRow)
    Vue.component('zch-col', zchCol)
    div.innerHTML = `
      <zch-row gutter="20">
        <zch-col>1</zch-col>
        <zch-col>2</zch-col>
      </zch-row>
    `
    const vm = new Vue({
      el: div,
    })
    setTimeout(() => {
      console.log(vm.$el.outerHTML, 1)
      const row = vm.$el.querySelector('.zch-row')
      const cols = vm.$el.querySelectorAll('.zch-col')
      expect(cols.length).to.eq(2)
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      vm.$el.remove()
      div.remove()
      vm.$destroy()
      done()
    })
  })
})