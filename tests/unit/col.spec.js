import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import ZchCol from '@/components/col/index.js'
chai.use(sinonChai)

describe('ZchCol', () => {
  it('存在', () => {
    expect(ZchCol).to.be.exist
  })
  it('测试 tag', () => {
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        tag: 'li'
      }
    })
    expect(wrapper.vm.$el.tagName).to.eq('LI')
  })
  it('测试 span ', () => {
    const span = 12
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        span
      }
    })
    const spanClassList = wrapper.classes()
    expect(spanClassList.includes(`zch-col-${span}`)).to.eq(true)
  })
  it('测试 offset ', () => {
    const offset = 2
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        offset
      }
    })
    const offsetClassList = wrapper.classes()
    expect(offsetClassList.includes(`zch-col-offset-${offset}`)).to.eq(true)
  })
  it('测试 phone ', () => {
    const phone = 2
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        phone
      }
    })
    const phoneClassList = wrapper.classes()
    expect(phoneClassList.includes(`zch-col-phone-${phone}`)).to.eq(true)
  })
  it('测试 phone 为 Object', () => {
    const phone = { span: 12, offset: 1 }
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        phone
      }
    })
    const phoneClassList = wrapper.classes()
    expect(phoneClassList.includes(`zch-col-phone-${phone.span}`)).to.eq(true)
    expect(phoneClassList.includes(`zch-col-phone-offset-${phone.offset}`)).to.eq(true)
  })
  it('测试 pad ', () => {
    const pad = 2
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        pad
      }
    })
    const padClassList = wrapper.classes()
    expect(padClassList.includes(`zch-col-pad-${pad}`)).to.eq(true)
  })
  it('测试 pad 为 Object', () => {
    const pad = { span: 12, offset: 1 }
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        pad
      }
    })
    const padClassList = wrapper.classes()
    expect(padClassList.includes(`zch-col-pad-${pad.span}`)).to.eq(true)
    expect(padClassList.includes(`zch-col-pad-offset-${pad.offset}`)).to.eq(true)
  })
  it('测试 narrowPc ', () => {
    const narrowPc = 2
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        narrowPc
      }
    })
    const narrowPcClassList = wrapper.classes()
    expect(narrowPcClassList.includes(`zch-col-narrowPc-${narrowPc}`)).to.eq(true)
  })
  it('测试 narrowPc 为 Object', () => {
    const narrowPc = { span: 12, offset: 1 }
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        narrowPc
      }
    })
    const narrowPcClassList = wrapper.classes()
    expect(narrowPcClassList.includes(`zch-col-narrowPc-${narrowPc.span}`)).to.eq(true)
    expect(narrowPcClassList.includes(`zch-col-narrowPc-offset-${narrowPc.offset}`)).to.eq(true)
  })
  it('测试 pc ', () => {
    const pc = 2
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        pc
      }
    })
    const pcClassList = wrapper.classes()
    expect(pcClassList.includes(`zch-col-pc-${pc}`)).to.eq(true)
  })
  it('测试 pc 为 Object', () => {
    const pc = { span: 12, offset: 1 }
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        pc
      }
    })
    const pcClassList = wrapper.classes()
    expect(pcClassList.includes(`zch-col-pc-${pc.span}`)).to.eq(true)
    expect(pcClassList.includes(`zch-col-pc-offset-${pc.offset}`)).to.eq(true)
  })
  it('测试 widePc ', () => {
    const widePc = 2
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        widePc
      }
    })
    const widePcClassList = wrapper.classes()
    expect(widePcClassList.includes(`zch-col-widePc-${widePc}`)).to.eq(true)
  })
  it('测试 widePc 为 Object', () => {
    const widePc = { span: 12, offset: 1 }
    const wrapper = shallowMount(ZchCol, {
      propsData: {
        widePc
      }
    })
    const pcClassList = wrapper.classes()
    expect(pcClassList.includes(`zch-col-widePc-${widePc.span}`)).to.eq(true)
    expect(pcClassList.includes(`zch-col-widePc-offset-${widePc.offset}`)).to.eq(true)
  })
})
