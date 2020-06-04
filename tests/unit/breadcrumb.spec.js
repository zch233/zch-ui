import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import ZchBreadcrumb from '@/components/breadcrumb/breadcrumb'
chai.use(sinonChai)

describe('ZchBreadcrumb', () => {
  it('存在', () => {
    expect(ZchBreadcrumb).to.be.exist
  })
})