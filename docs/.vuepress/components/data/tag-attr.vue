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
              <td>type</td>
              <td class="des">类型</td>
              <td class="type">String</td>
              <td>success / info / warning / danger / success / info / warning / error / magenta / red / orange / gold / lime / green / cyan / blue / geekblue / purple</td>
              <td>—</td>
            </tr>
            <tr>
              <td>closable</td>
              <td class="des">是否可关闭</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>color</td>
              <td class="des">背景色</td>
              <td class="type">String</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>size</td>
              <td class="des">尺寸</td>
              <td class="type">String</td>
              <td>medium / small / mini</td>
              <td>—</td>
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
              <th class="type">回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>click</td>
              <td class="des">点击 Tag 时触发的事件</td>
              <td class="type">—</td>
            </tr>
            <tr>
              <td>close</td>
              <td class="des">关闭 Tag 时触发的事件</td>
              <td class="type">	—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
