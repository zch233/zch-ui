<template>
  <div class="base">
    <section>
      <h1>Attributes</h1>
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
              <td>trigger</td>
              <td class="des">触发方式</td>
              <td class="type">String</td>
              <td>click/hover</td>
              <td>hover</td>
            </tr>
            <tr>
              <td>title</td>
              <td class="des">显示的标题，也可以通过 <span class="code">slot</span> 传入 DOM</td>
              <td class="type">String</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>content</td>
              <td class="des">显示的内容，也可以通过 <span class="code">slot</span> 传入 DOM</td>
              <td class="type">String</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>position</td>
              <td class="des">出现位置</td>
              <td class="type">String</td>
              <td>top / left / bottom / right</td>
              <td>top</td>
            </tr>
            <tr>
              <td>value / v-model</td>
              <td class="des">状态是否可见</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h1>Slot</h1>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td class="des">Popover 内嵌 HTML 文本</td>
            </tr>
            <tr>
              <td>title</td>
              <td class="des">触发 Popover 显示的标题 HTML 元素</td>
            </tr>
            <tr>
              <td>content</td>
              <td class="des">触发 Popover 显示的内容 HTML 元素</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h1>Events</h1>
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
              <td>open</td>
              <td class="des">显示时触发</td>
              <td>—</td>
            </tr>
            <tr>
              <td>close</td>
              <td class="des">隐藏时触发</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
