<template>
  <div class="zchPopover">
    <div ref="popoverContent" class="zchPopover-popover" v-if="popover">
      <slot name="title"></slot>
      <slot name="content"></slot>
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
  &-popover {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.userContentWrapper {
  display: inline-block;
}
</style>