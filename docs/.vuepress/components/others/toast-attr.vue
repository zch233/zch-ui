<template>
  <div class="base">
    <section>
      <h1>Options</h1>
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
              <td>message</td>
              <td class="des">消息文字</td>
              <td class="type">String</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>type</td>
              <td class="des">主题</td>
              <td class="type">success / warning / info / error</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>enabledHTML</td>
              <td class="des">是否将 message 属性作为 HTML 片段处理</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>duration</td>
              <td class="des">显示时间, 毫秒。设为 0 则不会自动关闭</td>
              <td class="type">Number</td>
              <td>—</td>
              <td>3000</td>
            </tr>
            <tr>
              <td>showClose</td>
              <td class="des">是否显示关闭按钮</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>center</td>
              <td class="des">文字是否居中</td>
              <td class="type">Boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>position</td>
              <td class="des">toast 出现的位置</td>
              <td class="type">top / middle / bottom</td>
              <td>—</td>
              <td>top</td>
            </tr>
              <td>beforeClose</td>
              <td class="des">关闭时的回调函数, 参数为被关闭的 message 实例</td>
              <td class="type">Function</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
