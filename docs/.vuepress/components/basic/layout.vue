<template id="tem">
  <div>
    <h5 v-for="item in des" :key="item">{{ item }}</h5>
    <h3>常见页面布局</h3>
    <div class="block">
      <div class="source">
        <zch-layout style="height: 200px;">
          <zch-header class="dark">header</zch-header>
          <zch-layout>
            <zch-content class="light">content</zch-content>
          </zch-layout>
          <zch-footer class="dark">footer</zch-footer>
        </zch-layout>
      </div>
      <div class="source">
        <zch-layout style="height: 200px;">
          <zch-header class="dark">header</zch-header>
          <zch-layout>
            <zch-content class="light">content</zch-content>
            <zch-side class="middle">side</zch-side>
          </zch-layout>
          <zch-footer class="dark">footer</zch-footer>
        </zch-layout>
      </div>
      <div class="source">
        <zch-layout style="height: 200px;">
          <zch-header class="dark">header</zch-header>
          <zch-layout>
            <zch-side class="middle">side</zch-side>
            <zch-content class="light">content</zch-content>
          </zch-layout>
          <zch-footer class="dark">footer</zch-footer>
        </zch-layout>
      </div>
      <div class="source">
        <zch-layout style="height: 200px;">
          <zch-side class="middle">side</zch-side>
          <zch-layout>
            <zch-header class="dark">header</zch-header>
            <zch-content class="light">content</zch-content>
            <zch-footer class="dark">footer</zch-footer>
          </zch-layout>
        </zch-layout>
      </div>
      <code-bar :code="code1"></code-bar>
    </div>
  </div>
</template>

<script>
import ZchLayout from "../../../../src/components/layout/index";
import ZchHeader from "../../../../src/components/header/index";
import ZchContent from "../../../../src/components/content/index";
import ZchSide from "../../../../src/components/side/index";
import ZchFooter from "../../../../src/components/footer/index";
import CodeBar from "../utils/CodeBar";
import "../style.scss";

export default {
  name: "LayoutExample",
  components: {
    ZchLayout,
    ZchHeader,
    ZchContent,
    ZchSide,
    ZchFooter,
    CodeBar
  },
  data() {
    return {
      des: [
        '用于布局的容器组件，方便快速搭建页面的基本结构：',
        '<zch-layout>：外层容器。当子元素中包含 <zch-header> 或 <zch-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。',
        '<zch-header>：顶栏容器。',
        '<zch-aside>：侧边栏容器。',
        '<zch-content>：主要区域容器。',
        '<zch-footer>：底栏容器。',
      ],
      code1: `
        <div class="source">
          <zch-layout style="height: 200px;">
            <zch-header class="dark">header</zch-header>
            <zch-layout>
              <zch-content class="light">content</zch-content>
            </zch-layout>
            <zch-footer class="dark">footer</zch-footer>
          </zch-layout>
        </div>

        <div class="source">
          <zch-layout style="height: 200px;">
            <zch-header class="dark">header</zch-header>
            <zch-layout>
              <zch-content class="light">content</zch-content>
              <zch-side class="middle">side</zch-side>
            </zch-layout>
            <zch-footer class="dark">footer</zch-footer>
          </zch-layout>
        </div>

        <div class="source">
          <zch-layout style="height: 200px;">
            <zch-header class="dark">header</zch-header>
            <zch-layout>
              <zch-side class="middle">side</zch-side>
              <zch-content class="light">content</zch-content>
            </zch-layout>
            <zch-footer class="dark">footer</zch-footer>
          </zch-layout>
        </div>

        <div class="source">
          <zch-layout style="height: 200px;">
            <zch-side class="middle">side</zch-side>
            <zch-layout>
              <zch-header class="dark">header</zch-header>
              <zch-content class="light">content</zch-content>
              <zch-footer class="dark">footer</zch-footer>
            </zch-layout>
          </zch-layout>
        </div>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
