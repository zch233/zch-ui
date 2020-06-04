<template>
  <div class="zchBreadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZchBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  provide() {
    return {
      separator: this.separator
    };
  },
}
</script>

<style lang="scss" scoped>
  .zchBreadcrumb {
    display: flex;
  }
</style>