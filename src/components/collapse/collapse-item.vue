<template>
  <div class="zch-collapse-item">
    <div class="zch-collapse-item-title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="zch-collapse-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZchCollapseItem',
  props: {
    title: String,
    name: {
      type: [String, Number],
      required: true,
    },
    disabled: Boolean,
  }
}
</script>

<style lang="scss" scoped>

</style>