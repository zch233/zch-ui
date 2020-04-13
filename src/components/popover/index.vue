<template>
  <div class="zchPopover">
    <div ref="popover" class="zchPopover-popover" v-if="popover">1</div>
    <div class="contentWrapper" @click="handleClick">
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
      this.popover = true
    },
    closePoppver () {
      this.popover = false
    },
    handleClick () {
      this.openPoppver()
      this.$nextTick(() => {
        document.body.appendChild(this.$refs.popover)
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.zchPopover {
  &-popover {
    position: absolute;
  }
}
.contentWrapper {
  display: inline-block;
}
</style>