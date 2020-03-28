import './style.scss'

export default {
  name: 'ZchCol',
  props: {
    span: {
      type: [String, Number],
      default: 24,
      required: false,
    },
    offset: [String, Number],
    tag: {
      type: String,
      default: 'div'
    },
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'ZchRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style () {
      let style = {}
      if (this.gutter) {
        const gutter = this.gutter / 2 + 'px'
        style.paddingLeft = gutter
        style.paddingRight = gutter
      }
      return style
    },
    classList () {
      return [`zch-col-${this.span}`, this.offset && `zch-col-offset-${this.offset}`]
    }
  },
  render(h) {
    return h(this.tag, {
      class: ['zch-col', ...this.classList],
      style: this.style,
    }, this.$slots.default);
  },
}
