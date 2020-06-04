import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import ZchBreadcrumb from '@/components/breadcrumb/breadcrumb'
import ZchBreadcrumbItem from '@/components/breadcrumb/breadcrumb-item'
chai.use(sinonChai)

describe('ZchBreadcrumbItem', () => {
  it('存在', () => {
    expect(ZchBreadcrumbItem).to.be.exist
  })
})