const expect = chai.expect;
import Vue from 'vue'
import zchInput from '../src/components/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchInput', () => {
  const Constructor = Vue.extend(zchInput)
  it('存在', () => {
    expect(zchInput).to.be.exist
  })
  it('接受value', () => {
    const vm = new Constructor({
      propsData: {
        value: 'zch'
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('.zch-input')
    const value = inputElement.value
    expect(value).to.eq('zch')
    vm.$el.remove()
    vm.$destroy()
  })
  it('接受aria-label', () => {
    const vm = new Constructor({
      propsData: {
        label: 'zch'
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('.zch-input')
    const ariaLabel = inputElement.getAttribute('aria-label')
    expect(ariaLabel).to.eq('zch')
    vm.$el.remove()
    vm.$destroy()
  })
  it('默认type 为text', () => {
    const vm = new Constructor().$mount()
    const inputElement = vm.$el.querySelector('.zch-input')
    const type = inputElement.getAttribute('type')
    expect(type).to.eq('text')
    vm.$el.remove()
    vm.$destroy()
  })
  it('type 为自定义值', () => {
    const vm = new Constructor({
      propsData: {
        type: 'date'
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('.zch-input')
    const type = inputElement.getAttribute('type')
    expect(type).to.eq('date')
    vm.$el.remove()
    vm.$destroy()
  })
  it('input 为disabled状态', () => {
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('.zch-input')
    const disabled = inputElement.disabled
    const hasClassDisabled = inputElement.classList.contains('disabled')
    expect(disabled).to.eq(true)
    expect(hasClassDisabled).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('input 为readonly状态', () => {
    const vm = new Constructor({
      propsData: {
        readonly: true
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('.zch-input')
    const readonly = inputElement.readOnly
    const hasClassReadonly = inputElement.classList.contains('readonly')
    expect(readonly).to.eq(true)
    expect(hasClassReadonly).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('input 为password状态', () => {
    const vm = new Constructor({
      propsData: {
        password: true
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('.zch-input')
    const useElement = vm.$el.querySelector('use')
    const icon = useElement.getAttribute('xlink:href')
    const type = inputElement.type
    expect(type).to.eq('password')
    expect(icon).to.eq('#icon-eye')
    vm.$el.remove()
    vm.$destroy()
  })
  describe('事件', () => {
    ['keydown', 'keyup', 'input', 'change'].map(eventName => {
      it(`支持 ${eventName} 事件`, () => {
        const callback = sinon.fake()
        const vm = new Constructor({}).$mount()
        vm.$on(eventName, callback)
        const event = new Event(eventName)
        const inputElement = vm.$el.querySelector('.zch-input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.called
      })
    })
  })
})