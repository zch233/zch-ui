<script>
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
  mounted () {
    // this.$children.map(vm => {
    //   vm.gutter = this.gutter
    // })
  },
  render(h) {
    return h(this.tag, {
      class: [ 'zch-row' ],
      style: this.style,
    }, this.$slots.default);
  }
}
</script>


<style lang="scss" scoped>
  .zch-row {
    display: flex;
    flex-wrap: wrap;
  }
</style>