<template>
  <div class="base">
    <section>
      <h1>Collapse Attributes</h1>
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
              <td class="des">当前激活的面板(如果是手风琴模式，绑定值类型需要为 <span class="code">String</span> ，否则为 <span class="code">Array</span> )</td>
              <td class="type">String / Array / Number</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <th>accordion</th>
              <th class="des">是否手风琴模式</th>
              <th class="type">Boolean</th>
              <th>—</th>
              <th>false</th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h1>Collapse Events</h1>
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
              <th>change</th>
              <td class="des">当前激活的面板(如果是手风琴模式，绑定值类型需要为 <span class="code">String</span> ，否则为 <span class="code">Array</span> )</td>
              <th>(activeNames: Array / String / Number)</th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h1>Collapse Item Attributes</h1>
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
              <td>name</td>
              <td class="des">唯一标志符</td>
              <td class="type">String / Array / Number</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <th>title</th>
              <th class="des">面板标题</th>
              <th class="type">String</th>
              <th>—</th>
              <th>—</th>
            </tr>
            <tr>
              <th>disabled</th>
              <th class="des">是否禁用</th>
              <th class="type">Boolean</th>
              <th>—</th>
              <th>—</th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
