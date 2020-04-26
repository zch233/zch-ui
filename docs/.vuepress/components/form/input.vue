<template id="tem">
  <div>
    <h3>基础用法</h3>
    <div class="block">
      <div class="source">
        <zch-input v-model="input1" placeholder="请输入内容"></zch-input>
      </div>
      <code-bar :code="code1"></code-bar>
    </div>
    <h3>禁用状态</h3>
    <div class="block">
      <div class="source">
        <zch-input v-model="input2" disabled placeholder="请输入内容"></zch-input>
      </div>
      <code-bar title="通过 disabled 属性指定是否禁用 input 组件" :code="code2"></code-bar>
    </div>
    <h3>可清空</h3>
    <div class="block">
      <div class="source">
        <zch-input v-model="input3" clearable placeholder="请输入内容"></zch-input>
      </div>
      <code-bar title="使用 clearable 属性即可得到一个可清空的输入框" :code="code3"></code-bar>
    </div>
    <h3>密码框</h3>
    <div class="block">
      <div class="source">
        <zch-input v-model="input4" password placeholder="请输入密码"></zch-input>
      </div>
      <code-bar title="使用 password 属性即可得到一个可切换显示隐藏的密码框" :code="code4"></code-bar>
    </div>
    <h3>文本域</h3>
    <h5>用于输入多行文本信息，通过将 type 属性的值指定为 textarea。</h5>
    <div class="block">
      <div class="source">
        <zch-input v-model="input5" :rows="2" :cols="40" type="textarea" placeholder="请输入内容"></zch-input>
      </div>
      <code-bar title="文本域可通过 rows、cols 属性控制" :code="code5"></code-bar>
    </div>
    <h3>复合型输入框</h3>
    <div class="block">
      <div class="source">
        <zch-input v-model="input6" placeholder="请输入内容">
          <template slot="prepend">Https://</template>
        </zch-input>
      </div>
      <div class="source">
        <zch-input v-model="input7" placeholder="请输入内容">
          <template slot="append">.com</template>
        </zch-input>
      </div>
      <div class="source">
        <zch-input v-model="input8" placeholder="请输入内容">
          <template slot="append"><zch-icon icon="search"></zch-icon></template>
        </zch-input>
      </div>
      <code-bar title="可通过 slot 来指定在 input 中前置或者后置内容。" :code="code6"></code-bar>
    </div>
  </div>
</template>

<script>
import ZchInput from "../../../../src/components/input/index";
import ZchIcon from "../../../../src/components/icon/index";
import CodeBar from "../utils/CodeBar";
import "../style.scss";

export default {
  name: "inputExample",
  components: {
    ZchInput,
    ZchIcon,
    CodeBar
  },
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      code1: `
        <zch-input v-model="input" placeholder="请输入内容"></zch-input>
        <script>
          export default {
            data() {
              return {
                input: ''
              }
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code2: `
        <zch-input v-model="input" disabled placeholder="请输入内容"></zch-input>

        <script>
          export default {
            data() {
              return {
                input: ''
              }
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code3: `
        <zch-input v-model="input" clearable placeholder="请输入内容"></zch-input>

        <script>
          export default {
            data() {
              return {
                input: ''
              }
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code4: `
        <zch-input v-model="input" password placeholder="请输入密码"></zch-input>

        <script>
          export default {
            data() {
              return {
                input: ''
              }
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code5: `
        <zch-input v-model="input" :rows="2" :cols="40" type="textarea" placeholder="请输入内容"></zch-input>

        <script>
          export default {
            data() {
              return {
                input: ''
              }
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code6: `
        <zch-input v-model="input1" placeholder="请输入内容">
          <template slot="prepend">Https://</template>
        </zch-input>
        <zch-input v-model="input2" placeholder="请输入内容">
          <template slot="append">.com</template>
        </zch-input>
        <zch-input v-model="input3" placeholder="请输入内容">
          <template slot="append"><zch-icon icon="search"></zch-icon></template>
        </zch-input>

        <script>
          export default {
            data() {
              return {
                input1: '',
                input2: '',
                input3: '',
              }
            }
          }
        <\/script>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
