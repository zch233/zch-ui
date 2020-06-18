<template>
  <li class="zch-option" :class="[disabled && 'disabled']" @click="$emit('click', value)">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </li>
</template>

<script>
export default {
  name: 'ZchOption',
  props: {
    value: String | Number | Object,
    label: String | Number,
    disabled: Boolean,
  }
}
</script>

<style lang="scss" scoped>
  .zch-option {
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      background-color: #f5f7fa;
    }
    &.disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
</style>
