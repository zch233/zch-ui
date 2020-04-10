const expect = chai.expect;
import Vue from 'vue'
import ZchToast from '../src/components/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('ZchToast', () => {
  const RowConstructor = Vue.extend(ZchToast)
  it('存在', () => {
    expect(ZchToast).to.be.exist
  })
  it('测试 message => String', () => {
    const message = 'zch233333333333'
    const vm = new RowConstructor({
      propsData: {
        message
      },
    }).$mount()
    const toastElement = vm.$el.querySelector('.zchToast-content')
    expect(toastElement.innerText).to.eq(message)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 message => HTML', () => {
    const message = '<h1>zch233333333333</h1>'
    const vm = new RowConstructor({
      propsData: {
        message,
        enabledHTML: true,
      },
    }).$mount()
    const toastElement = vm.$el.querySelector('.zchToast-content')
    expect(toastElement.innerHTML).to.eq(message)
    vm.$el.remove()
    vm.$destroy()
  })
  describe('测试 type', () => {
    ['default', 'success', 'info', 'wraning', 'error'].map(type => {
      it(type, () => {
        const vm = new RowConstructor({
          propsData: {
            type
          },
        }).$mount()
        const toastElement = vm.$el.querySelector('.zchToast-wrapper')
        expect(toastElement.classList.contains(`zchToast-wrapper-${type}`)).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
      })
    })
  })
  describe('测试 position', () => {
    ['top', 'middle', 'bottom'].map(position => {
      it(position, () => {
        const vm = new RowConstructor({
          propsData: {
            position
          },
        }).$mount()
        const toastElement = vm.$el.querySelector('.zchToast-wrapper')
        expect(toastElement.classList.contains(`zchToast-wrapper-${position}`)).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
      })
    })
  })
  it('测试 showClose 且 主动close', () => {
    const vm = new RowConstructor({
      propsData: {
        showClose: true,
      },
    }).$mount()
    const svgElement = vm.$el.querySelector('.zchToast-icon')
    expect(svgElement.querySelector('use').getAttribute('xlink:href')).to.eq('#icon-close')
    const callback = sinon.fake()
    vm.$on('click', callback)
    svgElement.click()
    expect(callback).to.have.been.called
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 center', () => {
    const vm = new RowConstructor({
      propsData: {
        center: true,
      },
    }).$mount()
    const contentElement = vm.$el.querySelector('.zchToast-content')
    expect(contentElement.classList.contains('zchToast-content-center')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
})