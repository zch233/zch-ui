<template>
  <div>
    <h3>基础布局</h3>
    <h5>通过基础的 24 分栏，迅速简便地创建布局。</h5>
    <div class="block">
      <div class="source">
        <zch-row>
          <zch-col span="24"><div class="dark">col24</div></zch-col>
        </zch-row>
      </div>
      <div class="source">
        <zch-row>
          <zch-col span="12"><div class="dark">col12</div></zch-col>
          <zch-col span="12"><div class="light">col12</div></zch-col>
        </zch-row>
      </div>
      <div class="source">
        <zch-row>
          <zch-col span="8"><div class="dark">col8</div></zch-col>
          <zch-col span="8"><div class="light">col8</div></zch-col>
          <zch-col span="8"><div class="dark">col8</div></zch-col>
        </zch-row>
      </div>
      <div class="source">
        <zch-row>
          <zch-col span="6"><div class="dark">col6</div></zch-col>
          <zch-col span="6"><div class="light">col6</div></zch-col>
          <zch-col span="6"><div class="dark">col6</div></zch-col>
          <zch-col span="6"><div class="light">col6</div></zch-col>
        </zch-row>
      </div>
      <code-bar title="通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。" :code="code1"></code-bar>
    </div>
    <h3>分栏间隔</h3>
    <h5>分栏之间存在间隔。</h5>
    <div class="block">
      <div class="source">
        <zch-row gutter="20">
          <zch-col span="6"><div class="dark">col6</div></zch-col>
          <zch-col span="6"><div class="light">col6</div></zch-col>
          <zch-col span="6"><div class="dark">col6</div></zch-col>
          <zch-col span="6"><div class="light">col6</div></zch-col>
        </zch-row>
      </div>
      <code-bar title="Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。" :code="code2"></code-bar>
    </div>
    <h3>混合布局</h3>
    <h5>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</h5>
    <div class="block">
      <div class="source">
        <zch-row gutter="20">
          <zch-col span="16"><div class="dark">col16</div></zch-col>
          <zch-col span="8"><div class="light">col8</div></zch-col>
        </zch-row>
      </div>
      <div class="source">
        <zch-row gutter="20">
          <zch-col span="8"><div class="dark">col8</div></zch-col>
          <zch-col span="8"><div class="light">col8</div></zch-col>
          <zch-col span="4"><div class="dark">col4</div></zch-col>
          <zch-col span="4"><div class="light">col4</div></zch-col>
        </zch-row>
      </div>
      <div class="source">
        <zch-row gutter="20">
          <zch-col span="4"><div class="dark">col4</div></zch-col>
          <zch-col span="16"><div class="light">col16</div></zch-col>
          <zch-col span="4"><div class="dark">col4</div></zch-col>
        </zch-row>
      </div>
      <code-bar :code="code3"></code-bar>
    </div>
    <h3>分栏偏移</h3>
    <h5>支持偏移指定的栏数。</h5>
    <div class="block">
      <div class="source">
        <zch-row>
          <zch-col span="6"><div class="dark">col6</div></zch-col>
          <zch-col span="6" offset="6"><div class="light">col6</div></zch-col>
        </zch-row>
      </div>
      <div class="source">
        <zch-row>
          <zch-col span="6" offset="6"><div class="dark">col6</div></zch-col>
          <zch-col span="6" offset="6"><div class="light">col6</div></zch-col>
        </zch-row>
      </div>
      <div class="source">
        <zch-row>
          <zch-col span="12" offset="6"><div class="dark">col12</div></zch-col>
        </zch-row>
      </div>
      <code-bar title="通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。" :code="code4"></code-bar>
    </div>
    <h3>响应式布局</h3>
    <h5>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：phone、pad、narrowPc、pc 和 widePc。</h5>
    <div class="block">
      <div class="source">
        <zch-row gutter="10">
          <zch-col :phone="8" :pad="6" :narrow-pc="4" :pc="3" :wide-pc="1"><div class="dark">R</div></zch-col>
          <zch-col :phone="4" :pad="6" :narrow-pc="8" :pc="9" :wide-pc="11"><div class="light">R</div></zch-col>
          <zch-col :phone="4" :pad="6" :narrow-pc="8" :pc="9" :wide-pc="11"><div class="light">R</div></zch-col>
          <zch-col :phone="8" :pad="6" :narrow-pc="4" :pc="3" :wide-pc="1"><div class="light">R</div></zch-col>
        </zch-row>
      </div>
      <code-bar :code="code5"></code-bar>
    </div>
  </div>
</template>

<script>
import ZchRow from "../../../../src/components/row/index";
import ZchCol from "../../../../src/components/col/index";
import CodeBar from "../utils/CodeBar";
import "../style.scss";

export default {
  name: "GridExample",
  components: {
    ZchRow,
    ZchCol,
    CodeBar
  },
  data() {
    return {
      code1: `
        <div class="source">
          <zch-row>
            <zch-col span="24"><div class="dark">col24</div></zch-col>
          </zch-row>
        </div>

        <div class="source">
          <zch-row>
            <zch-col span="12"><div class="dark">col12</div></zch-col>
            <zch-col span="12"><div class="light">col12</div></zch-col>
          </zch-row>
        </div>

        <div class="source">
          <zch-row>
            <zch-col span="8"><div class="dark">col8</div></zch-col>
            <zch-col span="8"><div class="light">col8</div></zch-col>
            <zch-col span="8"><div class="dark">col8</div></zch-col>
          </zch-row>
        </div>

        <div class="source">
          <zch-row>
            <zch-col span="6"><div class="dark">col6</div></zch-col>
            <zch-col span="6"><div class="light">col6</div></zch-col>
            <zch-col span="6"><div class="dark">col6</div></zch-col>
            <zch-col span="6"><div class="light">col6</div></zch-col>
          </zch-row>
        </div>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code2: `
        <div class="source" gutter="20">
          <zch-row>
            <zch-col span="6"><div class="dark">col6</div></zch-col>
            <zch-col span="6"><div class="light">col6</div></zch-col>
            <zch-col span="6"><div class="dark">col6</div></zch-col>
            <zch-col span="6"><div class="light">col6</div></zch-col>
          </zch-row>
        </div>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code3: `
        <div class="source">
          <zch-row gutter="20">
            <zch-col span="16"><div class="dark">col16</div></zch-col>
            <zch-col span="8"><div class="light">col8</div></zch-col>
          </zch-row>
        </div>
        <div class="source">
          <zch-row gutter="20">
            <zch-col span="8"><div class="dark">col8</div></zch-col>
            <zch-col span="8"><div class="light">col8</div></zch-col>
            <zch-col span="4"><div class="dark">col4</div></zch-col>
            <zch-col span="4"><div class="light">col4</div></zch-col>
          </zch-row>
        </div>
        <div class="source">
          <zch-row gutter="20">
            <zch-col span="4"><div class="dark">col4</div></zch-col>
            <zch-col span="16"><div class="light">col16</div></zch-col>
            <zch-col span="4"><div class="dark">col4</div></zch-col>
          </zch-row>
        </div>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code4: `
        <div class="source">
          <zch-row>
            <zch-col span="6"><div class="dark">col6</div></zch-col>
            <zch-col span="6" offset="6"><div class="light">col6</div></zch-col>
          </zch-row>
        </div>
        <div class="source">
          <zch-row>
            <zch-col span="6" offset="6"><div class="dark">col6</div></zch-col>
            <zch-col span="6" offset="6"><div class="light">col6</div></zch-col>
          </zch-row>
        </div>
        <div class="source">
          <zch-row>
            <zch-col span="12" offset="6"><div class="dark">col12</div></zch-col>
          </zch-row>
        </div>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code5: `
        <div class="source">
          <zch-row gutter="10">
            <zch-col :phone="8" :pad="6" :narrow-pc="4" :pc="3" :wide-pc="1"><div class="dark">R</div></zch-col>
            <zch-col :phone="4" :pad="6" :narrow-pc="8" :pc="9" :wide-pc="11"><div class="light">R</div></zch-col>
            <zch-col :phone="4" :pad="6" :narrow-pc="8" :pc="9" :wide-pc="11"><div class="light">R</div></zch-col>
            <zch-col :phone="8" :pad="6" :narrow-pc="4" :pc="3" :wide-pc="1"><div class="light">R</div></zch-col>
          </zch-row>
        </div>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  }
};
</script>
