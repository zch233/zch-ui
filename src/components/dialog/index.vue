<template>
  <transition name="fade">
    <div v-if="value" ref="zchDialogWrapper" class="zch-dialog-wrapper" @click="wrapperClose">
      <div class="zch-dialog">
        <slot></slot>
        <button @click="close">关闭</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ZchDialog',
  props: {
    value: {
      require: true,
      type: Boolean,
    }
  },
  mounted () {
    document.body.style.overflow = 'hidden'
  },
  destroyed () {
    document.body.style.overflow = 'auto'
  },
  methods: {
    wrapperClose (e) {
      const { zchDialogWrapper } = this.$refs
      if (e.target !== zchDialogWrapper) return
      this.$emit('input', false)
    },
    close () {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-10px);
  }
  .zch-dialog-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
    z-index: 11;
    .zch-dialog {
      background-color: #fff;
      padding: 120px;;
    }
  }
</style>