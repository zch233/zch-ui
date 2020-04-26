<template id="tem">
  <div>
    <h5>用于标记和选择。</h5>
    <h3>基础用法</h3>
    <div class="block">
      <div class="source">
        <zch-tag>标签一</zch-tag>
        <zch-tag type="success">标签一</zch-tag>
        <zch-tag type="info">标签二</zch-tag>
        <zch-tag type="warning">标签三</zch-tag>
        <zch-tag type="danger">标签四</zch-tag>
      </div>
      <code-bar title="由 type 属性来选择 tag 的类型，也可以通过 color 属性来自定义背景色。" :code="code1"></code-bar>
    </div>
    <h3>更多预设色彩</h3>
    <div class="block">
      <div class="source">
        <zch-tag type="magenta">magenta</zch-tag>
        <zch-tag type="red">red</zch-tag>
        <zch-tag type="orange">orange</zch-tag>
        <zch-tag type="gold">gold</zch-tag>
        <zch-tag type="lime">lime</zch-tag>
        <zch-tag type="green">green</zch-tag>
        <zch-tag type="cyan">cyan</zch-tag>
        <zch-tag type="blue">blue</zch-tag>
        <zch-tag type="geekblue">geekblue</zch-tag>
        <zch-tag type="purple">purple</zch-tag>
      </div>
      <code-bar title="我们添加了多种预设色彩的标签样式，用作不同场景使用。" :code="code2"></code-bar>
    </div>
    <h3>自定义色彩</h3>
    <div class="block">
      <div class="source">
        <zch-tag color="#c03">#c03</zch-tag>
        <zch-tag color="#ddd">#ddd</zch-tag>
        <zch-tag color="#87d068">#87d068</zch-tag>
      </div>
      <code-bar title="如果预设值不能满足你的需求，可以设置为具体的色值。" :code="code3"></code-bar>
    </div>
    <h3>可移除标签</h3>
    <h5>动态编辑标签可以通过点击标签关闭按钮后触发的 <span class="code">close</span> 事件来实现</h5>
    <div class="block">
      <div class="source">
        <zch-tag closeable>标签一</zch-tag>
        <zch-tag closeable type="success">标签一</zch-tag>
        <zch-tag closeable type="info">标签二</zch-tag>
        <zch-tag closeable type="warning">标签三</zch-tag>
        <zch-tag closeable type="danger">标签四</zch-tag>
      </div>
      <code-bar title="可以通过添加 closable 变为可关闭标签。可关闭标签具有 close 事件。" :code="code4"></code-bar>
    </div>
    <h3>不同尺寸</h3>
    <h5>Tag 组件提供除了默认值以外的二种尺寸，可以在不同场景下选择合适的按钮尺寸。</h5>
    <div class="block">
      <div class="source">
        <zch-tag size="large">标签一</zch-tag>
        <zch-tag>标签一</zch-tag>
        <zch-tag size="mini">标签一</zch-tag>
      </div>
      <code-bar title="额外的尺寸：large、mini，通过设置 size 属性来配置它们。" :code="code5"></code-bar>
    </div>
  </div>
</template>

<script>
import ZchTag from "../../../../src/components/tag/index";
import CodeBar from "../utils/CodeBar";
import "../style.scss";

export default {
  name: "TagExample",
  components: {
    ZchTag,
    CodeBar
  },
  data() {
    return {
      code1: `
        <zch-tag>标签一</zch-tag>
        <zch-tag type="success">标签一</zch-tag>
        <zch-tag type="info">标签二</zch-tag>
        <zch-tag type="warning">标签三</zch-tag>
        <zch-tag type="danger">标签四</zch-tag>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code2: `
        <zch-tag type="magenta">magenta</zch-tag>
        <zch-tag type="red">red</zch-tag>
        <zch-tag type="orange">orange</zch-tag>
        <zch-tag type="gold">gold</zch-tag>
        <zch-tag type="lime">lime</zch-tag>
        <zch-tag type="green">green</zch-tag>
        <zch-tag type="cyan">cyan</zch-tag>
        <zch-tag type="blue">blue</zch-tag>
        <zch-tag type="geekblue">geekblue</zch-tag>
        <zch-tag type="purple">purple</zch-tag>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code3: `
        <zch-tag color="#c03">#c03</zch-tag>
        <zch-tag color="#ddd">#ddd</zch-tag>
        <zch-tag color="#87d068">#87d068</zch-tag>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code4: `
        <zch-tag closeable>标签一</zch-tag>
        <zch-tag closeable type="success">标签一</zch-tag>
        <zch-tag closeable type="info">标签二</zch-tag>
        <zch-tag closeable type="warning">标签三</zch-tag>
        <zch-tag closeable type="danger">标签四</zch-tag>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code5: `
        <zch-tag size="large">标签一</zch-tag>
        <zch-tag>标签一</zch-tag>
        <zch-tag size="mini">标签一</zch-tag>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
