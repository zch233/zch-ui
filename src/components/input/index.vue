<template>
  <div class="zch-input-wrapper">
    <input
      class="zch-input"
      ref="zchInput"
      :class="[disabled && 'disabled', readonly && 'readonly']"
      @keydown="$emit('keydown', $event.target.value)"
      @keyup="$emit('keyup', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @fucus="$emit('fucus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :type="isPassword">
      <zch-icon v-if="password" class="password" icon="eye" @click="switchPasswordVisible"></zch-icon>
  </div>
</template>

<script>
import ZchIcon from '../icon'

export default {
  name: 'ZchInput',
  components: { ZchIcon },
  props: {
    type: {
      type: String,
      default: 'text',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false
    },
    placeholder: {
      type: String,
      default: '请输入内容',
      required: false
    },
    value: {
      type: String,
      default: '',
      required: false
    },
    password: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      passwordVisible: false
    }
  },
  computed: {
    isPassword() {
      return this.password ? ( this.passwordVisible ? 'text' : 'password' ) : this.type
    }
  },
  methods: {
    getInputElement() {
      return this.$refs.zchInput || this.$refs.zchTextarea
    },
    switchPasswordVisible (e) {
      this.passwordVisible = !this.passwordVisible
    },
    x() {
      console.log('compositionstart')
    },
    xx() {
      console.log('compositionupdate')
    },
    xxx() {
      console.log('compositionend')
    },
    xxxx() {
      console.log('input')
    },
    xxxxx() {
      console.log('keydown')
    },
    xxxxxx() {
     console.log('keyup')
    },
    xxxxxxx() {
     console.log('keypress')
    }  
  }
}
</script>

<style lang="scss" scoped>
.zch-input-wrapper {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .zch-input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 2.9em;
    line-height: 2.9em;
    outline: none;
    padding: 0 15px;
    transition: all .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    &:hover {
      border-color: #c0c4cc;
    }
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.readonly {
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: auto;
    }
  }
  > .password {
    position: absolute;
    right: .4em;
    top: 50%;
    transform: translateY(-50%);
    color: #c0c4cc;
    transition: all .3s;
    cursor: pointer;
    font-size: 1.2em;
    user-select: none;
    &:hover {
      fill: #909399;
    }
  }
}
</style>