import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchCollapse from '@/components/collapse/collapse'
import zchCollapseItem from '@/components/collapse/collapse-item'
chai.use(sinonChai)

describe('zchCollapse', () => {
  it('存在', () => {
    expect(zchCollapse).to.be.exist
  })
  it('接受 v-model ', () => {
    const activeName = 'title1'
    const Component = {
      components: { zchCollapse, zchCollapseItem },
      template: `
        <zch-collapse v-model="activeName">
          <zch-collapse-item title="title1" name="title1">
            内容111
          </zch-collapse-item>
          <zch-collapse-item title="title2" name="title2">
            内容222
          </zch-collapse-item>
        </zch-collapse>
      `,
      data() {
        return {
          activeName,
        }
      }
    }
    const wrapper = mount(Component)
    const contentElement = wrapper.find(`.zch-collapse-item[data-name="${activeName}"] .zch-collapse-item-content`)
    expect(contentElement.classes().includes('active')).to.eq(true)
  })
  it('没有 accordion ', async () => {
    const Component = {
      components: { zchCollapse, zchCollapseItem },
      template: `
        <zch-collapse v-model="activeName">
          <zch-collapse-item title="title1" name="title1">
            内容111
          </zch-collapse-item>
          <zch-collapse-item title="title2" name="title2">
            内容222
          </zch-collapse-item>
          <zch-collapse-item title="title3" name="title3">
            内容333
          </zch-collapse-item>
        </zch-collapse>
      `,
      data() {
        return {
          activeName: [],
        }
      }
    }
    const wrapper = mount(Component)
    const domList = wrapper.findAll('.zch-collapse-item-title-wrapper')
    for (let i=0;i<domList.length;i++) {
      await domList.at(i).trigger('click')
    }
    const activeDomList = wrapper.vm.$el.querySelectorAll('.zch-collapse-item-content.active')
    expect(domList.length).to.eq(activeDomList.length)
  })
  it('接受 accordion ', async () => {
    const Component = {
      components: { zchCollapse, zchCollapseItem },
      template: `
        <zch-collapse v-model="activeName" accordion>
          <zch-collapse-item title="title1" name="title1">
            内容111
          </zch-collapse-item>
          <zch-collapse-item title="title2" name="title2">
            内容222
          </zch-collapse-item>
          <zch-collapse-item title="title3" name="title3">
            内容333
          </zch-collapse-item>
        </zch-collapse>
      `,
      data() {
        return {
          activeName: [],
        }
      }
    }
    const wrapper = mount(Component)
    const domList = wrapper.findAll('.zch-collapse-item-title-wrapper')
    for (let i=0;i<domList.length;i++) {
      await domList.at(i).trigger('click')
    }
    const activeDomList = wrapper.vm.$el.querySelectorAll('.zch-collapse-item-content.active')
    expect(activeDomList.length).to.eq(1)
  })
})