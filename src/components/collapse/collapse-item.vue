<template>
  <div class="zch-collapse-item">
    <div class="zch-collapse-item-title" @click="handleClick" :class="[disabled && 'disabled']">
      <slot name="title">{{ title }}</slot>
      <zch-icon icon="rightArrow" :class="{ active: contentVisible }"></zch-icon>
    </div>
    <transition name="fade">
      <div v-show="contentVisible" class="zch-collapse-item-content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import ZchIcon from '../icon'

export default {
  name: 'ZchCollapseItem',
  components: { ZchIcon },
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
      if (this.disabled) return
      this.collapse && this.collapse.$emit('item-click', this)
    },
  }
}
</script>

<style lang="scss" scoped>
// .fade-enter-active, .fade-leave-active {
//   transition: all .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   height: 0;
// }
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
      color: #c8c9cc;
      cursor: not-allowed;
    }
    > svg {
      margin-left: auto;
      fill: #969799;
      font-size: 12px;
      transition: all .3s;
      &.active {
        transform: rotate(90deg);
      }
    }
  }
  &-content {
    border-top: 1px solid #ebeef5;
    padding: 16px 0;
  }
}
</style>