<template>
  <label class="zchRadio" :class="[disabled && 'disabled']" role="radio">
    <span class="zchRadio-radioWrapper">
      <input
        class="zchRadio-radio"
        :disabled="disabled"
        :value="label"
        type="radio"
        :name="name"
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
.zchRadio {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>