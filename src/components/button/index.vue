<template>
  <button class="zch-button xxxx" :disabled="disabled" type="button" :class="[`icon-${iconPosition}`, loading && 'loading', disabled && 'disabled', round && 'round']">
    <zch-icon v-if="loading" icon="loading"></zch-icon>
    <zch-icon v-else :icon="icon"></zch-icon>
    <span><slot /></span>
  </button>
</template>

<script>
import zchIcon from './icon'

export default {
  name: 'ZchButton',
  components: { zchIcon },
  props: {
    iconPosition: {
      require: false,
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    },
    icon: {
      require: false,
      type: String,
      default: ''
    },
    loading: {
      require: false,
      type: Boolean,
      default: false
    },
    disabled: {
      require: false,
      type: Boolean,
      default: false
    },
    round: {
      require: false,
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
$fontColor: #606266;
$iconGap: .2em;
$buttonRadius: 4px;
.zch-button {
  $bgColor: #fff;
  $borderColor: #ddd;
  $fontSize: 14px;
  border: 1px solid $borderColor;
  background-color: $bgColor;
  padding: .86em 1.44em;
  font-size: $fontSize;
  line-height: 1;
  border-radius: $buttonRadius;
  white-space: nowrap;
  transition: all .2s;
  color: $fontColor;
  cursor: pointer;
  display: inline-flex;
  vertical-align: middle;
  position: relative;
  outline: none;
  > svg {
    margin-right: $iconGap;
  }
  &.icon-left {
    svg {
      order: 0;
      margin-right: $iconGap;
      margin-left: 0;
    }
  }
  &.icon-right {
    svg {
      order: 1;
      margin-left: $iconGap;
      margin-right: 0;
    }
  }
  &:hover, &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    z-index: 1;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
    z-index: 1;
  }
  &.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  &.round {
    border-radius: 1.36em;
  }
  &.loading {
    pointer-events: none;
    &::after {
      pointer-events: none;
      content: "";
      position: absolute;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: inherit;
      background-color: hsla(0,0%,100%,.35);
    }
    > svg {
      animation: spin 1s infinite linear;
    }
  }
  @keyframes spin {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }
}
</style>