<template>
  <label class="zchRadio" :class="[disabled && 'disabled']">
    <span class="zchRadio-radioWrapper">
      <input
        class="zchRadio-radio"
        :value="label"
        type="radio"
        :name="name || 'asdf'"
      >
    </span>
    <span class="zchRadio-textWrapper"><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'ZcRadio',
  props: {
    label: String || Number,
    disabled: Boolean,
    name: String,
    value: String || Number || Boolean,
  },
}
</script>


<style lang="scss" scoped>

</style>