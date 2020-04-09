import Vue from 'vue'
import zchButton from './components/button'
import zchButtonGroup from './components/button-group'
import zchIcon from './components/icon'
import zchInput from './components/input'
import zchRow from './components/row'
import zchCol from './components/col'
import zchLayout from './components/layout'
import zchHeader from './components/header'
import zchContent from './components/content'
import zchSlide from './components/slide'
import zchFooter from './components/footer'
import zchToast from './components/toast/main.js'

Vue.use(zchToast)
Vue.component('zch-button', zchButton)
Vue.component('zch-button-group', zchButtonGroup)
Vue.component('zch-icon', zchIcon)
Vue.component('zch-input', zchInput)
Vue.component('zch-row', zchRow)
Vue.component('zch-col', zchCol)
Vue.component('zch-layout', zchLayout)
Vue.component('zch-header', zchHeader)
Vue.component('zch-content', zchContent)
Vue.component('zch-slide', zchSlide)
Vue.component('zch-footer', zchFooter)

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
    },
    xxx (position) {
      this.$toast({
        message: '大撒旦撒旦撒多所多所',
        type: 'success',
        position
      })
    }
  },
  created () {
  }
})
