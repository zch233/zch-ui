<template id="tem">
  <div>
    <h4>分隔内容上有关联但属于不同类别的数据集合。</h4>
    <h3>基础用法</h3>
    <h5>基础的、简洁的标签页。</h5>
    <div class="block">
      <div class="source">
        <zch-tab v-model="activeTab">
          <zch-tab-pane label="用户管理" name="first">用户管理</zch-tab-pane>
          <zch-tab-pane label="配置管理" name="second">配置管理</zch-tab-pane>
          <zch-tab-pane label="角色管理" name="third">角色管理</zch-tab-pane>
          <zch-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</zch-tab-pane>
        </zch-tab>
      </div>
      <code-bar title="Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。" :code="code1"></code-bar>
    </div>
    <h3>禁用某项</h3>
    <div class="block">
      <div class="source">
        <zch-tab v-model="activeTab">
          <zch-tab-pane label="用户管理" name="first">用户管理</zch-tab-pane>
          <zch-tab-pane label="配置管理" name="second">配置管理</zch-tab-pane>
          <zch-tab-pane label="角色管理" disabled name="third">角色管理</zch-tab-pane>
          <zch-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</zch-tab-pane>
        </zch-tab>
      </div>
      <code-bar title="通过设置 disabled 来禁用某项。" :code="code2"></code-bar>
    </div>
  </div>
</template>

<script>
import ZchTab from "../../../../src/components/tabs/tab";
import ZchTabPane from "../../../../src/components/tabs/tab-pane";
import CodeBar from "../utils/CodeBar";
import "../style.scss";

export default {
  name: "IconExample",
  components: {
    ZchTab,
    ZchTabPane,
    CodeBar
  },
  data() {
    return {
      activeTab: 'second',
      code1: `
        <zch-tab v-model="activeTab">
          <zch-tab-pane label="用户管理" name="first">用户管理</zch-tab-pane>
          <zch-tab-pane label="配置管理" name="second">配置管理</zch-tab-pane>
          <zch-tab-pane label="角色管理" name="third">角色管理</zch-tab-pane>
          <zch-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</zch-tab-pane>
        </zch-tab>

        <script>
          export default {
            data() {
              return {
                activeTab: 'second'
              };
            },
          };
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code2: `
        <zch-tab v-model="activeTab">
          <zch-tab-pane label="用户管理" name="first">用户管理</zch-tab-pane>
          <zch-tab-pane label="配置管理" name="second">配置管理</zch-tab-pane>
          <zch-tab-pane label="角色管理" disabled name="third">角色管理</zch-tab-pane>
          <zch-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</zch-tab-pane>
        </zch-tab>

        <script>
          export default {
            data() {
              return {
                activeTab: 'second'
              };
            },
          };
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
