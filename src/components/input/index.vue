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
    <div :class="{'zch-input-group': $slots.prepend || $slots.append}" v-else>
      <div class="zch-input-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        class="zch-input"
        ref="zchInput"
        :class="[disabled && 'disabled', readonly && 'readonly', $slots.prepend && 'prepend', $slots.append && 'append']"
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
        @focus="$emit('focus', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
      >
      <zch-icon v-if="clearable && value.length > 0" class="icon clear" icon="clear" @mousedown.prevent @click="clear"></zch-icon>
      <zch-icon v-if="password" class="icon password" icon="eye" @click="switchPasswordVisible"></zch-icon>
      <div class="zch-input-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </div>
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
    label: String,
    clearable: Boolean,
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
    },
    clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
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
    &.prepend {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &.append {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  .icon {
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    color: #c0c4cc;
    transition: all .3s;
    font-size: 1.2em;
    user-select: none;
    &:hover {
      fill: #909399;
    }
  }
  .password {
    right: .4em;
  }
  .clear {
    right: .4em;
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
  .zch-input-group {
    display: flex;
    .zch-input-prepend, .zch-input-append {
      background-color: #f5f7fa;
      color: #909399;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      padding: 0 20px;
      white-space: nowrap;
      display: flex;
      align-items: center;
    }
    .zch-input-prepend {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .zch-input-append {
      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>