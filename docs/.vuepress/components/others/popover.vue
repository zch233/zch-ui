<template>
  <div>
    <h3>基础用法</h3>
    <h5>在这里我们提供 4 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</h5>
    <div class="block">
      <div class="source popover">
        <div class="top">
          <zch-popover position="top">
            <template slot="title">标题</template>
            <template slot="content">这是一段浮层</template>
            <zch-button>Top</zch-button>
          </zch-popover>
        </div>
        <div class="leftRight">
          <zch-popover position="left">
            <template slot="title">标题</template>
            <template slot="content">这是一段浮层</template>
            <zch-button>Left</zch-button>
          </zch-popover>
          <zch-popover position="right">
            <template slot="title">标题</template>
            <template slot="content">这是一段浮层</template>
            <zch-button>Right</zch-button>
          </zch-popover>
        </div>
        <div class="bottom">
          <zch-popover position="bottom">
            <template slot="title">标题</template>
            <template slot="content">这是一段浮层</template>
            <zch-button>Bottom</zch-button>
          </zch-popover>
        </div>
      </div>
      <code-bar :code="code1"></code-bar>
    </div>
    <h3>触发方式</h3>
    <div class="block">
      <div class="source">
        <zch-popover position="bottom" trigger="click">
          <template slot="title">标题</template>
          <template slot="content">这是一段浮层</template>
          <zch-button>Click</zch-button>
        </zch-popover>
        <zch-popover position="top">
          <template slot="title">标题</template>
          <template slot="content">这是一段浮层</template>
          <zch-button>Hover</zch-button>
        </zch-popover>
      </div>
      <code-bar :code="code2"></code-bar>
    </div>
    <h3>嵌套操作</h3>
    <h5>当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</h5>
    <div class="block">
      <div class="source">
        <zch-popover title="提示" v-model="popoverVisible" trigger="click">
          <template slot="content">
            <div>这是一段内容这是一段内容确定删除吗？</div>
            <div style="margin-top: 10px;text-align: right;">
              <zch-button type="info" size="mini" @click="popoverVisible = false">取消</zch-button>
              <zch-button type="error" size="mini" @click="popoverVisible = false">删除</zch-button>
            </div>
          </template>
          <zch-button>Click</zch-button>
        </zch-popover>
      </div>
      <code-bar title="利用分发取代 content 属性" :code="code3"></code-bar>
    </div>
  </div>
</template>

<script>
import ZchPopover from "../../../../src/components/popover/index";
import ZchButton from "../../../../src/components/button/index";
import CodeBar from "../utils/CodeBar";
import "../style.scss";

export default {
  name: "PopoverExample",
  components: {
    ZchButton,
    ZchPopover,
    CodeBar
  },
  data() {
    return {
      popoverVisible: false,
      code1: `
        <div class="source popover">
          <div class="top">
            <zch-popover position="top">
              <template slot="title">标题</template>
              <template slot="content">这是一段浮层</template>
              <zch-button>Top</zch-button>
            </zch-popover>
          </div>
          <div class="leftRight">
            <zch-popover position="left">
              <template slot="title">标题</template>
              <template slot="content">这是一段浮层</template>
              <zch-button>Left</zch-button>
            </zch-popover>
            <zch-popover position="right">
              <template slot="title">标题</template>
              <template slot="content">这是一段浮层</template>
              <zch-button>Right</zch-button>
            </zch-popover>
          </div>
          <div class="bottom">
            <zch-popover position="bottom">
              <template slot="title">标题</template>
              <template slot="content">这是一段浮层</template>
              <zch-button>Bottom</zch-button>
            </zch-popover>
          </div>
        </div>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code2: `
        <div class="source">
          <zch-popover position="bottom" trigger="click">
            <template slot="title">标题</template>
            <template slot="content">这是一段浮层</template>
            <zch-button>Click</zch-button>
          </zch-popover>
          <zch-popover position="top">
            <template slot="title">标题</template>
            <template slot="content">这是一段浮层</template>
            <zch-button>Hover</zch-button>
          </zch-popover>
        </div>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code3: `
        <zch-popover title="提示" v-model="popoverVisible" trigger="click">
          <template slot="content">
            <div>这是一段内容这是一段内容确定删除吗？</div>
            <div style="margin-top: 10px;text-align: right;">
              <zch-button type="info" size="mini" @click="popoverVisible = false">取消</zch-button>
              <zch-button type="error" size="mini" @click="popoverVisible = false">删除</zch-button>
            </div>
          </template>
          <zch-button>Click</zch-button>
        </zch-popover>

        <script>
          export default {
            data() {
              return {
                popoverVisible: false
              };
            },
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>

<style lang="scss" scoped>
  .popover {
    width: 50%;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .leftRight {
      justify-content: space-between;
      margin: 20px 0;
    }
  }
</style>
