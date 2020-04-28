import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import ZchButton from '@/components/button/index.vue'
chai.use(sinonChai)

describe('ZchButton', () => {
  it('存在', () => {
    expect(ZchButton).to.be.exist
  })
  it('添加按钮 icon ', () => {
    const wrapper = mount(ZchButton, {
      propsData: {
        icon: 'settings'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes('href')).to.equal('#icon-settings')
  })
  it('按钮 loading', () => {
    const wrapper = mount(ZchButton, {
      propsData: {
        icon: 'settings',
        loading: true
      }
    })
    const useElements = wrapper.findAll('use')
    expect(useElements.length).to.equal(1)
    const href = useElements.at(0).attributes('href')
    expect(href).to.eq('#icon-loading')
  })
  it('按钮 right iconPosition', () => {
    const wrapper = mount(ZchButton, {
      attachToDocument: true,
      propsData: {
        icon: 'right',
        iconPosition: 'right'
      }
    })
    const svgElement = wrapper.vm.$el.querySelector('svg')
    const { order } = window.getComputedStyle(svgElement)
    expect(order).to.eq('1')
    wrapper.destroy()
  })
  it('按钮默认 iconPosition', () => {
    const wrapper = mount(ZchButton, {
      attachToDocument: true,
      propsData: {
        icon: 'left'
      }
    })
    const svgElement = wrapper.vm.$el.querySelector('svg')
    const { order } = window.getComputedStyle(svgElement)
    expect(order).to.eq('0')
    wrapper.destroy()
  })
  it('按钮 disabled', () => {
    const wrapper = mount(ZchButton, {
      propsData: {
        disabled: true
      }
    })
    const classList = wrapper.classes()
    const hasClassDisabled = classList.includes('disabled')
    const hasAttributeDisabled = wrapper.attributes('disabled') === 'disabled'
    expect(hasClassDisabled).to.eq(true)
    expect(hasAttributeDisabled).to.eq(true)
  })
  it('按钮 round', () => {
    const wrapper = mount(ZchButton, {
      propsData: {
        round: true
      }
    })
    const classList = wrapper.classes()
    const hasClassRound = classList.includes('round')
    expect(hasClassRound).to.eq(true)
  })
  it('按钮 square', () => {
    const wrapper = mount(ZchButton, {
      propsData: {
        square: true
      }
    })
    const classList = wrapper.classes()
    const hasClassSquare = classList.includes('square')
    expect(hasClassSquare).to.eq(true)
  })
  it('按钮 circle', () => {
    const wrapper = mount(ZchButton, {
      propsData: {
        circle: true
      }
    })
    const classList = wrapper.classes()
    const hasClassCircle = classList.includes('circle')
    expect(hasClassCircle).to.eq(true)
  })
  it('按钮 nativeType', () => {
    const nativeType = 'submit'
    const wrapper = mount(ZchButton, {
      propsData: {
        nativeType
      }
    })
    expect(wrapper.attributes('type')).to.eq(nativeType)
  })
  it('按钮 可以被点击', () => {
    const wrapper = mount(ZchButton)
    const callback = sinon.fake()
    wrapper.vm.$on('click', callback)
    wrapper.vm.$el.click()
    expect(callback).to.have.been.called
  })
  describe('测试 size', () => {
    ['large', 'mini'].map(size => {
      it(size, () => {
        const wrapper = mount(ZchButton, {
          propsData: {
            size
          }
        })
        expect(wrapper.classes().includes(`size-${size}`)).to.eq(true)
      })
    })
  })
  describe('测试 type', () => {
    ['primary', 'success', 'info', 'warning', 'error'].map(type => {
      it(type, () => {
        const wrapper = mount(ZchButton, {
          propsData: {
            type
          }
        })
        expect(wrapper.classes().includes(`type-${type}`)).to.eq(true)
      })
    })
  })
})