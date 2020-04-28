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
  it('接受 disabled ', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    Vue.component('zch-tab', ZchTab)
    Vue.component('zch-tab-pane', ZchTabPane)
    div.innerHTML = `
      <zch-tab v-model="activeName">
        <zch-tab-pane name="title1"111</zch-tab-pane>
        <zch-tab-pane disabled name="title2">2222</zch-tab-pane>
        <zch-tab-pane name="title3">3333</zch-tab-pane>
      </zch-tab>
    `
    const vm = new Vue({
      el: div,
      data () {
        return {
          activeName: 'title1',
        }
      }
    })
    setTimeout(() => {
      const navElement = vm.$el.querySelector(`.zchTabNav[data-name="title2"]`)
      expect(navElement.classList.contains('zchTabNav-disabled')).to.eq(true)
      done()
      div.remove()
      vm.$el.remove()
      vm.$destroy()
    })
  })
})