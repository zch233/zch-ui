const expect = chai.expect;
import Vue from 'vue'
import zchCollapse from '../src/components/collapse/collapse'
import zchCollapseItem from '../src/components/collapse/collapse-item'

Vue.component('zch-collapse', zchCollapse)
Vue.component('zch-collapse-item', zchCollapseItem)

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
  it('没有 accordion ', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <zch-collapse v-model="activeName">
        <zch-collapse-item title="title1" name="title1">
          内容111
        </zch-collapse-item>
        <zch-collapse-item title="title2" name="title2">
          内容222
        </zch-collapse-item>
        <zch-collapse-item title="title3" name="title3">
          内容333
        </zch-collapse-item>
        <zch-collapse-item title="title4" name="title4">
          内容444
        </zch-collapse-item>
      </zch-collapse>
    `
    const vm = new Vue({
      el: div,
      data () {
        return {
          activeName: [],
        }
      }
    })
    const titleElements = vm.$el.querySelectorAll('.zch-collapse-item-title-wrapper');
    [...titleElements].map(element => element.click())
    setTimeout(() => {
      const contentElements = vm.$el.querySelectorAll('.zch-collapse-item-content')
      const activeContents = [...contentElements].filter(v => v.classList.contains('active'))
      expect(activeContents.length).to.eq(contentElements.length)
      done()
      div.remove()
      vm.$el.remove()
      vm.$destroy()
    }, 200)
  })
  it('接受 accordion ', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <zch-collapse v-model="activeName" accordion>
        <zch-collapse-item title="title1" name="title1">
          内容111
        </zch-collapse-item>
        <zch-collapse-item title="title2" name="title2">
          内容222
        </zch-collapse-item>
        <zch-collapse-item title="title3" name="title3">
          内容333
        </zch-collapse-item>
        <zch-collapse-item title="title4" name="title4">
          内容444
        </zch-collapse-item>
      </zch-collapse>
    `
    const vm = new Vue({
      el: div,
      data () {
        return {
          activeName: [],
        }
      }
    })
    const titleElements = vm.$el.querySelectorAll('.zch-collapse-item-title-wrapper');
    [...titleElements].map(element => element.click())
    setTimeout(() => {
      const contentElements = vm.$el.querySelectorAll('.zch-collapse-item-content')
      const activeContents = [...contentElements].filter(v => v.classList.contains('active'))
      expect(activeContents.length).to.eq(1)
      done()
      div.remove()
      vm.$el.remove()
      vm.$destroy()
    })
  })
})