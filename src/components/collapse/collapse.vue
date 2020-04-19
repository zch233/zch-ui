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
      type: [Array, Number, String],
      default: [],
    },
    accordion: Boolean,
  },
  data () {
    return {
      activeItems: [],
    }
  },
  watch: {
    value: {
      immediate: true,
      handler () {
        console.log(this.value)
        this.activeItems = [].concat(this.value)
      }
    }
  },
  provide () {
    return {
      collapse: this,
    }
  },
  mounted () {
    this.$on('item-click', vm => {
      let activeItems = this.activeItems.slice(0);
      if (this.accordion) {
        activeItems = [vm.name]
      } else {
        let index = activeItems.indexOf(vm.name);
        if (index > -1) {
          activeItems.splice(index, 1);
        } else {
          activeItems.push(vm.name);
        }
      }
      this.$emit('input', activeItems)
      this.$emit('change', activeItems)
    })
  },
}
</script>
