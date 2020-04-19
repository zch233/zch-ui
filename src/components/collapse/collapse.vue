<template>
  <div class="zch-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'ZchCollapse',
  props: {
    value: {
      required: true,
      type: [Array, Number, String]
    }
  },
  data () {
    return {
      eventBus: new Vue(),
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
}
</script>

<style lang="scss" scoped>
.zch-collapse {
  display: flex;
  flex-direction: column;
}
</style>