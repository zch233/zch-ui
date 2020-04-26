<template>
  <div class="base">
    <section>
      <h1>Tabs Attributes</h1>
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
              <td>value / v-model</td>
              <td class="des">绑定值，选中选项卡的 name</td>
              <td class="type">String</td>
              <td>—</td>
              <td>第一个选项卡的 name</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h1>Tabs Events</h1>
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
              <td>click</td>
              <td class="des">tab 被点击时触发</td>
              <td>被选中的标签 tab 实例</td>
            </tr>
            <tr>
              <td>change</td>
              <td class="des">tab 切换时触发</td>
              <td>被选中的标签 tab 实例</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h1>Tab-pane Attributes</h1>
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
              <td>label</td>
              <td class="des">选项卡标题</td>
              <td class="type">String</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td class="des">是否禁用</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>lazy</td>
              <td class="des">标签是否延迟渲染</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
