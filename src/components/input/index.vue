<template>
  <div class="zch-input-wrapper">
    <textarea
      v-if="type === 'textarea'"
      ref="zchTextarea"
      class="zch-textarea"
      :class="[disabled && 'disabled', readonly && 'readonly']"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :aria-label="label"
      v-bind="$attrs"
      @keydown="$emit('keydown', $event.target.value)"
      @keyup="$emit('keyup', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @fucus="$emit('fucus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    ></textarea>
    <input
      v-else
      class="zch-input"
      ref="zchInput"
      :class="[disabled && 'disabled', readonly && 'readonly']"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :type="isPassword"
      :aria-label="label"
      v-bind="$attrs"
      @keydown="$emit('keydown', $event.target.value)"
      @keyup="$emit('keyup', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @fucus="$emit('fucus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    ><zch-icon v-if="password" class="password" icon="eye" @click="switchPasswordVisible"></zch-icon>
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
    password: {
      type: Boolean,
      default: false,
      required: false
    },
    value: [String, Number],
    label: String
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
      this.$nextTick(() => {
        this.getInputElement().focus()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
%theSameStyle {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  color: #606266;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  font-size: inherit;
  vertical-align: middle;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}
%disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
%readonly {
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: auto;
}
%hover {
  border-color: #c0c4cc;
}
%focus {
  outline: none;
  border-color: #409eff;
}

.zch-input-wrapper {
  position: relative;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  .zch-input {
    @extend %theSameStyle;
    -webkit-appearance: none;
    display: inline-block;
    height: 2.9em;
    line-height: 2.9em;
    outline: none;
    padding: 0 15px;
    &:hover {
      @extend %hover;
    }
    &:focus {
      @extend %focus;
    }
    &.disabled {
      @extend %disabled;
    }
    &.readonly {
      @extend %readonly;
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
  .zch-textarea {
    @extend %theSameStyle;
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    &:hover {
      @extend %hover;
    }
    &:focus {
      @extend %focus;
    }
    &.disabled {
      @extend %disabled;
    }
    &.readonly {
      @extend %readonly;
    }
  }
}
</style>