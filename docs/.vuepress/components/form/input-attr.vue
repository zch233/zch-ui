<template>
  <div class="base">
    <section>
      <h1>Input Attributes</h1>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td class="des">类型</td>
              <td class="type">String</td>
              <td>text，textarea 和其他 <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">原生 input 的 type 值</a></td>
              <td>text</td>
            </tr>
            <tr>
              <td>value / v-model</td>
              <td class="des">绑定值</td>
              <td class="type">String / Number</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>maxlength</td>
              <td class="des">原生属性，最大输入长度</td>
              <td class="type">Number</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>minlength</td>
              <td class="des">原生属性，最小输入长度</td>
              <td class="type">Number</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td class="des">输入框占位文本</td>
              <td class="type">String</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td class="des">是否可清空</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>password</td>
              <td class="des">是否显示切换密码图标</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>rows</td>
              <td class="des">输入框行数，只对 <span class="code">type="textarea"</span> 有效</td>
              <td class="type">Number</td>
              <td>—</td>
              <td>2</td>
            </tr>
            <tr>
              <td>name</td>
              <td class="des">原生属性</td>
              <td class="type">String</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td class="des">原生属性，是否只读</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>max</td>
              <td class="des">原生属性，设置最大值</td>
              <td class="type">—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>min</td>
              <td class="des">原生属性，设置最小值</td>
              <td class="type">—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>step</td>
              <td class="des">原生属性，设置输入字段的合法数字间隔</td>
              <td class="type">—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>label</td>
              <td class="des">输入框关联的label文字</td>
              <td class="type">String</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h1>Input Slots</h1>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th class="des">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>prepend</td>
              <td class="des">输入框前置内容，只对 <span class="code">type="text"</span> 有效</td>
            </tr>
            <tr>
              <td>append</td>
              <td class="des">输入框后置内容，只对 <span class="code">type="text"</span> 有效</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h1>Input Events</h1>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>事件名称</th>
              <th class="des">说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>blur</td>
              <td class="des">在 Input 失去焦点时触发</td>
              <td>(value: String | Number)</td>
            </tr>
            <tr>
              <td>focus</td>
              <td class="des">在 Input 获得焦点时触发</td>
              <td>(value: String | Number)</td>
            </tr>
            <tr>
              <td>change</td>
              <td class="des">在 Input 改变时触发</td>
              <td>(value: String | Number)</td>
            </tr>
            <tr>
              <td>input</td>
              <td class="des">在 Input 输入时触发</td>
              <td>(value: String | Number)</td>
            </tr>
            <tr>
              <td>clear</td>
              <td class="des">在点击由 <span class="code">clearable</span> 属性生成的清空按钮时触发</td>
              <td>—</td>
            </tr>
            <tr>
              <td>keyup</td>
              <td class="des">在 Input 输入键盘弹起时触发</td>
              <td>(value: String | Number)</td>
            </tr>
            <tr>
              <td>keydown</td>
              <td class="des">在 Input 输入键盘按下时触发</td>
              <td>(value: String | Number)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
