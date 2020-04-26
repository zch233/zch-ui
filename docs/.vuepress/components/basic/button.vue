<template>
  <div>
    <h4>基础用法</h4>
    <div class="block">
      <div class="source">
        <zch-button>默认按钮</zch-button>
        <zch-button type="primary">主要按钮</zch-button>
        <zch-button type="success">成功按钮</zch-button>
        <zch-button type="warning">警告按钮</zch-button>
        <zch-button type="info">信息按钮</zch-button>
        <zch-button type="error">失败按钮</zch-button>
      </div>
      <div class="source">
        <zch-button round>圆角按钮</zch-button>
        <zch-button round type="primary">主要按钮</zch-button>
        <zch-button round type="success">成功按钮</zch-button>
        <zch-button round type="warning">警告按钮</zch-button>
        <zch-button round type="info">信息按钮</zch-button>
        <zch-button round type="error">失败按钮</zch-button>
      </div>
      <div class="source">
        <zch-button circle icon="search"></zch-button>
        <zch-button circle type="info" icon="setting"></zch-button>
        <zch-button circle type="success" icon="star"></zch-button>
        <zch-button circle type="error" icon="delete"></zch-button>
      </div>
      <code-bar title="使用 type、round 和 circle 属性来定义 Button 的样式。" :code="code1"></code-bar>
    </div>
    <h4>禁用状态</h4>
    <div class="block">
      <div class="source">
        <zch-button disabled>默认按钮</zch-button>
        <zch-button disabled type="primary">主要按钮</zch-button>
        <zch-button disabled type="success">成功按钮</zch-button>
        <zch-button disabled type="warning">警告按钮</zch-button>
        <zch-button disabled type="info">信息按钮</zch-button>
        <zch-button disabled type="error">失败按钮</zch-button>
      </div>
      <div class="source">
        <zch-button disabled circle icon="search"></zch-button>
        <zch-button disabled circle type="info" icon="setting"></zch-button>
        <zch-button disabled circle type="success" icon="star"></zch-button>
        <zch-button disabled circle type="error" icon="delete"></zch-button>
      </div>
      <code-bar title="你可以使用 disabled 属性来定义按钮是否可用，它接受一个 Boolean 值。" :code="code2"></code-bar>
    </div>
    <h4>图标按钮</h4>
    <div class="block">
      <div class="source">
        <zch-button icon="search"></zch-button>
        <zch-button loading icon="search">Loading</zch-button>
        <zch-button icon="share" type="primary">主要按钮</zch-button>
        <zch-button icon="like" type="success">成功按钮</zch-button>
        <zch-button icon="alert" type="warning">警告按钮</zch-button>
        <zch-button icon="delete" type="error">失败按钮</zch-button>
        <zch-button icon="delete" type="error" iconPosition="right">失败按钮</zch-button>
      </div>
      <code-bar title="设置 icon 属性即可，icon 的列表可以参考 icon 组件，也可以设置在文字右边的 icon ，只要使用 zch-icon 标签即可，可以使用自定义图标。" :code="code3"></code-bar>
    </div>
    <h4>按钮组</h4>
    <div class="block">
      <div class="source">
        <zch-button-group>
          <zch-button icon="left1">上一页</zch-button>
          <zch-button icon="right1" icon-position="right">下一页</zch-button>
        </zch-button-group>
        <zch-button-group>
          <zch-button icon="search"></zch-button>
          <zch-button icon="star"></zch-button>
          <zch-button icon="upload"></zch-button>
        </zch-button-group>
      </div>
      <code-bar title="使用 <zch-button-group> 标签来嵌套你的按钮。" :code="code4"></code-bar>
    </div>
    <h4>加载中</h4>
    <div class="block">
      <div class="source">
        <zch-button loading icon="search">Loading</zch-button>
      </div>
      <code-bar title="要设置为 loading 状态，只要设置 loading 属性为 true 即可。" :code="code5"></code-bar>
    </div>
    <h4>不同尺寸</h4>
    <div class="block">
      <div class="source">
        <zch-button size="large">大型按钮</zch-button>
        <zch-button>默认按钮</zch-button>
        <zch-button size="mini">小型按钮</zch-button>
      </div>
      <div class="source">
        <zch-button round size="large">大型按钮</zch-button>
        <zch-button round>默认按钮</zch-button>
        <zch-button round size="mini">小型按钮</zch-button>
      </div>
      <code-bar title="额外的尺寸：large、mini，通过设置 size 属性来配置它们。" :code="code6"></code-bar>
    </div>
  </div>
</template>

<script>
import ZchButton from '../../../../src/components/button/index'
import ZchButtonGroup from '../../../../src/components/button-group/index'
import CodeBar from '../utils/CodeBar'
import '../style.scss'
import Vue from 'vue'

export default {
  name: 'ButtonExample',
  components: {
    ZchButtonGroup,
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
      `.replace(/^ {8}/gm, '').trim(),
      code2: `
        <div class="source">
          <zch-button disabled>默认按钮</zch-button>
          <zch-button disabled type="primary">主要按钮</zch-button>
          <zch-button disabled type="success">成功按钮</zch-button>
          <zch-button disabled type="warning">警告按钮</zch-button>
          <zch-button disabled type="info">信息按钮</zch-button>
          <zch-button disabled type="error">失败按钮</zch-button>
        </div>
        <div class="source">
          <zch-button disabled circle icon="search"></zch-button>
          <zch-button disabled circle type="info" icon="setting"></zch-button>
          <zch-button disabled circle type="success" icon="star"></zch-button>
          <zch-button disabled circle type="error" icon="delete"></zch-button>
        </div>
      `.replace(/^ {8}/gm, '').trim(),
      code3: `
        <div class="source">
          <zch-button icon="search"></zch-button>
          <zch-button icon="share" type="primary">主要按钮</zch-button>
          <zch-button icon="like" type="success">成功按钮</zch-button>
          <zch-button icon="alert" type="warning">警告按钮</zch-button>
          <zch-button icon="delete" type="error">失败按钮</zch-button>
          <zch-button icon="delete" type="error" iconPosition="right">失败按钮</zch-button>
        </div>
      `.replace(/^ {8}/gm, '').trim(),
      code4: `
        <div class="source">
          <zch-button-group>
            <zch-button icon="left1">上一页</zch-button>
            <zch-button icon="right1" icon-position="right">下一页</zch-button>
          </zch-button-group>
          <zch-button-group>
            <zch-button icon="search"></zch-button>
            <zch-button icon="star"></zch-button>
            <zch-button icon="upload"></zch-button>
          </zch-button-group>
        </div>
      `.replace(/^ {8}/gm, '').trim(),
      code5: `
        <div class="source">
          <zch-button loading icon="search">Loading</zch-button>
        </div>
      `.replace(/^ {8}/gm, '').trim(),
      code6: `
        <div class="source">
          <zch-button size="large">大型按钮</zch-button>
          <zch-button>默认按钮</zch-button>
          <zch-button size="mini">小型按钮</zch-button>
        </div>
        
        <div class="source">
          <zch-button round size="large">大型按钮</zch-button>
          <zch-button round>默认按钮</zch-button>
          <zch-button round size="mini">小型按钮</zch-button>
        </div>
      `.replace(/^ {8}/gm, '').trim(),
    }
  },
}
</script>
