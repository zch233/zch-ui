<template>
  <div class="zch-switch" :class="[disabled && 'disabled']">
    <div class="zch-switch-leftText" :class="[!active && 'active']" :style="textStyle('left')" v-if="$slots.leftText || leftText" @click="handleClick"><slot name="left-text">{{ leftText }}</slot></div>
    <div class="zch-switch-main" :class="[active && 'active']" :style="mainStyle" @click="handleClick"></div>
    <div class="zch-switch-rightText" :class="[active && 'active']" :style="textStyle('right')" v-if="$slots.rightText || rightText" @click="handleClick"><slot name="right-text">{{ rightText }}</slot></div>
  </div>
</template>

<script>
export default {
  name: 'ZchSwitch',
  props: {
    leftText: String,
    rightText: String,
    activeColor: String,
    inactiveColor: String,
    width: Number | String,
    disabled: Boolean,
    value: Boolean | String | Number,
    activeValue: Boolean | String | Number,
    inactiveValue:  Boolean | String | Number,
  },
  computed: {
    active () {
      if (this.activeValue !== undefined && this.inactiveValue !== undefined) {
        return this.value === this.activeValue ? true : false
      } else {
        return this.value
      }
    },
    reverseValue () {
      if (this.activeValue !== undefined && this.inactiveValue !== undefined) {
        return this.value === this.activeValue ? this.inactiveValue : this.activeValue
      } else {
        return !this.value
      }
    },
    mainStyle () {
      const widthStyles = this.width && `width: ${parseInt(this.width)}px;`
      const color = this.active ? this.activeColor : this.inactiveColor
      const colorStyles = `background-color: ${color}; border-color: ${color}`
      return widthStyles && colorStyles ? widthStyles + colorStyles : (widthStyles || colorStyles)
    }
  },
  methods: {
    textStyle (position) {
      const inactiveStyle = this.inactiveColor && `color: ${this.inactiveColor}`
      const activeStyle = this.activeColor && `color: ${this.activeColor}`
      const map = {
        left: () => this.active ? inactiveStyle : activeStyle,
        right: () => this.active ? activeStyle : inactiveStyle
      }
      return map[position] && map[position]()
    },
    handleClick () {
      if (this.disabled) return
      this.$emit('input', this.reverseValue)
      this.$emit('click', this.reverseValue)
      this.$emit('change', this.reverseValue)
    }
  },
}
</script>

<style lang="scss" scoped>
  $activeColor: rgb(19, 206, 102);
  $disabledColor: #dcdfe6;
  .zch-switch {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    &-leftText, &-rightText {
      transition: .2s;
      display: inline-block;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      vertical-align: middle;
      color: $disabledColor;
      transition: all .3s;
    }
    &-leftText {
      margin-right: .6em;
      &.active {
        color: #303133;
      }
    }
    &-main {
      background-color: $disabledColor;
      border: 1px solid $disabledColor;
      width: 40px;
      height: 20px;
      cursor: pointer;
      border-radius: 20px;
      position: relative;
      box-sizing: border-box;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 1px;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: #fff;
        transition: all .3s;
      }
      &.active {
        border-color: $activeColor;
        background-color: $activeColor;
        &::after {
          left: 100%;
          margin-left: -17px;
        }
      }
    }
    &-rightText {
      margin-left: .6em;
      &.active {
        color: $activeColor;
      }
    }
    &.disabled {
      opacity: .6;
      cursor: not-allowed;
    }
    &.disabled &-main, &.disabled &-leftText, &.disabled &-rightText {
      cursor: not-allowed;
    }
  }
</style>
