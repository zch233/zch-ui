import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchLayout from '@/components/layout'
chai.use(sinonChai)

describe('zchLayout', () => {
  it('存在', () => {
    expect(zchLayout).to.be.exist
  })
  it('测试 direction ', () => {
    const wrapper = shallowMount(zchLayout, {
      propsData: {
        direction: 'vertical'
      }
    })
    const directionClassList = wrapper.classes()
    expect(directionClassList.includes('is-vertical')).to.eq(true)
  })
})