import Vue from 'vue'
import zchButton from './components/button'
import zchButtonGroup from './components/button-group'
import zchIcon from './components/icon'
import zchInput from './components/input'
import zchRow from './components/row'
import zchCol from './components/col'

Vue.component('zch-button', zchButton)
Vue.component('zch-button-group', zchButtonGroup)
Vue.component('zch-icon', zchIcon)
Vue.component('zch-input', zchInput)
Vue.component('zch-row', zchRow)
Vue.component('zch-col', zchCol)

new Vue({
  el: '#app',
  data() {
    return {
      message: '',
      password: ''
    }
  },
  methods: {
    input(e) {
      console.log(e)
    }
  }
})
