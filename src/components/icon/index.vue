<template>
  <svg
    v-if="icon"
    class="zch-icon"
    aria-hidden="true"
    @click="$emit('click', $event)"
    @mousedown="$emit('mousedown', $event)">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import './svg'

export default {
  name: 'ZchIcon',
  props: {
    icon: {
      type: String,
      required: true,
      default: 'default'
    }
  }
}
</script>


<style lang="scss" scoped>
  .zch-icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>