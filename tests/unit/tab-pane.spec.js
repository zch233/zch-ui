import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import ZchTab from '@/components/tabs/tab'
import ZchTabPane from '@/components/tabs/tab-pane'
chai.use(sinonChai)

describe('ZchTabPane', () => {
  it('存在', () => {
    expect(ZchTabPane).to.be.exist
  })
  it('接受 disabled ', async () => {
    const activeName = 'title1'
    const Component = {
      components: { ZchTab, ZchTabPane },
      data () {
        return { activeName }
      },
      template: `
        <zch-tab v-model="activeName">
          <zch-tab-pane name="title1">1111</zch-tab-pane>
          <zch-tab-pane disabled name="title2">2222</zch-tab-pane>
          <zch-tab-pane name="title3">3333</zch-tab-pane>
        </zch-tab>
      `,
    }
    const wrapper = mount(Component)
    await wrapper.vm.$nextTick()
    const navElement = wrapper.find(`.zchTabNav[data-name="title2"]`)
    expect(navElement.classes().includes('zchTabNav-disabled')).to.eq(true)
  })
})