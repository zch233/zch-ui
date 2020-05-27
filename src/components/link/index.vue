<template>
  <div class="zchLink" :data-url="url" :class="[type, underline && 'underline', disabled && 'disabled']" @click="handleClick">
    <span @click="goTo"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'zchLink',
  props: {
    url: String,
    to: String || Object,
    replace: Boolean,
    type: String,
    underline: Boolean,
    disabled: Boolean,
  },
  methods: {
    goTo () {
      if (this.disabled) return
      const URL = this.url
      const TO = this.to
      const router = this.parent && this.parent.$router
      if (TO && router) {
        router[this.replace ? 'replace' : 'push'](TO)
      } else if (URL) {
        this.replace ? window.location.replace(URL) : (window.location.href = URL)
      }
    },
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .zchLink {
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    color: #606266;
    position: relative;
    transition: all .2s;
    &.underline::before {
      content: "";
      transition: all .2s;
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
      border-bottom: 1px solid;
      opacity: 0;
    }
    &:hover {
      $color: #409eff;
      color: $color;
      &::before {
        opacity: 1;
        border-color: $color;
      }
    }
    &.disabled {
      cursor: not-allowed;
      color: #c0c4cc;
      &::before {
        content: none;
      }
    }
    &.primary {
      color: #409eff;
      &:hover {
        $color: #66b1ff;
        color: $color;
        &::before {
          opacity: 1;
          border-color: $color;
        }
      }
      &.disabled {
        color: #a0cfff;
      }
    }
    &.success {
      color: #67c23a;
      &:hover {
        $color: #85ce61;
        color: $color;
        &::before {
          opacity: 1;
          border-color: $color;
        }
      }
      &.disabled {
        color: #b3e19d;
      }
    }
    &.warning {
      color: #e6a23c;
      &:hover {
        $color: #ebb563;
        color: $color;
        &::before {
          opacity: 1;
          border-color: $color;
        }
      }
      &.disabled {
        color: #f3d19e;
      }
    }
    &.danger {
      color: #f56c6c;
      &:hover {
        $color: #f78989;
        color: $color;
        &::before {
          opacity: 1;
          border-color: $color;
        }
      }
      &.disabled {
        color: #fab6b6;
      }
    }
    &.info {
      color: #909399;
      &:hover {
        $color: #a6a9ad;
        color: $color;
        &::before {
          opacity: 1;
          border-color: $color;
        }
      }
      &.disabled {
        color: #c8c9cc;
      }
    }
  }
</style>