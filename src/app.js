import Vue from 'vue'
import zchButton from './components/button'
import zchButtonGroup from './components/button-group'

Vue.component('zch-button', zchButton)
Vue.component('zch-button-group', zchButtonGroup)

new Vue({
  el: '#app'
})
