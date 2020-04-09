<template>
  <div class="zchToast" :class="[`zchToast-${position}`]">
    <div class="zchToast-wrapper" :class="[`zchToast-wrapper-${position}`, `zchToast-wrapper-${type}`]">
      <p v-if="enabledHTML" class="zchToast-content" v-html="message"></p>
      <p v-else class="zchToast-content" :class="[center && 'zchToast-content-center']">{{ message }}</p>
      <zch-icon class="zchToast-icon" v-if="showClose" @click="close" icon="close"></zch-icon>
    </div>
  </div>
</template>

<script>
import ZchIcon from '../icon'

export default {
  name: 'ZchToast',
  components: { ZchIcon },
  props: {
    message: String,
    beforeClose: Function,
    type: {
      default: 'default',
      type: String,
      validator (value) {
        return ['default', 'success', 'info', 'wraning', 'error'].indexOf(value) >= 0
      }
    },
    showClose: Boolean,
    center: Boolean,
    enabledHTML: Boolean,
    position: {
      default: 'top',
      type: String,
      validator (value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    },
    duration: {
      default: 2000,
      type: Number,
    },
  },
  methods: {
    close () {
      this.beforeClose && this.beforeClose()
      this.$el.remove()
      this.$destroy()
    },
    keydown(e) {
      if (e.keyCode === 27) { // esc关闭消息
        this.close();
      }
    },
    startTimer () {
      if (this.duration !== 0 && this.duration > 0) {
        this.timeId = setTimeout(this.close, this.duration)
      }
    }
  },
  mounted() {
    this.startTimer();
    document.addEventListener('keydown', this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
    clearTimeout(this.timeId)
  },
}
</script>


<style lang="scss" scoped>
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes slide-down {
  0% { opacity: 0; transform: translateY(-100%); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes slide-up {
  0% { opacity: 0; transform: translateY(100%); }
  100% { opacity: 1; transform: translateY(0); }
}
.zchToast {
  line-height: 1;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &-top {
    top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    &:nth-child(n + 1) {
      top: 10px;
    }
  }
  &-bottom {
    bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  &-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    font-size: 14px;
    border: 1px solid rgba(50, 50, 51, 0.88);
    min-width: 30em;
    &-top {
      animation: slide-down .3s;
    }
    &-middle {
      animation: fade-in .3s;
    }
    &-bottom {
      animation: slide-up .3s;
    }
    &-default {
      background-color: rgba(50, 50, 51, 0.88);
      color: #fff;
    }
    &-success {
      background-color: #f0f9eb;
      border-color: #e1f3d8;
      color: #67c23a;
    }
    &-info {
      background-color: #ebeef5;
      border-color: #e1f3d8;
      color: #909399;
    }
    &-error {
      background-color: #fef0f0;
      border-color: #fde2e2;
      color: #f56c6c;
    }
    &-warning {
      background-color: #fdf6ec;
      border-color: #faecd8;
      color: #e6a23c;
    }
  }
  &-content {
    margin: 0;
    flex: 1;
    &-center {
      text-align: center;
    }
  }
}
</style>