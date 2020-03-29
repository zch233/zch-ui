const expect = chai.expect;
import Vue from 'vue'
import zchCol from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchCol', () => {
  const Constructor = Vue.extend(zchCol)
  it('存在', () => {
    expect(zchCol).to.be.exist
  })
  it('测试 tag', () => {
    const vm = new Constructor({
      propsData: {
        tag: 'li'
      },
    }).$mount()
    expect(vm.$el.tagName).to.eq('LI')
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 span ', () => {
    const span = 12
    const vm = new Constructor({
      propsData: {
        span
      }
    }).$mount()
    const colElement = vm.$el
    const spanClass = colElement.classList.contains(`zch-col-${span}`)
    expect(spanClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 offset ', () => {
    const offset = 2
    const vm = new Constructor({
      propsData: {
        offset
      }
    }).$mount()
    const colElement = vm.$el
    const offsetClass = colElement.classList.contains(`zch-col-offset-${offset}`)
    expect(offsetClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 phone ', () => {
    const phone = 2
    const vm = new Constructor({
      propsData: {
        phone
      }
    }).$mount()
    const colElement = vm.$el
    const phoneClass = colElement.classList.contains(`zch-col-phone-${phone}`)
    expect(phoneClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 phone 为 Object', () => {
    const phone = { span: 12, offset: 1 }
    const vm = new Constructor({
      propsData: {
        phone
      }
    }).$mount()
    const colElement = vm.$el
    const phoneSpanClass = colElement.classList.contains(`zch-col-phone-${phone.span}`)
    const phoneOffsetClass = colElement.classList.contains(`zch-col-phone-offset-${phone.offset}`)
    expect(phoneSpanClass).to.eq(true)
    expect(phoneOffsetClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 pad ', () => {
    const pad = 2
    const vm = new Constructor({
      propsData: {
        pad
      }
    }).$mount()
    const colElement = vm.$el
    const padClass = colElement.classList.contains(`zch-col-pad-${pad}`)
    expect(padClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 pad 为 Object', () => {
    const pad = { span: 12, offset: 1 }
    const vm = new Constructor({
      propsData: {
        pad
      }
    }).$mount()
    const colElement = vm.$el
    const padSpanClass = colElement.classList.contains(`zch-col-pad-${pad.span}`)
    const padOffsetClass = colElement.classList.contains(`zch-col-pad-offset-${pad.offset}`)
    expect(padSpanClass).to.eq(true)
    expect(padOffsetClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 narrowPc ', () => {
    const narrowPc = 2
    const vm = new Constructor({
      propsData: {
        narrowPc
      }
    }).$mount()
    const colElement = vm.$el
    const narrowPcClass = colElement.classList.contains(`zch-col-narrowPc-${narrowPc}`)
    expect(narrowPcClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 narrowPc 为 Object', () => {
    const narrowPc = { span: 12, offset: 1 }
    const vm = new Constructor({
      propsData: {
        narrowPc
      }
    }).$mount()
    const colElement = vm.$el
    const narrowPcSpanClass = colElement.classList.contains(`zch-col-narrowPc-${narrowPc.span}`)
    const narrowPcOffsetClass = colElement.classList.contains(`zch-col-narrowPc-offset-${narrowPc.offset}`)
    expect(narrowPcSpanClass).to.eq(true)
    expect(narrowPcOffsetClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 pc ', () => {
    const pc = 2
    const vm = new Constructor({
      propsData: {
        pc
      }
    }).$mount()
    const colElement = vm.$el
    const pcClass = colElement.classList.contains(`zch-col-pc-${pc}`)
    expect(pcClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 pc 为 Object', () => {
    const pc = { span: 12, offset: 1 }
    const vm = new Constructor({
      propsData: {
        pc
      }
    }).$mount()
    const colElement = vm.$el
    const pcSpanClass = colElement.classList.contains(`zch-col-pc-${pc.span}`)
    const pcOffsetClass = colElement.classList.contains(`zch-col-pc-offset-${pc.offset}`)
    expect(pcSpanClass).to.eq(true)
    expect(pcOffsetClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
})