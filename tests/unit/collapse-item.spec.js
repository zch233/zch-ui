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
  // it('测试 title ', () => {
  //   const title = 'zch233'
  //   const vm = new Constructor({
  //     propsData: {
  //       title
  //     }
  //   }).$mount()
  //   const titleElement = vm.$el.querySelector('.zch-collapse-item-title')
  //   expect(titleElement.innerHTML).to.eq(title)
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
  // it('测试 name ', () => {
  //   const name = 'zch233'
  //   const vm = new Constructor({
  //     propsData: {
  //       name
  //     }
  //   }).$mount()
  //   expect(vm.$el.getAttribute('data-name')).to.eq(name)
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
  // it('测试 disabled ', () => {
  //   const vm = new Constructor({
  //     propsData: {
  //       disabled: true,
  //     }
  //   }).$mount()
  //   const titleElement = vm.$el.querySelector('.zch-collapse-item-title-wrapper')
  //   expect(titleElement.classList.contains('disabled')).to.eq(true)
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
})