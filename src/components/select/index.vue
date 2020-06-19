<template>
  <div class="zch-select">
    <zch-input ref="input" :value="value" readonly @click="handleClick" :placeholder="placeholder"></zch-input>
    <transition name="fade">
      <div ref="optionWrapper" class="zch-select-optionWrapper" v-if="optionVisible">
        <ul class="zch-select-option"><slot></slot></ul>
      </div>
    </transition>
  </div>
</template>

<script>
import ZchInput from '../input'
export default {
  name: 'ZchSelect',
  components: {
    ZchInput,
  },
  props: {
    value: {
      require: true,
      type: Boolean | String | Number,
    },
    placeholder: {
      type: String,
      default: '请选择',
    }
  },
  data () {
    return {
      optionVisible: false,
    }
  },
  methods: {
    handleClick () {
      this.optionVisible = !this.optionVisible
      if (this.optionVisible === true) {
        this.$nextTick(() => {
          this.setPopoverPosition()
          document.body.appendChild(this.$refs.optionWrapper)
        })
      }
    },
    setPopoverPosition () {
      const { width, height, top, left } = this.$refs.input.$el.getBoundingClientRect()
      const { width:optionWidth } = this.$refs.optionWrapper.getBoundingClientRect()
      this.$refs.optionWrapper.style.minWidth = width + 'px'
      this.$refs.optionWrapper.style.top = top + height + scrollY + 12 + 'px'
      this.$refs.optionWrapper.style.left = left + Math.abs(optionWidth > width ? optionWidth : width - width) / 2 + 'px'
    }
  },
}
</script>

<style lang="scss" scoped>
  $gap: 12px;
  $arrowWidth: 1.3px;
  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .zch-select {
    display: inline-block;
    &-optionWrapper {
      position: absolute;
      z-index: 1000;
      filter: drop-shadow(0 2px 9px rgba(0,0,0,.1));
      box-sizing: border-box;
      border: 1px solid #e4e7ed;
      border-radius: 4px;
      background-color: #fff;
    }
    &-option {
      position: relative;
      list-style: none;
      padding: 6px 0;
      margin: 0;
      &::before, &::after {
        content: '';
        position: absolute;
        border: ($gap / 2) solid transparent;
        left: 30%;
      }
      &::before {
        bottom: 100%;
        border-bottom-color: #ddd;
      }
      &::after {
        bottom: calc(100% - #{$arrowWidth});
        border-bottom-color: #fff;
      }
    }
  }
</style>
