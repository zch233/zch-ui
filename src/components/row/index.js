import './style.scss'

export default {
  name: 'ZchRow',
  componentName: 'ZchRow',
  props: {
    gutter: [String, Number],
    tag: {
      type: String,
      default: 'div',
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style () {
      let style = {}
      if (this.gutter) {
        const gutter = -this.gutter / 2 + 'px'
        style.marginLeft = gutter
        style.marginRight = gutter
      }
      return style
    }
  },
  render(h) {
    return h(this.tag, {
      class: [ 'zch-row', this.align !== 'top' ? `is-align-${this.align}` : '', this.justify !== 'start' ? `is-justify-${this.justify}` : '' ],
      style: this.style,
    }, this.$slots.default);
  }
}
