import Vue from 'vue'
import loading from './index.vue'

const ToastConstructor = Vue.extend(loading);
const zchLoading = new ToastConstructor({}).$mount()
Vue.directive('loading', {
  bind (el ,binding) {
    console.log('bind')
    const { position } = window.getComputedStyle(el)
    if (position === 'absolute' || position === 'relative') {
      el.style.position = position
    } else {
      el.style.position = 'relative'
    }
    if (binding.value) {
      el.appendChild(zchLoading.$el)
    }
  },
  update: (el, binding) => {
    console.log('update')
    if (binding.value) {
      el.appendChild(zchLoading.$el)
    } else {
      el.removeChild(zchLoading.$el)
    }
    // if (binding.value) {
    //   if (el.loadingElement.parentNode === null) {
    //     el.appendChild(el.loadingElement)
    //   }
    // } else {
    //   if (el === el.loadingElement.parentNode) {
    //     el.removeChild(el.loadingElement)
    //   }
    // }
  },
  unbind: (el) => {
    // if (el.loadingElement.parentNode === el) {
    //   el.removeChild(el.loadingElement)
    // }
    // el.loadingElement = null
  }
})