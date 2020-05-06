import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import ZchTag from '@/components/tag'
chai.use(sinonChai)

describe('ZchTag', () => {
  it('存在', () => {
    expect(ZchTag).to.be.exist
  })
  it('测试 closeable', () => {
    const wrapper = mount(ZchTag, {
      propsData: {
        closeable: true
      }
    })
    expect(wrapper.find('.zchTag-close')).to.be.exist
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-close')
  })
  it('测试 preIcon', () => {
    const icon = 'twitter'
    const wrapper = mount(ZchTag, {
      propsData: {
        icon
      }
    })
    expect(wrapper.find('.zchTag-preIcon')).to.be.exist
    expect(wrapper.find('use').attributes('href')).to.eq(`#icon-${icon}`)
  })
  it('测试 color', () => {
    const color = 'rgb(233, 233, 233)'
    const wrapper = mount(ZchTag, {
      attachToDocument: true,
      propsData: {
        color
      }
    })
    const style = window.getComputedStyle(wrapper.element)
    expect(style['background-color']).to.eq(color)
    expect(style['border-color']).to.eq(color)
    expect(style['color']).to.eq('rgb(255, 255, 255)')
  })
  describe('测试 type', () => {
    ['success', 'info', 'warning', 'error', 'magenta', 'red', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'].map(type => {
      it(type, () => {
        const wrapper = shallowMount(ZchTag, {
          propsData: {
            type
          }
        })
        expect(wrapper.classes().includes(`type-${type}`)).to.eq(true)
      })
    })
  })
  describe('测试 size', () => {
    ['large', 'mini'].map(size => {
      it(size, () => {
        const wrapper = shallowMount(ZchTag, {
          propsData: {
            size
          }
        })
        expect(wrapper.classes().includes(`size-${size}`)).to.eq(true)
      })
    })
  })
  it('测试 tagClick 事件', () => {
    const wrapper = shallowMount(ZchTag)
    const callback = sinon.fake()
    wrapper.vm.$on('click', callback)
    wrapper.trigger('click')
    expect(callback).to.have.been.called
  })
  it('测试 close 事件', () => {
    const wrapper = mount(ZchTag, {
      propsData: {
        closeable: true,
      }
    })
    const iconCallback = sinon.fake()
    const tagCallback = sinon.fake()
    wrapper.vm.$on('close', iconCallback)
    wrapper.vm.$on('click', tagCallback)
    wrapper.find('.zchTag-close').trigger('click')
    expect(iconCallback).to.have.been.called
    expect(tagCallback).to.not.have.been.called
  })
})