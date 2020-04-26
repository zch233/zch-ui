<template>
  <div class="base">
    <section>
      <h1>Attributes</h1>
      <p class="des">
        组件将被渲染为
        <span class="code">button</span> 标签，因此你可以使用所有的
        <span class="code">button</span> 原生属性。
      </p>
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
              <td>size</td>
              <td class="des">尺寸</td>
              <td class="type">String</td>
              <td>large / mini</td>
              <td>—</td>
            </tr>
            <tr>
              <td>type</td>
              <td class="des">类型</td>
              <td class="type">String</td>
              <td>primary / success / warning / danger / info</td>
              <td>—</td>
            </tr>
            <tr>
              <td>round</td>
              <td class="des">是否圆角按钮</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>circle</td>
              <td class="des">是否圆形按钮</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td class="des">是否加载中状态</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td class="des">是否禁用状态</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>icon</td>
              <td class="des">图标类名</td>
              <td class="type">String</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>native-type</td>
              <td class="des">原生 type 属性</td>
              <td class="type">String</td>
              <td>button / submit / reset</td>
              <td>button</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
