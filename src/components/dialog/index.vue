<template>
  <transition name="fade">
    <div v-if="realValue" ref="zchDialogWrapper" class="zch-dialog-wrapper" :class="[position && `position-${position}`]" @click="wrapperClose">
      <div class="zch-dialog ani" v-show="value">
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
    },
    position: String
  },
  data () {
    return {
      realValue: false,
    }
  },
  watch: {
    value () {
      if (this.value) {
        document.body.style.overflow = 'hidden'
        this.$nextTick(() => {
          setTimeout(() => {
            this.realValue = true
          }, 200)
        })
      } else {
        this.realValue = false
        this.$nextTick(() => {
          document.body.style.overflow = 'auto'
        })
      }
    },
  },
  // mounted () {
  //   document.body.style.overflow = 'hidden'
  // },
  // destroyed () {
  //   document.body.style.overflow = 'auto'
  // },
  methods: {
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @keyframes slideBottom {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(0); }
  }
  @keyframes slideTop {
    0% { transform: translateY(100%); }
    100% { transform: translateY(0); }
  }
  @keyframes slideRight {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }
  @keyframes slideLeft {
    0% { transform: translateX(100%); }
    100% { transform: translateX(0); }
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
      animation: slideBottom .3s;
    }
  }
  .zch-dialog-wrapper.position-bottom {
    align-items: flex-end;
    .zch-dialog {
      width: 100%;
      animation: slideTop .3s;
    }
  }
  .zch-dialog-wrapper.position-left {
    justify-content: flex-start;
    .zch-dialog {
      height: 100vh;
      animation: slideRight .3s;
    }
  }
  .zch-dialog-wrapper.position-right {
    justify-content: flex-end;
    .zch-dialog {
      height: 100vh;
      animation: slideLeft .3s;
    }
  }
</style>