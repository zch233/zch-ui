<template>
  <div :class="['zch-col', `zch-col-${span}`, offset && `zch-col-offset-${offset}`]" :style="style"><slot></slot></div>
</template>

<script>
export default {
  name: 'ZchCol',
  props: {
    span: {
      type: [String, Number],
      default: 24,
      required: false,
    },
    offset: [String, Number]
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
    }
  },
}
</script>


<style lang="scss" scoped>
  .zch-col {
    box-sizing: border-box;
  }
  $class-prefix: zch-col-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: zch-col-offset-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
</style>