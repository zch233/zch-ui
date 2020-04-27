const expect = chai.expect;
import Vue from 'vue'
import zchPopover from '../src/components/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchPopover', () => {
  const Constructor = Vue.extend(zchPopover)
  it('存在', () => {
    expect(zchPopover).to.be.exist
  })
  it('接受 position', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    Vue.component('zch-popover', zchPopover)
    div.innerHTML = `
      <zch-popover position="left" ref="test">
        <template slot="content">这是一段浮层</template>
        <button>left</button>
      </zch-popover>
    `
    const vm = new Vue({
      el: div,
    })
    vm.$el.querySelector('button').click()
    setTimeout(() => {
      console.log(vm.$refs.test.$refs)
      const popoverElement = vm.$refs.test.$refs.popoverContent
      expect(popoverElement.classList.contains('zchPopover-popoverWrapper-left')).to.eq(true)
      expect(popoverElement.querySelector('.zchPopover-popover').classList.contains('zchPopover-popover-left-arrow')).to.eq(true)
      done()
    }, 1000)
  })
  xit('测试 trigger', () => {})
})
