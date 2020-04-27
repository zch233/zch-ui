<template id="tem">
  <div>
    <h3>使用方法</h3>
    <h5>从顶部出现，3 秒后自动消失。</h5>
    <div class="block">
      <div class="source">
        <zch-button @click="open">打开消息提醒</zch-button>
      </div>
      <code-bar title="直接通过设置属性 icon 为 iconName 来使用即可。例如：" :code="code1"></code-bar>
    </div>
  </div>
</template>

<script>
import ZchButton from "../../../../src/components/button/index";
import zchToast from "../../../../src/components/toast/main.js";
import CodeBar from "../utils/CodeBar";
import "../style.scss";
import Vue from "vue";
Vue.use(zchToast);

export default {
  name: "IconExample",
  components: {
    ZchButton,
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
  methods: {
    open () {
      this.$toast('普通的消息')
    }
  }
};
</script>
