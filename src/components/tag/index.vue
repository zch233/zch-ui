<template>
  <div @click="xxx" class="zchTag" :class="[size && `size-${size}`, type && `type-${type}`]" :style="color && customStyle">
    <zch-icon v-if="icon" class="zchTag-preIcon" :icon="icon"></zch-icon>
    <div class="zchTag-content"><slot></slot></div>
    <zch-icon @click.stop="$emit('close', $event)" v-if="closeable" class="zchTag-close" icon="close"></zch-icon>
  </div>
</template>

<script>
import zchIcon from '../icon'

export default {
  name: 'ZchTag',
  components: { zchIcon },
  props: {
    icon: String,
    color: String,
    type: String,
    size: String,
    closeable: Boolean,
  },
  computed: {
    customStyle () {
      const color = this.color
      return `background-color: ${color}; border-color: ${color}; color: #fff;`
    },
  },
  methods: {
    xxx () {
      console.log(111)
      this.$emit('click', this.$event)
    }
  }
}
</script>


<style lang="scss" scoped>
.zchTag {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  color: #409eff;
  background-color: #ecf5ff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: default;
  transition: all .3s;
  font-size: 12px;
  padding: 2px 8px;
  &:hover {
    opacity: .85;
  }
  &.size-large {
    font-size: 16px;
    padding: 3px 10px;
  }
  &.size-mini {
    font-size: 10px;
    padding: 0 5px;
  }
  &.type-success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
  }
  &.type-info {
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
  }
  &.type-warning {
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
  }
  &.type-danger {
    background-color: #fef0f0;
    border-color: #fde2e2;
    color: #f56c6c;
  }
  &.color-magenta {
    color: #eb2f96;
    background: #fff0f6;
    border-color: #ffadd2;
  }
  &.color-red {
    color: #f5222d;
    background: #fff1f0;
    border-color: #ffa39e;
  }
  &.color-orange {
    color: #fa541c;
    background: #fff2e8;
    border-color: #ffbb96;
  }
  &.color-gold {
    color: #faad14;
    background: #fffbe6;
    border-color: #ffe58f;
  }
  &.color-lime {
    color: #a0d911;
    background: #fcffe6;
    border-color: #eaff8f;
  }
  &.color-green {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
  &.color-cyan {
    color: #13c2c2;
    background: #e6fffb;
    border-color: #87e8de;
  }
  &.color-blue {
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
  }
  &.color-geekblue {
    color: #2f54eb;
    background: #f0f5ff;
    border-color: #adc6ff;
  }
  &.color-purple {
    color: #722ed1;
    background: #f9f0ff;
    border-color: #d3adf7;
  }
  &-preIcon {
    font-size: 1.2em;
    margin-right: 3px;
    fill: #fff;
  }
  &-content {
    line-height: 1.8;
    white-space: nowrap;
  }
  &-close {
    margin-left: 6px;
    font-size: .6em;
    fill: #409eff;
    border-radius: 50%;
    padding: 3px;
    cursor: pointer;
    transition: all .1s;
    &:hover {
      fill: #fff;
      background-color: #409eff;
    }
  }
}
</style>