const expect = chai.expect;
import Vue from 'vue'
import ZchTag from '../src/components/tag'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('ZchTag', () => {
  const RowConstructor = Vue.extend(ZchTag)
  it('存在', () => {
    expect(ZchTag).to.be.exist
  })
  it('测试 closeable', () => {
    const vm = new RowConstructor({
      propsData: {
        closeable: true
      },
    }).$mount()
    const iconElement = vm.$el.querySelector('.zchTag-close')
    expect(iconElement).to.be.exist
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).to.eq('#icon-close')
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 preIcon', () => {
    const icon = 'twitter'
    const vm = new RowConstructor({
      propsData: {
        icon
      },
    }).$mount()
    const iconElement = vm.$el.querySelector('.zchTag-preIcon')
    expect(iconElement).to.be.exist
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).to.eq(`#icon-${icon}`)
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 color', () => {
    const color = 'rgb(233, 233, 233)'
    const vm = new RowConstructor({
      propsData: {
        color
      },
    }).$mount()
    const style = vm.$el.style
    expect(style['background-color']).to.eq(color)
    expect(style['border-color']).to.eq(color)
    expect(style['color']).to.eq('rgb(255, 255, 255)')
    vm.$el.remove()
    vm.$destroy()
  })
  describe('测试 type', () => {
    ['success', 'info', 'warning', 'error', 'magenta', 'red', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'].map(type => {
      it(type, () => {
        const vm = new RowConstructor({
          propsData: {
            type
          },
        }).$mount()
        expect(vm.$el.classList.contains(`type-${type}`)).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
      })
    })
  })
  describe('测试 size', () => {
    ['large', 'mini'].map(size => {
      it(size, () => {
        const vm = new RowConstructor({
          propsData: {
            size
          },
        }).$mount()
        expect(vm.$el.classList.contains(`size-${size}`)).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
      })
    })
  })
  it('测试 tagClick 事件', () => {
    const vm = new RowConstructor({}).$mount()
    const callback = sinon.fake()
    const event = new Event('click')
    vm.$on('click', callback)
    vm.$el.dispatchEvent(event)
    expect(callback).to.have.been.called
    vm.$el.remove()
    vm.$destroy()
  })
  it('测试 close 事件', () => {
    const vm = new RowConstructor({
      propsData: {
        closeable: true,
      },
    }).$mount()
    const iconCallback = sinon.fake()
    // const tagCallback = sinon.fake()
    vm.$on('close', iconCallback)
    // vm.$on('click', tagCallback)
    const event = new Event('click')
    vm.$el.querySelector('.zchTag-close').dispatchEvent(event)
    expect(iconCallback).to.have.been.called
    // expect(tagCallback).to.not.have.been.called // 事件冒泡不知道怎么测试
    vm.$el.remove()
    vm.$destroy()
  })
})