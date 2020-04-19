<template>
  <div class="zch-collapse-item">
    <div class="zch-collapse-item-title" @click="handleClick" :class="[disabled && 'disabled']">
      <slot name="title">{{ title }}</slot>
    </div>
    <div v-show="contentVisible" class="zch-collapse-item-content">
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
  },
  inject: ['collapse'],
  computed: {
    contentVisible () {
      return this.collapse.activeItems.indexOf(this.name) >= 0
    }
  },
  methods: {
    handleClick () {
      console.log(this.activeItems, 'click')
      this.collapse && this.collapse.$emit('item-click', this)
    },
  }
}
</script>

<style lang="scss" scoped>
.zch-collapse-item {
  color: #303133;
  border-bottom: 1px solid #ebeef5;
  &-title {
    display: flex;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 0;
    &.disabled {
      pointer-events: none;
      color: #c8c9cc;
      cursor: not-allowed;
    }
  }
  &-content {
    border-top: 1px solid #ebeef5;
    padding: 16px 0;
  }
}
</style>