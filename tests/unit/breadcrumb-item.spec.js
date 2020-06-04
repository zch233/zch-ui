import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import ZchBreadcrumb from '@/components/breadcrumb/breadcrumb'
import ZchBreadcrumbItem from '@/components/breadcrumb/breadcrumb-item'
chai.use(sinonChai)

describe('ZchBreadcrumbItem', () => {
  it('存在', () => {
    expect(ZchBreadcrumbItem).to.be.exist
  })
  it('接受 to', () => {
    const to = '/home'
    const wrapper = shallowMount(ZchBreadcrumbItem, {
      propsData: {
        to
      }
    })
    const spanClassList = wrapper.find('.inner').classes()
    expect(spanClassList.includes('is-link')).to.eq(true)
  })
  it('click', () => {
    const callback = sinon.fake()
    const wrapper = shallowMount(ZchBreadcrumbItem, {})
    wrapper.vm.$on('click', callback)
    wrapper.find('.inner').trigger('click')
    expect(callback).to.have.been.called
  })
})