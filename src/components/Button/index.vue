<template>
  <button class="zch-button" :class="`icon-${iconPosition}`">
    <zch-icon></zch-icon>
    <span><slot /></span>
  </button>
</template>

<script>
import zchIcon from '../Icon'

export default {
  components: { zchIcon },
  props: {
    iconPosition: {
      require: false,
      type: String,
      default: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
$fontColor: #606266;
$iconGap: .2em;
.zch-button {
  $bgColor: #fff;
  $borderColor: #ddd;
  $fontSize: 14px;
  border: 1px solid $borderColor;
  background-color: $bgColor;
  padding: .86em 1.44em;
  font-size: $fontSize;
  line-height: 1;
  border-radius: 4px;
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
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  > svg {
    margin-right: $iconGap;
  }
}
</style>