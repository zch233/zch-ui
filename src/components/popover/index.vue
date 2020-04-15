<template>
  <div class="zchPopover">
    <div ref="popoverContent" class="zchPopover-popoverWrapper" :class="`zchPopover-popoverWrapper-${position}`" v-if="popover">
      <div class="zchPopover-popover" :class="`zchPopover-popover-${position}-arrow`">
        <div class="zchPopover-popover-title" v-show="$slots.title">
          <slot name="title"></slot>
        </div>
        <div class="zchPopover-popover-content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div ref="userContent" class="userContentWrapper" @click="handleClick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZchPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'left', 'bottom', 'right'].indexOf(value) >= 0
      }
    },
  },
  data () {
    return {
      popover: false,
    }
  },
  mounted () {
    console.log(this)
  },
  methods: {
    openPoppver () {
      console.log('show')
      this.popover = true
    },
    closePoppver () {
      console.log('hide')
      this.popover = false
      document.removeEventListener('click', this.clickDocument)
    },
    clickDocument (e) {
      console.log(this.$refs.userContent.contains(e.target))
      console.log(this.$refs.popoverContent.contains(e.target))
      if (this.$refs.userContent.contains(e.target)) return
      if (this.$refs.popoverContent.contains(e.target)) return
      this.closePoppver()
    },
    handleClick () {
      if (this.popover) {
        this.closePoppver()
      } else {
        this.openPoppver()
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.popoverContent)
          const { left, top, width, height } = this.$refs.userContent.getBoundingClientRect()
          const { width: popoverContentWidth, height: popoverContentHeight } = this.$refs.popoverContent.getBoundingClientRect()
          if (this.position === 'top') {
            this.$refs.popoverContent.style.top = top + scrollY + 'px'
            this.$refs.popoverContent.style.left = left + scrollX - (popoverContentWidth - width) / 2 + 'px'
          } else if (this.position === 'left') {
            this.$refs.popoverContent.style.top = top + scrollY - (popoverContentHeight - height) / 2 + 'px'
            this.$refs.popoverContent.style.left = left + scrollX + 'px'
          } else if (this.position === 'bottom') {
            this.$refs.popoverContent.style.top = top + scrollY + height + 'px'
            this.$refs.popoverContent.style.left = left + scrollX - (popoverContentWidth - width) / 2 + 'px'
          } else if (this.position === 'right') {
            this.$refs.popoverContent.style.top = top + scrollY - (popoverContentHeight - height) / 2 + 'px'
            this.$refs.popoverContent.style.left = left + scrollX + width + 'px'
          }
          setTimeout(() => {
            document.addEventListener('click', this.clickDocument)
          })
        })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
$gap: 14px;
.zchPopover {
  display: inline-block;
  &-popoverWrapper {
    position: absolute;
    min-width: 177px;
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
      border: 7px solid transparent;
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
        top: calc(100% - 1.3px);
        border-top-color: #fff;
      }
    }
    &-left-arrow {
      &::before {
        left: 100%;
        border-left-color: #ddd;
      }
      &::after {
        left: calc(100% - 1.3px);
        border-left-color: #fff;
      }
    }
    &-bottom-arrow {
      &::before {
        bottom: 100%;
        border-bottom-color: #ddd;
      }
      &::after {
        bottom: calc(100% - 1.3px);
        border-bottom-color: #fff;
      }
    }
    &-right-arrow {
      &::before {
        right: 100%;
        border-right-color: #ddd;
      }
      &::after {
        right: calc(100% - 1.3px);
        border-right-color: #fff;
      }
    }
    &-title {
      padding: 5px 16px 4px;
      color: rgba(0,0,0,.85);
      font-weight: 500;
      border-bottom: 1px solid #f0f0f0;
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