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
      class: [ 'zch-row' ],
      style: this.style,
    }, this.$slots.default);
  }
}
