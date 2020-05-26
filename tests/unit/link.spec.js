import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import zchLink from '@/components/link'
chai.use(sinonChai)

describe('zchLink', () => {
  it('存在', () => {
    expect(zchLink).to.be.exist
  })
})