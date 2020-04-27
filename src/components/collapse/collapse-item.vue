<template>
  <div class="zch-collapse-item" :data-name="name">
    <div class="zch-collapse-item-title-wrapper" @click="handleClick" :class="[disabled && 'disabled']">
      <div class="zch-collapse-item-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <zch-icon icon="rightArrow" :class="{ active: contentVisible }"></zch-icon>
    </div>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <div v-show="contentVisible" class="zch-collapse-item-content" :class="{ active: contentVisible }">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import ZchIcon from '../icon'
import Velocity from 'velocity-animate'

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
      return this.collapse && this.collapse.activeItems.indexOf(this.name) >= 0
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      this.collapse && this.collapse.$emit('item-click', this)
    },
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(-100%)'
    },
    enter (el, done) {
      Velocity(el, { opacity: 1, transform: 'translateY(0)' }, { duration: 300 })
    },
    leave (el, done) {
      Velocity(el, {
        transform: 'translateY(-100%)',
        opacity: 0
      }, { complete: done })
    }
  }
}
</script>

<style lang="scss" scoped>
.zch-collapse-item {
  color: #303133;
  border-bottom: 1px solid #ebeef5;
  &-title-wrapper {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px 0;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
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