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
};
</script>

<style lang="scss" scoped>

</style>