import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import ZchRadio from '@/components/radio'
chai.use(sinonChai)

describe('ZchRadio', () => {
  it('存在', () => {
    expect(ZchRadio).to.be.exist
  })
})