import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchRow from '@/components/row'
import zchCol from '@/components/col'
chai.use(sinonChai)

describe('zchRow', () => {
  it('存在', () => {
    expect(zchRow).to.be.exist
  })
  it('测试 tag', () => {
    const wrapper = shallowMount(zchRow, {
      propsData: {
        tag: 'ul'
      },
    })
    expect(wrapper.element.tagName).to.eq('UL')
  })
  it('测试 gutter ', async () => {
    const Component = {
      components: { zchRow, zchCol },
      template: `
        <zch-row gutter="20">
          <zch-col>1</zch-col>
          <zch-col>2</zch-col>
        </zch-row>
      `,
    }
    const wrapper = mount(Component, { attachToDocument: true })
    const rowElement = wrapper.find('.zch-row').element
    const colsElements = wrapper.findAll('.zch-col')
    expect(colsElements.length).to.eq(2)
    expect(getComputedStyle(rowElement).marginLeft).to.eq('-10px')
    expect(getComputedStyle(rowElement).marginRight).to.eq('-10px')
    expect(getComputedStyle(colsElements.at(0).element).paddingRight).to.eq('10px')
    expect(getComputedStyle(colsElements.at(1).element).paddingLeft).to.eq('10px')
  })
  it('测试 align-center ', () => {
    const wrapper = shallowMount(zchRow, {
      propsData: {
        align: 'center'
      }
    })
    const hasAlignItems = wrapper.classes().includes('is-align-center')
    expect(hasAlignItems).to.eq(true)
  })
  it('测试 align-bottom ', () => {
    const wrapper = shallowMount(zchRow, {
      propsData: {
        align: 'bottom'
      }
    })
    const hasAlignItems = wrapper.classes().includes('is-align-bottom')
    expect(hasAlignItems).to.eq(true)
  })
  it('测试 justify-end ', () => {
    const wrapper = shallowMount(zchRow, {
      propsData: {
        justify: 'end'
      }
    })
    const hasJustifyContent = wrapper.classes().includes('is-justify-end')
    expect(hasJustifyContent).to.eq(true)
  })
  it('测试 justify-center ', () => {
    const wrapper = shallowMount(zchRow, {
      propsData: {
        justify: 'justify-center'
      }
    })
    const hasJustifyContent = wrapper.classes().includes('is-justify-center')
    expect(hasJustifyContent).to.eq(true)
  })
  it('测试 justify-space-around ', () => {
    const wrapper = shallowMount(zchRow, {
      propsData: {
        justify: 'space-around'
      }
    })
    const hasJustifyContent = wrapper.classes().includes('is-justify-space-around')
    expect(hasJustifyContent).to.eq(true)
  })
  it('测试 justify-space-between ', () => {
    const wrapper = shallowMount(zchRow, {
      propsData: {
        justify: 'space-between'
      }
    })
    const hasJustifyContent = wrapper.classes().includes('is-justify-space-between')
    expect(hasJustifyContent).to.eq(true)
  })
})