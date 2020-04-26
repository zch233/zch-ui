<template>
  <div @click="$emit('click', $event)" class="zchTag" :class="[size && `size-${size}`, type && `type-${type}`]" :style="color && customStyle">
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
    $color: #67c23a;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-info {
    $color: #909399;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-warning {
    $color: #e6a23c;
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-danger {
    $color: #f56c6c;
    background-color: #fef0f0;
    border-color: #fde2e2;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-magenta {
    $color: #eb2f96;
    background-color: #fff0f6;
    border-color: #ffadd2;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-red {
    $color: #f5222d;
    background-color: #fff1f0;
    border-color: #ffa39e;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-orange {
    $color: #fa541c;
    background-color: #fff2e8;
    border-color: #ffbb96;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-gold {
    $color: #faad14;
    background: #fffbe6;
    border-color: #ffe58f;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-lime {
    $color: #a0d911;
    background-color: #fcffe6;
    border-color: #eaff8f;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-green {
    $color: #52c41a;
    background-color: #f6ffed;
    border-color: #b7eb8f;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-cyan {
    $color: #13c2c2;
    background-color: #e6fffb;
    border-color: #87e8de;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-blue {
    $color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-geekblue {
    $color: #2f54eb;
    background-color: #f0f5ff;
    border-color: #adc6ff;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
  }
  &.type-purple {
    $color: #722ed1;
    background-color: #f9f0ff;
    border-color: #d3adf7;
    color: $color;
    .zchTag-close {
      fill: $color;
      transition: all .1s;
      &:hover {
        fill: #fff;
        background-color: $color;
      }
    }
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