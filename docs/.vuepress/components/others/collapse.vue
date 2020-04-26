<template id="tem">
  <div>
    <h4>通过折叠面板收纳内容区域</h4>
    <h3>基础用法</h3>
    <h5>可同时展开多个面板，面板之间不影响</h5>
    <div class="block">
      <div class="source">
        <zch-collapse v-model="activeCollapse1">
          <zch-collapse-item title="This is panel header 1" name="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 2" name="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 3" name="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 4" name="4">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
        </zch-collapse>
      </div>
      <code-bar :code="code1"></code-bar>
    </div>
    <h3>手风琴效果</h3>
    <h5>每次只能展开一个面板</h5>
    <div class="block">
      <div class="source">
        <zch-collapse v-model="activeCollapse2" accordion>
          <zch-collapse-item title="This is panel header 1" name="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 2" name="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 3" name="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 4" name="4">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
        </zch-collapse>
      </div>
      <code-bar title="通过 accordion 属性来设置是否以手风琴模式显示。" :code="code2"></code-bar>
    </div>
    <h3>自定义面板标题</h3>
    <h5>除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。</h5>
    <div class="block">
      <div class="source">
        <zch-collapse v-model="activeCollapse3" accordion>
          <zch-collapse-item title="This is panel header 1" name="1">
            <template slot="title">
              This is panel header 1
              <zch-icon icon="star"></zch-icon>
            </template>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 2" name="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 3" name="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 4" name="4">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
        </zch-collapse>
      </div>
      <code-bar title="通过 accordion 属性来设置是否以手风琴模式显示。" :code="code3"></code-bar>
    </div>
    <h3>禁用一项</h3>
    <div class="block">
      <div class="source">
        <zch-collapse v-model="activeCollapse4">
          <zch-collapse-item title="This is panel header 1" name="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 2" disabled name="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 3" name="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 4" name="4">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
        </zch-collapse>
      </div>
      <code-bar title="设置 disabled 来禁用一项。" :code="code4"></code-bar>
    </div>
  </div>
</template>

<script>
import ZchCollapse from "../../../../src/components/collapse/collapse";
import ZchIcon from "../../../../src/components/icon/index";
import ZchCollapseItem from "../../../../src/components/collapse/collapse-item";
import CodeBar from "../utils/CodeBar";
import "../style.scss";

export default {
  name: "CollapseExample",
  components: {
    ZchCollapseItem,
    ZchCollapse,
    ZchIcon,
    CodeBar
  },
  data() {
    return {
      activeCollapse1: '1',
      activeCollapse2: '1',
      activeCollapse3: '1',
      activeCollapse4: '1',
      code1: `
        <zch-collapse v-model="activeCollapse">
          <zch-collapse-item title="This is panel header 1" name="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 2" name="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 3" name="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 4" name="4">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
        </zch-collapse>

        <script>
          export default {
            data() {
              return {
                activeCollapse: ['1']
              };
            },
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code2: `
        <zch-collapse v-model="activeCollapse" accordion>
          <zch-collapse-item title="This is panel header 1" name="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 2" name="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 3" name="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 4" name="4">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
        </zch-collapse>

        <script>
          export default {
            data() {
              return {
                activeCollapse: ['1']
              };
            },
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code3: `
        <zch-collapse v-model="activeCollapse3" accordion>
          <zch-collapse-item title="This is panel header 1" name="1">
            <template slot="title">
              This is panel header 1
              <zch-icon icon="star"></zch-icon>
            </template>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 2" name="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 3" name="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 4" name="4">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
        </zch-collapse>

        <script>
          export default {
            data() {
              return {
                activeCollapse: ['1']
              };
            },
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code4: `
        <zch-collapse v-model="activeCollapse4">
          <zch-collapse-item title="This is panel header 1" name="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 2" disabled name="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 3" name="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
          <zch-collapse-item title="This is panel header 4" name="4">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </zch-collapse-item>
        </zch-collapse>

        <script>
          export default {
            data() {
              return {
                activeCollapse: ['1']
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
