import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchPopover from '@/components/popover'
chai.use(sinonChai)

describe('zchPopover', () => {
  it('存在', () => {
    expect(zchPopover).to.be.exist
  })
  it('接受 title', async () => {
    const title = 'zch'
    const wrapper = shallowMount(zchPopover, {
      slots: {
        default: 'Click'
      },
      propsData: {
        title,
        trigger: 'click',
      }
    })
    wrapper.find('.userContentWrapper').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.zchPopover-popover-title').text()).to.eq(title)
  })
  it('接受 content', async () => {
    const content = 'zch'
    const wrapper = shallowMount(zchPopover, {
      slots: {
        default: 'Click'
      },
      propsData: {
        content,
        trigger: 'click',
      }
    })
    wrapper.find('.userContentWrapper').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.zchPopover-popover-content').text()).to.eq(content)
  })
  it('接受 position', async () => {
    const wrapper = shallowMount(zchPopover, {
      slots: {
        default: 'Click'
      },
      propsData: {
        position: 'left',
        trigger: 'click',
      }
    })
    wrapper.find('.userContentWrapper').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.zchPopover-popoverWrapper').classes().includes('zchPopover-popoverWrapper-left')).to.eq(true)
    expect(wrapper.find('.zchPopover-popover').classes().includes('zchPopover-popover-left-arrow')).to.eq(true)
  })
  it('测试 trigger', async () => {
    const wrapper = shallowMount(zchPopover, {
      slots: {
        default: 'Hover'
      },
      propsData: {
        position: 'left',
      }
    })
    wrapper.find('.userContentWrapper').trigger('mouseenter')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.zchPopover-popover-content')).to.be.exist
  })
  it('测试 click', async () => {
    const wrapper = shallowMount(zchPopover, {
      slots: {
        default: 'Hover'
      },
      propsData: {
        position: 'left',
        trigger: 'click',
      }
    })
    wrapper.find('.userContentWrapper').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.zchPopover-popover-content')).to.be.exist
  })
})
