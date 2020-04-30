import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchIcon from '@/components/icon'
chai.use(sinonChai)

describe('zchIcon', () => {
  it('存在', () => {
    expect(zchIcon).to.be.exist
  })
  it('添加 icon ', () => {
    const wrapper = shallowMount(zchIcon, {
      propsData: {
        icon: 'settings'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes('href')).to.equal('#icon-settings')
  })
  it('添加 icon click 事件', () => {
    const wrapper = shallowMount(zchIcon, {
      propsData: {
        icon: 'settings'
      }
    })
    const callback = sinon.fake()
    wrapper.vm.$on('click', callback)
    wrapper.trigger('click')
    expect(callback).to.have.been.called
  })
  it('添加 icon mousedown 事件', () => {
    const wrapper = shallowMount(zchIcon, {
      propsData: {
        icon: 'settings'
      }
    })
    const callback = sinon.fake()
    wrapper.vm.$on('mousedown', callback)
    wrapper.trigger('mousedown')
    expect(callback).to.have.been.called
  })
})