<template>
  <div class="zch-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZchRadioGroup",
  props: {
    disabled: Boolean,
    value: String | Number | Boolean,
  },
  mounted () {
    console.log(this)
    console.log(this.$children.filter(v => v.$options.name === 'ZchRadio'))
  }
};
</script>

<style lang="scss" scoped>

</style>