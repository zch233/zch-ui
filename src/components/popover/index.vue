<template>
  <div class="zchPopover">
    <div ref="popoverContent" class="zchPopover-popoverWrapper" v-if="popover">
      <div class="zchPopover-popover">
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
          const { width: popoverContentWidth } = this.$refs.popoverContent.getBoundingClientRect()
          this.$refs.popoverContent.style.top = top + scrollY + 'px'
          this.$refs.popoverContent.style.left = left + scrollX - (popoverContentWidth - width) / 2 + 'px'
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
.zchPopover {
  &-popoverWrapper {
    position: absolute;
    transform: translateY(-100%);
    padding-bottom: 14px;
    min-width: 177px;
    filter: drop-shadow(0 2px 9px rgba(0,0,0,.1));
  }
  &-popover {
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 2px;
    font-size: 14px;
    &-title {
      padding: 5px 16px 4px;
      color: rgba(0,0,0,.85);
      font-weight: 500;
      border-bottom: 1px solid #f0f0f0;
    }
    &-content {
      padding: 12px 16px;
      color: rgba(0,0,0,.65);
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        border: 7px solid transparent;
        border-top-color: #ddd;
      }
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: calc(100% - 1.3px);
        transform: translateX(-50%);
        border: 7px solid transparent;
        border-top-color: #fff;
      }
    }
  }
}
.userContentWrapper {
  display: inline-block;
}
</style>