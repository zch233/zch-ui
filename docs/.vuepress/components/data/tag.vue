<template id="tem">
  <div>
    <h5>用于标记和选择。</h5>
    <h3>基础用法</h3>
    <div class="block">
      <div class="source">
        <zch-tag>标签一</zch-tag>
      </div>
      <code-bar title="由 type 属性来选择 tag 的类型，也可以通过 color 属性来自定义背景色。" :code="code1"></code-bar>
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
        <div class="source">
          <zch-icon icon="share"></zch-icon>
          <zch-icon icon="delete"></zch-icon>
          <zch-icon icon="edit"></zch-icon>
          <zch-icon icon="search"></zch-icon>
        </div>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
