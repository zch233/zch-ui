<template>
  <button class="zch-button" :class="`icon-${iconPosition}`">
    <zch-icon :icon="icon"></zch-icon>
    <span><slot /></span>
  </button>
</template>

<script>
import zchIcon from '../icon'

export default {
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
      default: 'default'
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
  outline: none;
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
    position: relative;
    z-index: 1;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
    position: relative;
    z-index: 1;
  }
  > svg {
    margin-right: $iconGap;
  }
}
</style>