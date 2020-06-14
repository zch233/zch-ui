import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchSwitch from '@/components/switch'
chai.use(sinonChai)

describe('zchSwitch', () => {
  it('存在', () => {
    expect(zchSwitch).to.be.exist
  })
})