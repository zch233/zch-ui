<template>
  <div class="zch-input">
    <input
      @input="$emit('input', $event.target.value)"
      @fucus="$emit('fucus', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      :value="value"
      :type="type">
  </div>
</template>

<script>
export default {
  name: 'ZchInput',
  props: {
    type: {
      type: String,
      default: 'text',
      required: false
    },
    value: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>