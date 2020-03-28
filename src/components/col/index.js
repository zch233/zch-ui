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
    phone: [String, Number, Object],
    pad: [String, Number, Object],
    narrowPc: [String, Number, Object],
    pc: [String, Number, Object],
    widePc: [String, Number, Object],
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
      const classList = [];
      ['span', 'offset'].map(v => this[v] && classList.push(v === 'span' ? `zch-col-${this[v]}` : `zch-col-${v}-${this[v]}`));
      ['phone', 'pad', 'narrowPc', 'pc', 'widePc'].map(size => {
        if (this[size] === undefined) return
        console.log(this[size])
        if (typeof this[size] === 'object') {
          Object.keys(this[size]).map(v => classList.push(v === 'span' ? `zch-col-${size}-${this[size][v]}` : `zch-col-${size}-${v}-${this[size][v]}`));
        } else {
          classList.push(`zch-col-${size}-${this[size]}`)
        }
      })
      return classList
    }
  },
  render(h) {
    return h(this.tag, {
      class: ['zch-col', ...this.classList],
      style: this.style,
    }, this.$slots.default);
  },
}
