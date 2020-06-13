<template>
  <label class="zchRadio" :class="[label === model && 'checked', disabled && 'disabled']" role="radio">
    <span class="zchRadio-radioWrapper">
      <input
        class="zchRadio-radio"
        :disabled="disabled"
        :value="label"
        type="radio"
        @change="handleChange"
        v-model="model"
        :name="name"
      >
    </span>
    <span class="zchRadio-textWrapper"><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'ZchRadio',
  props: {
    label: String | Number,
    disabled: Boolean,
    name: String,
    value: String | Number | Boolean,
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.zchRadio {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 30px;
  &.checked {
    color: #409eff;
    .zchRadio-radioWrapper {
      border-color: #409eff;
      background-color: #409eff;
      &::after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  &.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    .zchRadio-radioWrapper {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      cursor: not-allowed;
      &::after {
        background-color: #c0c4cc;
      }
    }
  }
  &-radioWrapper {
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    &::after {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%) scale(0);
      transition: transform .15s ease-in;
    }
  }
  &-radio {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }
  &-textWrapper {
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>