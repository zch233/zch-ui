import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import ZchBreadcrumb from '@/components/breadcrumb/breadcrumb'
import ZchBreadcrumbItem from '@/components/breadcrumb/breadcrumb-item'
chai.use(sinonChai)

describe('ZchBreadcrumb', () => {
  it('存在', () => {
    expect(ZchBreadcrumb).to.be.exist
  })
  it('接受 separator ', async () => {
    const separator = '/'
    const Component = {
      components: { ZchBreadcrumb, ZchBreadcrumbItem },
      template: `
        <zch-breadcrumb separator="${separator}">
          <zch-breadcrumb-item to="/home">首页</zch-breadcrumb-item>
          <zch-breadcrumb-item><a href="/">活动管理</a></zch-breadcrumb-item>
          <zch-breadcrumb-item>活动列表</zch-breadcrumb-item>
          <zch-breadcrumb-item>活动详情</zch-breadcrumb-item>
        </zch-breadcrumb>
      `,
    }
    const wrapper = mount(Component)
    const separatorElement = wrapper.find(`.separator`)
    expect(separatorElement.text()).to.eq(separator)
  })
})