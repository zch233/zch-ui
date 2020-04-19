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
  it('接受 v-model ', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    Vue.component('zch-collapse', zchCollapse)
    Vue.component('zch-collapse-item', zchCollapseItem)
    div.innerHTML = `
      <zch-collapse v-model="activeName">
        <zch-collapse-item title="title1" name="title1">
          内容111
        </zch-collapse-item>
        <zch-collapse-item title="title2" name="title2">
          内容222
        </zch-collapse-item>
      </zch-collapse>
    `
    const activeName = 'title2'
    const vm = new Vue({
      el: div,
      data () {
        return {
          activeName,
        }
      }
    })
    setTimeout(() => {
      const contentElement = vm.$el.querySelector(`.zch-collapse-item[data-name="${activeName}"]`).querySelector('.zch-collapse-item-content')
      expect(contentElement.classList.contains('active')).to.eq(true)
      done()
      div.remove()
      vm.$el.remove()
      vm.$destroy()
    })
  })
})