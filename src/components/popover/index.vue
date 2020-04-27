<template>
  <div class="zchPopover">
    <transition name="fade">
      <div ref="popoverContent" class="zchPopover-popoverWrapper" :class="`zchPopover-popoverWrapper-${position}`" v-if="_popover">
        <div class="zchPopover-popover" :class="`zchPopover-popover-${position}-arrow`">
          <div class="zchPopover-popover-title" v-show="$slots.title || title">
            <slot name="title">{{ title }}</slot>
          </div>
          <div class="zchPopover-popover-content">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </transition>
    <div ref="userContent" class="userContentWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZchPopover',
  props: {
    value: {
      type: Boolean,
      default: undefined
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'left', 'bottom', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'hover',
      validator (value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    },
    title: String,
  },
  computed: {
    _popover: {
      set (value) {
        if (this.value === undefined) {
          this.popover = value
        } else {
          this.$emit('input', value)
        }
        if (value === false) {
          this.$emit('close', this._popover)
          this.trigger === 'click' && document.removeEventListener('click', this.clickDocument)
        } else {
          setTimeout(() => {
            document.body.appendChild(this.$refs.popoverContent)
            this.setPopoverPosition()
            this.$emit('open', this._popover)
            this.trigger === 'click' && document.addEventListener('click', this.clickDocument)
          })
        }
      },
      get () {
        return this.value === undefined ? this.popover : this.value
      }
    }
  },
  data () {
    return {
      popover: false,
    }
  },
  mounted () {
    if (this.trigger === 'click') {
      this.$refs.userContent.addEventListener('click', this.handleClick)
    } else {
      this.$refs.userContent.addEventListener('mouseenter', this.openPoppver)
      this.$refs.userContent.addEventListener('mouseleave', this.controlClosePoppver)
    }
  },
  destroyed () {
    if (this.trigger === 'click') {
      this.$refs.userContent && this.$refs.userContent.removeEventListener('click', this.openPoppver)
    } else {
      this.$refs.userContent && this.$refs.userContent.removeEventListener('mouseenter', this.openPoppver)
      this.$refs.userContent && this.$refs.userContent.removeEventListener('mouseleave', this.controlClosePoppver)
      this.$refs.popoverContent && this.$refs.popoverContent.removeEventListener('mouseenter', this.clearPopoverContentTimer)
      this.$refs.popoverContent && this.$refs.popoverContent.removeEventListener('mouseleave', this.delayClose)
    }
  },
  methods: {
    openPoppver () {
      if (this._popover === true) return
      this._popover = true
    },
    clearPopoverContentTimer () {
      clearTimeout(this.timerId)
    },
    delayClose () {
      this.timerId = setTimeout(() => (this._popover = false), 200)
    },
    controlClosePoppver () {
      if (this.trigger === 'click') {
        this._popover = false
      } else {
        if (this._popover === false) return
        this.delayClose()
        this.$refs.popoverContent.addEventListener('mouseenter', this.clearPopoverContentTimer)
        this.$refs.popoverContent.addEventListener('mouseleave', this.delayClose)
      }
    },
    clickDocument (e) {
      if (this.value !== undefined) return
      if (this.$refs.userContent.contains(e.target)) return
      if (this.$refs.popoverContent.contains(e.target)) return
      this.controlClosePoppver()
    },
    setPopoverPosition () {
      const { left, top, width, height } = this.$refs.userContent.getBoundingClientRect()
      const { width: popoverContentWidth, height: popoverContentHeight } = this.$refs.popoverContent.getBoundingClientRect()
      const map = {
        top: { top: top + scrollY, left: left + scrollX - (popoverContentWidth - width) / 2 },
        left: { top: top + scrollY - (popoverContentHeight - height) / 2, left: left + scrollX },
        bottom: { top:top + scrollY + height, left: left + scrollX - (popoverContentWidth - width) / 2 },
        right: { top: top + scrollY - (popoverContentHeight - height) / 2, left: left + scrollX + width },
      }
      const position = map[this.position]
      this.$refs.popoverContent.style.top = position.top + 'px'
      this.$refs.popoverContent.style.left = position.left + 'px'
    },
    handleClick () {
      if (this._popover) {
        this.controlClosePoppver()
      } else {
        this.openPoppver()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
$gap: 14px;
$arrowWidth: 1.3px;
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.zchPopover {
  display: inline-block;
  &-popoverWrapper {
    position: absolute;
    z-index: 1000;
    filter: drop-shadow(0 2px 9px rgba(0,0,0,.1));
    &-top {
      transform: translateY(-100%);
      padding-bottom: $gap;
    }
    &-left {
      transform: translateX(-100%);
      padding-right: $gap;
    }
    &-bottom {
      padding-top: $gap;
    }
    &-right {
      padding-left: $gap;
    }
  }
  &-popover {
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 2px;
    font-size: 14px;
    position: relative;
    &::before, &::after {
      content: '';
      position: absolute;
      border: ($gap / 2) solid transparent;
    }
    &-top-arrow, &-bottom-arrow {
      &::before, &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &-left-arrow, &-right-arrow {
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &-top-arrow {
      &::before {
        top: 100%;
        border-top-color: #ddd;
      }
      &::after {
        top: calc(100% - #{$arrowWidth});
        border-top-color: #fff;
      }
    }
    &-left-arrow {
      &::before {
        left: 100%;
        border-left-color: #ddd;
      }
      &::after {
        left: calc(100% - #{$arrowWidth});
        border-left-color: #fff;
      }
    }
    &-bottom-arrow {
      &::before {
        bottom: 100%;
        border-bottom-color: #ddd;
      }
      &::after {
        bottom: calc(100% - #{$arrowWidth});
        border-bottom-color: #fff;
      }
    }
    &-right-arrow {
      &::before {
        right: 100%;
        border-right-color: #ddd;
      }
      &::after {
        right: calc(100% - #{$arrowWidth});
        border-right-color: #fff;
      }
    }
    &-title {
      padding: 5px 16px 4px;
      color: rgba(0,0,0,.85);
      font-weight: 500;
      border-bottom: 1px solid #f0f0f0;
      line-height: 1.5;
    }
    &-content {
      padding: 12px 16px;
      color: rgba(0,0,0,.65);
    }
  }
}
.userContentWrapper {
  display: inline-block;
}
</style>