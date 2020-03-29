<template>
  <div class="zch-layout" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZchLayout',
  props: {
    direction: String
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      } else if (this.direction === 'horizontal') {
        return false;
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag;
          return tag === 'zch-slide';
        })
        : false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .zch-layout {
    display: flex;
    flex: 1;
    flex-direction: column;
    &.is-vertical {
      flex-direction: row;
    }
  }
</style>