<template>
  <div v-if="wrapperVisible" ref="zchDialogWrapper" class="zch-dialog-wrapper" :class="[position && `position-${position}`]" @click="wrapperClose">
    <transition :name="`slide-${position}`">
      <div class="zch-dialog" v-show="contentVisible">
        <slot></slot>
        <button @click="close">关闭</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ZchDialog',
  props: {
    value: {
      require: true,
      type: Boolean,
    },
    position: {
      default: 'middle',
      require: false,
      type: String,
      validator (value) {
        return ['middle', 'top', 'right', 'bottom', 'left'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      wrapperVisible: false,
      contentVisible: false,
    }
  },
  watch: {
    value: {
      immediate: true,
      handler () {
        if (this.value) {
          this.wrapperVisible = true
          document.body.style.overflow = 'hidden'
          this.$nextTick(() => {
            this.contentVisible = true
          })
        } else {
          if (!this.wrapperVisible) return
          this.contentVisible = false
          this.$el.addEventListener('transitionend', this.destroyEle)
        }
      }
    },
  },
  methods: {
    destroyEle () {
      this.wrapperVisible = false
      this.$el.removeEventListener('transitionend', this.destroyEle)
      document.body.style.overflow = 'auto'
    },
    wrapperClose (e) {
      if (e.target !== this.$refs.zchDialogWrapper) return
      this.close()
    },
    close () {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .zch-dialog-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
    box-sizing: border-box;
    z-index: 11;
    .zch-dialog {
      background-color: #fff;
      padding: 120px;
      box-sizing: border-box;
    }
  }
  .zch-dialog-wrapper.position-top {
    align-items: flex-start;
    .zch-dialog {
      width: 100%;
    }
  }
  .zch-dialog-wrapper.position-bottom {
    align-items: flex-end;
    .zch-dialog {
      width: 100%;
    }
  }
  .zch-dialog-wrapper.position-left {
    justify-content: flex-start;
    .zch-dialog {
      height: 100vh;
    }
  }
  .zch-dialog-wrapper.position-right {
    justify-content: flex-end;
    .zch-dialog {
      height: 100vh;
    }
  }
  .slide-middle-enter-active, .slide-middle-leave-active {
    transition: all .3s;
  }
  .slide-middle-enter, .slide-middle-leave-to {
    opacity: 0;
    transform: scale(0);
  }
  .slide-top-enter-active, .slide-top-leave-active {
    transition: all .3s;
  }
  .slide-top-enter, .slide-top-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
  .slide-right-enter-active, .slide-right-leave-active {
    transition: all .3s;
  }
  .slide-right-enter, .slide-right-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
  .slide-bottom-enter-active, .slide-bottom-leave-active {
    transition: all .3s;
  }
  .slide-bottom-enter, .slide-bottom-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
  .slide-left-enter-active, .slide-left-leave-active {
    transition: all .3s;
  }
  .slide-left-enter, .slide-left-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
</style>