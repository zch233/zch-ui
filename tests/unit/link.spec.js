import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchLink from '@/components/link'
chai.use(sinonChai)

describe('zchLink', () => {
  it('存在', () => {
    expect(zchLink).to.be.exist
  })
  it('测试 url', () => {
    const url = 'https://www.baidu.com'
    const wrapper = shallowMount(zchLink, {
      propsData: {
        url
      }
    })
    expect(wrapper.attributes('data-url')).to.eq(url)
  })
  it('测试 underline', () => {
    const wrapper = shallowMount(zchLink, {
      propsData: {
        underline: true,
      }
    })
    expect(wrapper.classes().includes('underline')).to.eq(true)
  })
  it('测试 disabled', () => {
    const wrapper = shallowMount(zchLink, {
      propsData: {
        disabled: true,
      }
    })
    expect(wrapper.classes().includes('disabled')).to.eq(true)
  })
  describe('测试 type', () => {
    ['primary', 'success', 'warning', 'danger', 'info'].map(type => {
      it(type, () => {
        const wrapper = shallowMount(zchLink, {
          propsData: {
            type,
          }
        })
        expect(wrapper.classes().includes(type)).to.eq(true)
      })
    })
  })
  it('测试 Click', () => {
    const callback1 = sinon.fake()
    const wrapper1 = shallowMount(zchLink, {
      propsData: {
        disabled: true,
      }
    })
    wrapper1.vm.$on('click', callback1)
    wrapper1.find('.zchLink').trigger('click')
    expect(callback1).to.not.have.been.called

    const callback2 = sinon.fake()
    const wrapper2 = shallowMount(zchLink, {
      propsData: {
        disabled: false,
      }
    })
    wrapper2.vm.$on('click', callback2)
    wrapper2.find('.zchLink').trigger('click')
    expect(callback2).to.have.been.called
  })
})