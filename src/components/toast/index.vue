<template>
  <div class="zchToast-wrapper" :class="[`zchToast-wrapper-${position}`, `zchToast-wrapper-${type}`]">
    <p class="zchToast-content">{{ message }}</p>
    <zch-icon @click="close" icon="close"></zch-icon>
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
    type: String,
    position: {
      default: 'top',
      type: String,
    },
    duration: {
      default: 2000,
      type: Number,
    },
  },
  methods: {
    close () {
      this.$el.remove()
      this.$destroy()
      this.beforeClose && this.beforeClose()
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
.zchToast {
  line-height: 1;
  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    overflow: hidden;
    background-color: rgba(50, 50, 51, 0.88);
    padding: 15px 15px 15px 20px;
    color: #fff;
    font-size: 14px;
    border: 1px solid rgba(50, 50, 51, 0.88);
    min-width: 30em;
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
  }
  &-content {
    margin: 0;
  }
}
</style>