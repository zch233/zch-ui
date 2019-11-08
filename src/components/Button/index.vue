<template>
  <button class="zch-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    
  }
}
</script>

<style lang="scss" scoped>
$fontColor: #606266;
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
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
</style>