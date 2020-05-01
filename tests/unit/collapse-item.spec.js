import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchCollapseItem from '@/components/collapse/collapse-item'
chai.use(sinonChai)


describe('zchCollapseItem', () => {
  it('存在', () => {
    expect(zchCollapseItem).to.be.exist
  })
  it('测试 title ', () => {
    const title = 'zch233'
    const wrapper = shallowMount(zchCollapseItem, {
      provide: () => ({
        collapse: false
      }),
      propsData: {
        name: 'test',
        title,
      }
    })
    const innerText = wrapper.find(('.zch-collapse-item-title')).text()
    expect(innerText).to.eq(title)
  })
  it('测试 name ', () => {
    const name = 'zch233'
    const wrapper = shallowMount(zchCollapseItem, {
      provide: () => ({
        collapse: false
      }),
      propsData: {
        name
      }
    })
    expect(wrapper.attributes('data-name')).to.eq(name)
  })
  it('测试 disabled ', () => {
    const wrapper = shallowMount(zchCollapseItem, {
      provide: () => ({
        collapse: false
      }),
      propsData: {
        name: 'test',
        disabled: true,
      }
    })
    const titleElement = wrapper.find('.zch-collapse-item-title-wrapper')
    expect(titleElement.classes().includes('disabled')).to.eq(true)
  })
})