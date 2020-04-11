const expect = chai.expect;
import Vue from 'vue'
import ZchTab from '../src/components/tabs/tab'
import ZchTabPane from '../src/components/tabs/tab-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('ZchTab', () => {
  const Constructor = Vue.extend(ZchTab)
  it('存在', () => {
    expect(ZchTab).to.be.exist
  })
  it('接受 v-model ', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    Vue.component('zch-tab', ZchTab)
    Vue.component('zch-tab-pane', ZchTabPane)
    div.innerHTML = `
      <zch-tab v-model="activeName">
        <zch-tab-pane label="title1" name="title1"111</zch-tab-pane>
        <zch-tab-pane label="title22" name="title2">2222</zch-tab-pane>
        <zch-tab-pane label="title333" name="title3">3333</zch-tab-pane>
      </zch-tab>
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
      console.log(vm.$el)
      const navElement = vm.$el.querySelector(`.zchTabNav[data-name="${activeName}"]`)
      expect(navElement.classList.contains('zchTabNav-active')).to.eq(true)
      done()
      vm.$el.remove()
      vm.$destroy()
    })
    // expect(true).to.eq(false)
    // vm.$el.remove()
    // vm.$destroy()
  })
})