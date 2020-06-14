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
    const wrapper = mount(zchSwitch, {
      propsData: {
        leftText,
      }
    })
    expect(wrapper.find('.zch-switch-leftText').text()).to.eq(leftText)
  })
  it('测试 rightText', () => {
    const rightText = 'zch233'
    const wrapper = mount(zchSwitch, {
      propsData: {
        rightText,
      }
    })
    expect(wrapper.find('.zch-switch-rightText').text()).to.eq(rightText)
  })
  it('测试 disabled', () => {
    const wrapper = mount(zchSwitch, {
      propsData: {
        disabled: true,
      }
    })
    expect(wrapper.classes().includes('disabled')).to.eq(true)
  })
})