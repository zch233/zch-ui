<template>
  <div class="zchTag">
    <div class="zchTag-content"><slot></slot></div>
    <zch-icon class="zchTag-close" icon="clear"></zch-icon>
  </div>
</template>

<script>
import zchIcon from '../icon'

export default {
  name: 'ZchTag',
  components: { zchIcon },
  props: {
    color: String,
    type: String,
    size: String,
    plain: Boolean,
    closable: Boolean,
  }
}
</script>


<style lang="scss" scoped>
.zchTag {
  display: inline-flex;
  align-items: center;
  &-content {
    padding: 0 10px;
    line-height: 1.4;
    color: #409eff;
    background-color: #ecf5ff;
    border: 1px solid #d9ecff;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
  }
  &-close {
    margin-left: auto;
  }
}
</style>