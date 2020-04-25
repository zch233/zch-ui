<template>
  <div>
    <h4>基础用法</h4>
    <div class="block">
      <div>
        <zch-button>默认按钮</zch-button>
        <zch-button type="primary">主要按钮</zch-button>
        <zch-button type="success">成功按钮</zch-button>
        <zch-button type="warning">警告按钮</zch-button>
        <zch-button type="info">信息按钮</zch-button>
        <zch-button type="error">失败按钮</zch-button>
      </div>
      <div>
        <zch-button round>圆角按钮</zch-button>
        <zch-button round type="primary">主要按钮</zch-button>
        <zch-button round type="success">成功按钮</zch-button>
        <zch-button round type="warning">警告按钮</zch-button>
        <zch-button round type="info">信息按钮</zch-button>
        <zch-button round type="error">失败按钮</zch-button>
      </div>
      <div>
        <zch-button circle icon="search"></zch-button>
        <zch-button circle type="info" icon="setting"></zch-button>
        <zch-button circle type="success" icon="star"></zch-button>
        <zch-button circle type="error" icon="delete"></zch-button>
      </div>
      <code-bar :code="code1"></code-bar>
    </div>
    <h4>禁用状态</h4>
    <div class="block">
      <div>
        <zch-button disabled>默认按钮</zch-button>
        <zch-button disabled type="primary">主要按钮</zch-button>
        <zch-button disabled type="success">成功按钮</zch-button>
        <zch-button disabled type="warning">警告按钮</zch-button>
        <zch-button disabled type="info">信息按钮</zch-button>
        <zch-button disabled type="error">失败按钮</zch-button>
      </div>
      <div>
        <zch-button disabled circle icon="search"></zch-button>
        <zch-button disabled circle type="info" icon="setting"></zch-button>
        <zch-button disabled circle type="success" icon="star"></zch-button>
        <zch-button disabled circle type="error" icon="delete"></zch-button>
      </div>
    </div>
    <h4>图标按钮</h4>
    <div class="block">
      <zch-button icon="search"></zch-button>
      <zch-button loading icon="search">Loading</zch-button>
      <zch-button icon="share" type="primary">主要按钮</zch-button>
      <zch-button icon="like" type="success">成功按钮</zch-button>
      <zch-button icon="alert" type="warning">警告按钮</zch-button>
      <zch-button icon="delete" type="error">失败按钮</zch-button>
      <zch-button icon="delete" type="error" iconPosition="right">失败按钮</zch-button>
    </div>
  </div>
</template>

<script>
import ZchButton from '../../../../src/components/button/index'
import CodeBar from '../utils/CodeBar'
import Vue from 'vue'

export default {
  name: 'ButtonExample',
  components: {
    ZchButton,
    CodeBar,
  },
  data () {
    return {
      code1: `
        <div>
          <zch-button>默认按钮</zch-button>
          <zch-button type="primary">主要按钮</zch-button>
          <zch-button type="success">成功按钮</zch-button>
          <zch-button type="warning">警告按钮</zch-button>
          <zch-button type="info">信息按钮</zch-button>
          <zch-button type="error">失败按钮</zch-button>
        </div>

        <div>
          <zch-button round>圆角按钮</zch-button>
          <zch-button round type="primary">主要按钮</zch-button>
          <zch-button round type="success">成功按钮</zch-button>
          <zch-button round type="warning">警告按钮</zch-button>
          <zch-button round type="info">信息按钮</zch-button>
          <zch-button round type="error">失败按钮</zch-button>
        </div>

        <div>
          <zch-button circle icon="search"></zch-button>
          <zch-button circle type="info" icon="setting"></zch-button>
          <zch-button circle type="success" icon="star"></zch-button>
          <zch-button circle type="error" icon="delete"></zch-button>
        </div>
      `.replace(/^ {8}/gm, '').trim()
    }
  },
}
</script>


<style lang="scss" scoped>
@import "../style.scss";
.block {
  > div {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>