<template id="tem">
  <div>
    <h3>基础用法</h3>
    <h5>从顶部出现，3 秒后自动消失。</h5>
    <div class="block">
      <div class="source">
        <zch-button @click="open">打开消息提醒</zch-button>
      </div>
      <code-bar :code="code1"></code-bar>
    </div>
    <h3>可控位置</h3>
    <div class="block">
      <div class="source">
        <zch-button @click="open">从顶部出现</zch-button>
        <zch-button @click="openMiddle">从中间出现</zch-button>
        <zch-button @click="openBottom">从底部出现</zch-button>
      </div>
      <code-bar :code="code2"></code-bar>
    </div>
    <h3>使用 HTML 片段</h3>
    <h5>
      <span class="code">message</span> 属性支持传入 HTML 片段
    </h5>
    <div class="block">
      <div class="source">
        <zch-button @click="openHTML">HTML 消息</zch-button>
      </div>
      <code-bar :code="code3"></code-bar>
    </div>
    <h3>不同状态</h3>
    <h5>用来显示「成功、警告、消息、错误」类的操作反馈。</h5>
    <div class="block">
      <div class="source">
        <zch-button @click="openSuccess">成功</zch-button>
        <zch-button @click="openWarning">警告</zch-button>
        <zch-button @click="openInfo">消息</zch-button>
        <zch-button @click="openError">错误</zch-button>
      </div>
      <code-bar :code="code4"></code-bar>
    </div>
    <h3>可关闭</h3>
    <h5>可以添加关闭按钮。</h5>
    <div class="block">
      <div class="source">
        <zch-button @click="openSuccessWithClose">成功</zch-button>
        <zch-button @click="openWarningWithClose">警告</zch-button>
        <zch-button @click="openInfoWithClose">消息</zch-button>
        <zch-button @click="openErrorWithClose">错误</zch-button>
      </div>
      <code-bar :code="code5"></code-bar>
    </div>
    <h3>文字居中</h3>
    <h5>
      使用
      <span class="code">center</span> 属性让文字水平居中。
    </h5>
    <div class="block">
      <div class="source">
        <zch-button @click="openCenter">文字居中</zch-button>
      </div>
      <code-bar :code="code6"></code-bar>
    </div>
    <h3>全局方法</h3>
    <h5>zch-ui 为 Vue.prototype 添加了全局方法 $toast vue instance 中可以采用本页面中的方式调用 toast</h5>
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
        <zch-button @click="open">打开消息提醒</zch-button>

        <script>
          import Vue from "vue";
          import { zchToast } from "zch-gulu";
          Vue.use(zchToast);

          export default {
            methods: {
              open () {
                this.$toast('普通的消息')
              },
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code2: `
        <zch-button @click="open">从顶部出现</zch-button>
        <zch-button @click="open('middle')">从中间出现</zch-button>
        <zch-button @click="open('bottom')">从底部出现</zch-button>

        <script>
          import Vue from "vue";
          import { zchToast } from "zch-gulu";
          Vue.use(zchToast);

          export default {
            methods: {
              open (position) {
                this.$toast('{ message: '普通的消息', position }')
              },
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code3: `
        <zch-button @click="openHTML">HTML 消息</zch-button>

        <script>
          import Vue from "vue";
          import { zchToast } from "zch-gulu";
          Vue.use(zchToast);

          export default {
            methods: {
              openHTML () {
                this.$toast({ message: '<u>HTML的的消息</u>', enabledHTML: true })
              },
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code4: `
        <zch-button @click="openSuccess">成功</zch-button>
        <zch-button @click="openWarning">警告</zch-button>
        <zch-button @click="openInfo">消息</zch-button>
        <zch-button @click="openError">错误</zch-button>

        <script>
          import Vue from "vue";
          import { zchToast } from "zch-gulu";
          Vue.use(zchToast);

          export default {
            methods: {
              openSuccess () {
                this.$toast({ message: '恭喜你，这是一条成功消息', type: 'success' })
              },
              openWarning () {
                this.$toast({ message: '警告哦，这是一条警告消', type: 'warning' })
              },
              openInfo () {
                this.$toast({ message: '这是一条消息提示', type: 'info' })
              },
              openError () {
                this.$toast({ message: '错了哦，这是一条错误消息', type: 'error' })
              },
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code5: `
        <zch-button @click="openSuccessWithClose">成功</zch-button>
        <zch-button @click="openWarningWithClose">警告</zch-button>
        <zch-button @click="openInfoWithClose">消息</zch-button>
        <zch-button @click="openErrorWithClose">错误</zch-button>

        <script>
          import Vue from "vue";
          import { zchToast } from "zch-gulu";
          Vue.use(zchToast);

          export default {
            methods: {
              openSuccessWithClose () {
                this.$toast({ message: '恭喜你，这是一条成功消息', showClose: true, type: 'success' })
              },
              openWarningWithClose () {
                this.$toast({ message: '警告哦，这是一条警告消', showClose: true, type: 'warning' })
              },
              openInfoWithClose () {
                this.$toast({ message: '这是一条消息提示', showClose: true, type: 'info' })
              },
              openErrorWithClose () {
                this.$toast({ message: '错了哦，这是一条错误消息', showClose: true, type: 'error' })
              },
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code6: `
        <zch-button @click="openCenter">文字居中</zch-button>

        <script>
          import Vue from "vue";
          import { zchToast } from "zch-gulu";
          Vue.use(zchToast);

          export default {
            methods: {
              openCenter () {
                this.$toast({ message: '恭喜你，这是一条成功消息', center: true, type: 'success' })
              },
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  },
  methods: {
    open() {
      this.$toast("普通的消息");
    },
    openMiddle() {
      this.$toast({ message: "普通的消息", position: "middle" });
    },
    openBottom() {
      this.$toast({ message: "普通的消息", position: "bottom" });
    },
    openHTML() {
      this.$toast({ message: "<u>HTML的的消息</u>", enabledHTML: true });
    },
    openSuccess() {
      this.$toast({ message: "恭喜你，这是一条成功消息", type: "success" });
    },
    openWarning() {
      this.$toast({ message: "警告哦，这是一条警告消", type: "warning" });
    },
    openInfo() {
      this.$toast({ message: "这是一条消息提示", type: "info" });
    },
    openError() {
      this.$toast({ message: "错了哦，这是一条错误消息", type: "error" });
    },
    openSuccessWithClose() {
      this.$toast({
        message: "恭喜你，这是一条成功消息",
        showClose: true,
        type: "success"
      });
    },
    openWarningWithClose() {
      this.$toast({
        message: "警告哦，这是一条警告消",
        showClose: true,
        type: "warning"
      });
    },
    openInfoWithClose() {
      this.$toast({
        message: "这是一条消息提示",
        showClose: true,
        type: "info"
      });
    },
    openErrorWithClose() {
      this.$toast({
        message: "错了哦，这是一条错误消息",
        showClose: true,
        type: "error"
      });
    },
    openCenter() {
      this.$toast({
        message: "恭喜你，这是一条成功消息",
        center: true,
        type: "success"
      });
    }
  }
};
</script>
