const expect = chai.expect;
import Vue from 'vue'
import zchRow from '../src/components/row'
import zchCol from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchRow', () => {
  const RowConstructor = Vue.extend(zchRow)
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
      const rowElement = vm.$el.querySelector('.zch-row')
      const colsElements = vm.$el.querySelectorAll('.zch-col')
      expect(colsElements.length).to.eq(2)
      expect(getComputedStyle(rowElement).marginLeft).to.eq('-10px')
      expect(getComputedStyle(rowElement).marginRight).to.eq('-10px')
      expect(getComputedStyle(colsElements[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(colsElements[1]).paddingLeft).to.eq('10px')
      vm.$el.remove()
      div.remove()
      vm.$destroy()
      done()
    })
  })
  it('添加 align-center ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new RowConstructor({
      propsData: {
        align: 'center'
      },
    }).$mount(div)
    const rowElement = vm.$el
    const alignItems = rowElement.classList.contains('is-align-center')
    expect(alignItems).to.eq(true)
    vm.$el.remove()
    div.remove()
    vm.$destroy()
  })
  it('添加 align-bottom ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new RowConstructor({
      propsData: {
        align: 'bottom'
      },
    }).$mount(div)
    const rowElement = vm.$el
    const alignItems = rowElement.classList.contains('is-align-bottom')
    expect(alignItems).to.eq(true)
    vm.$el.remove()
    div.remove()
    vm.$destroy()
  })
  it('添加 justify-end ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new RowConstructor({
      propsData: {
        justify: 'end'
      },
    }).$mount(div)
    const rowElement = vm.$el
    const justifyContent = rowElement.classList.contains('is-justify-end')
    expect(justifyContent).to.eq(true)
    vm.$el.remove()
    div.remove()
    vm.$destroy()
  })
  it('添加 justify-center ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new RowConstructor({
      propsData: {
        justify: 'center'
      },
    }).$mount(div)
    const rowElement = vm.$el
    const justifyContent = rowElement.classList.contains('is-justify-center')
    expect(justifyContent).to.eq(true)
    vm.$el.remove()
    div.remove()
    vm.$destroy()
  })
  it('添加 justify-space-around ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new RowConstructor({
      propsData: {
        justify: 'space-around'
      },
    }).$mount(div)
    const rowElement = vm.$el
    const justifyContent = rowElement.classList.contains('is-justify-space-around')
    expect(justifyContent).to.eq(true)
    vm.$el.remove()
    div.remove()
    vm.$destroy()
  })
})