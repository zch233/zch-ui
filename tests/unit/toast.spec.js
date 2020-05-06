import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import ZchToast from '@/components/toast'
chai.use(sinonChai)

describe('ZchToast', () => {
  it('存在', () => {
    expect(ZchToast).to.be.exist
  })
  it('测试 message => String', () => {
    const message = 'zch233333333333'
    const wrapper = shallowMount(ZchToast, {
      propsData: {
        message
      }
    })
    const toastElement = wrapper.find('.zchToast-content')
    expect(toastElement.text()).to.eq(message)
  })
  it('测试 message => HTML', () => {
    const message = '<h1>zch233333333333</h1>'
    const wrapper = shallowMount(ZchToast, {
      propsData: {
        message,
        enabledHTML: true,
      }
    })
    const toastElement = wrapper.find('.zchToast-content')
    expect(toastElement.element.innerHTML).to.eq(message)
  })
  describe('测试 type', () => {
    ['default', 'success', 'info', 'warning', 'error'].map(type => {
      it(type, () => {
        const wrapper = shallowMount(ZchToast, {
          propsData: {
            type,
          }
        })
        const toastElement = wrapper.find('.zchToast-wrapper')
        expect(toastElement.classes().includes(`zchToast-wrapper-${type}`)).to.eq(true)
      })
    })
  })
  describe('测试 position', () => {
    ['top', 'middle', 'bottom'].map(position => {
      it(position, () => {
        const wrapper = shallowMount(ZchToast, {
          propsData: {
            position,
          }
        })
        const toastElement = wrapper.find('.zchToast-wrapper')
        expect(toastElement.classes().includes(`zchToast-wrapper-${position}`)).to.eq(true)
      })
    })
  })
  it('测试 showClose 且 调用beforeClose 且 click后关闭', () => {
    const beforeClose = sinon.fake()
    const wrapper = mount(ZchToast, {
      propsData: {
        showClose: true,
        beforeClose,
        duration: 100
      }
    })
    const svgElement = wrapper.find('.zchToast-icon')
    expect(svgElement.find('use').attributes('href')).to.eq('#icon-close')
    svgElement.trigger('click')
    expect(document.body.contains(svgElement.element)).to.eq(false)
    expect(beforeClose).to.have.been.called
  })
  it('测试 showClose 且 调用beforeClose 且 自动关闭', (done) => {
    const beforeClose = sinon.fake()
    const wrapper = mount(ZchToast, {
      propsData: {
        beforeClose,
        duration: 100
      }
    })
    setTimeout(() => {
      expect(document.body.contains(wrapper.element)).to.eq(false)
      expect(beforeClose).to.have.been.called
      done()
    }, 1000)
  })
  it('测试 center', () => {
    const wrapper = shallowMount(ZchToast, {
      propsData: {
        center: true,
      }
    })
    const contentElement = wrapper.find('.zchToast-content')
    expect(contentElement.classes().includes('zchToast-content-center')).to.eq(true)
  })
})