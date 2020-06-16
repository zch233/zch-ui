import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchInput from '@/components/input'
chai.use(sinonChai)

describe('zchInput', () => {
  it('存在', () => {
    expect(zchInput).to.be.exist
  })
  it('接受 value', () => {
    const value = 'zch'
    const wrapper = shallowMount(zchInput, {
      propsData: {
        value
      }
    })
    expect(wrapper.find('.zch-input').element.value).to.eq(value)
  })
  it('接受 aria-label', () => {
    const label = 'zch'
    const wrapper = shallowMount(zchInput, {
      propsData: {
        label
      }
    })
    expect(wrapper.find('.zch-input').attributes('aria-label')).to.eq(label)
  })
  it('默认 type 为 text', () => {
    const wrapper = shallowMount(zchInput)
    expect(wrapper.find('.zch-input').attributes('type')).to.eq('text')
  })
  it('type 为自定义值', () => {
    const type = 'date'
    const wrapper = shallowMount(zchInput, {
      propsData: {
        type
      }
    })
    expect(wrapper.find('.zch-input').attributes('type')).to.eq(type)
  })
  it('input 为 disabled 状态', () => {
    const wrapper = shallowMount(zchInput, {
      propsData: {
        disabled: true
      }
    })
    const inputElement = wrapper.find('.zch-input')
    const disabled = inputElement.attributes('disabled')
    const hasClassDisabled = inputElement.classes().includes('disabled')
    expect(disabled).to.eq('disabled')
    expect(hasClassDisabled).to.eq(true)
  })
  it('input 为 readonly 状态', () => {
    const wrapper = shallowMount(zchInput, {
      propsData: {
        readonly: true
      }
    })
    const inputElement = wrapper.find('.zch-input')
    const readonly = inputElement.attributes('readonly')
    const hasClassReadonly = inputElement.classes().includes('readonly')
    expect(readonly).to.eq('readonly')
    expect(hasClassReadonly).to.eq(true)
  })
  it('input 为 password 状态', () => {
    const wrapper = mount(zchInput, {
      propsData: {
        password: true
      }
    })
    const inputElement = wrapper.find('.zch-input')
    const useElement = wrapper.find('use')
    const icon = useElement.attributes('href')
    const type = inputElement.attributes('type')
    expect(type).to.eq('password')
    expect(icon).to.eq('#icon-eye')
  })
  it('input 为 clearable 状态', async () => {
    const wrapper = mount({
      data () {
        return { values: 'zch' }
      },
      template: '<zch-input v-model="values" clearable></zch-input>',
      components: { zchInput }
    })
    const inputElement = wrapper.find('.zch-input')
    const iconElement = wrapper.find('use')
    expect(inputElement.element.value).to.eq('zch')
    expect(iconElement.attributes('href')).to.eq('#icon-clear')
    iconElement.trigger('click')
    await await wrapper.vm.$nextTick()
    expect(inputElement.element.value).to.eq('')
  })
  describe('事件', () => {
    const wrapper = mount(zchInput);
    const inputElement = wrapper.find('.zch-input');
    ['click', 'keydown', 'keyup', 'input', 'change', 'focus', 'blur'].map(eventName => {
      it(`支持 ${eventName} 事件`, () => {
        const callback = sinon.fake()
        wrapper.vm.$on(eventName, callback)
        inputElement.element.value = 'zch'
        inputElement.trigger(eventName)
        expect(callback).to.have.been.called.calledWith('zch')
      })
    })
  })
})