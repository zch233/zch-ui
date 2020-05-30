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
})