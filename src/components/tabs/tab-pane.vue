<template>
  <div class="zchTabPane" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZchTabPane',
  props: {
    label: [String, Number],
    labelEnabledHtml: Boolean,
    disabled: Boolean,
    name: {
      require: true,
      type: [String, Number],
    },
  },
  inject: ['eventBus'],
  data () {
    return {
      active: false,
    }
  },
  created () {
    this.eventBus && this.eventBus.$on('click', value => {
      this.active = value === this.name
    })
  },
}
</script>


<style lang="scss" scoped>

</style>