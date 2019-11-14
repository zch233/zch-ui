<template>
  <div class="zch-input">
    <input type="text">
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>