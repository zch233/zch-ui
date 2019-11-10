const expect = chai.expect;
import Vue from 'vue'
import zchButton from '../src/components/button/index'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchButton', () => {
  it('存在', () => {
    expect(zchButton).to.be.exist
  })
  it('添加按钮 icon ', () => {
    const Constructor = Vue.extend(zchButton)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    })
    vm.$mount()
    const useElement = vm.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    vm.$el.remove()
    vm.$destroy()
  })
  it('按钮 loading', () => {
    const Constructor = Vue.extend(zchButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true
      }
    })
    vm.$mount()
    const useElement = vm.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
  })
  it('按钮 right iconPosition', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(zchButton)
    const vm = new Constructor({
      propsData: {
        icon: 'right',
        iconPosition: 'right'
      }
    })
    vm.$mount(div)
    const svgElement = vm.$el.querySelector('svg')
    const { order } = window.getComputedStyle(svgElement)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })
  it('按钮默认 iconPosition', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(zchButton)
    const vm = new Constructor({
      propsData: {
        icon: 'left'
      }
    })
    vm.$mount(div)
    const svgElement = vm.$el.querySelector('svg')
    const { order } = window.getComputedStyle(svgElement)
    expect(order).to.eq('0')
    vm.$el.remove()
    vm.$destroy()
  })
  it('按钮 disabled', () => {
    const Constructor = Vue.extend(zchButton)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    })
    vm.$mount()
    const button = vm.$el
    const classList = button.classList
    const hasClassDisabled = classList.contains('disabled')
    const hasAttributeDisabled = button.hasAttribute('disabled')
    expect(hasClassDisabled).to.eq(true)
    expect(hasAttributeDisabled).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
})