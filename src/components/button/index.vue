<template>
  <button
    class="zch-button"
    :class="[`icon-${iconPosition}`, loading && 'loading', disabled && 'disabled', round && 'round', square && 'square', size && `size-${size}`, type && `type-${type}`, circle && 'circle']"
    :disabled="disabled"
    type="button"
    @click="$emit('click', $event)">
    <zch-icon v-if="loading" icon="loading"></zch-icon>
    <zch-icon v-if="icon && !loading" :icon="icon"></zch-icon>
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>
import zchIcon from '../icon'

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
    icon: String,
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
    square: Boolean,
    circle: Boolean,
    size: String,
    type: String,
  },
}
</script>

<style lang="scss" scoped>
$fontColor: #606266;
$iconGap: .2em;
$buttonRadius: 4px;
.zch-button {
  $bgColor: #fff;
  $borderColor: #ddd;
  $fontSize: 12px;
  padding: .9em 1.2em;
  border: 1px solid $borderColor;
  background-color: $bgColor;
  font-size: $fontSize;
  line-height: 1;
  border-radius: $buttonRadius;
  white-space: nowrap;
  transition: all .2s;
  color: $fontColor;
  cursor: pointer;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  position: relative;
  outline: none;
  &.size-mini {
    font-size: 10px;
    padding: .7em .6em;
    &.circle {
      padding: .5em;
    }
  }
  &.size-large {
    font-size: 14px;
    padding: 1.1em 1.6em;
    &.circle {
      padding: .94em;
    }
  }
  &.type-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover, &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    &:active {
      background: #3a8ee6;
      border-color: #3a8ee6;
      color: #fff;
    }
    &.disabled {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
  }
  &.type-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover, &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &:active {
      background: #5daf34;
      border-color: #5daf34;
      color: #fff;
    }
    &.disabled {
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;
    }
  }
  &.type-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover, &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    &:active {
      background: #82848a;
      border-color: #82848a;
      color: #fff;
    }
    &.disabled {
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;
    }
  }
  &.type-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover, &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &:active {
      background: #cf9236;
      border-color: #cf9236;
      color: #fff;
    }
    &.disabled {
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;
    }
  }
  &.type-error {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover, &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &:active {
      background: #dd6161;
      border-color: #dd6161;
      color: #fff;
    }
    &.disabled {
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
    }
  }
  > svg {
    font-size: 1.1em;
  }
  > svg:first-child:last-child {
    margin: 0;
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
  &.square {
    border-radius: 0;
  }
  &.circle {
    border-radius: 50%;
    padding: 0.76em;
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