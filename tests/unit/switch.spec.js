import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchSwitch from '@/components/switch'
chai.use(sinonChai)

describe('zchSwitch', () => {
  it('存在', () => {
    expect(zchSwitch).to.be.exist
  })
  it('测试 leftText', () => {
    const leftText = 'zch233'
    const wrapper = shallowMount(zchSwitch, {
      propsData: {
        leftText,
      }
    })
    expect(wrapper.find('.zch-switch-leftText').text()).to.eq(leftText)
  })
  it('测试 rightText', () => {
    const rightText = 'zch233'
    const wrapper = shallowMount(zchSwitch, {
      propsData: {
        rightText,
      }
    })
    expect(wrapper.find('.zch-switch-rightText').text()).to.eq(rightText)
  })
  it('测试 disabled', () => {
    const wrapper = shallowMount(zchSwitch, {
      propsData: {
        disabled: true,
      }
    })
    expect(wrapper.classes().includes('disabled')).to.eq(true)
  })
  it('测试 width', () => {
    const width = 100
    const wrapper = shallowMount(zchSwitch, {
      attachToDocument: true,
      propsData: {
        width,
      }
    })
    const mainElement = wrapper.find('.zch-switch-main').element
    expect(getComputedStyle(mainElement).width).to.eq(`${width}px`)
  })
})