<template>
  <div class="base">
    <section>
      <h1>Row Attributes</h1>
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
              <td>gutter</td>
              <td class="des">栅格间隔</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>0</td>
            </tr>
            <tr>
              <td>tag</td>
              <td class="des">自定义元素标签</td>
              <td class="type">String</td>
              <td>*</td>
              <td>div</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h1>Col Attributes</h1>
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
              <td>span</td>
              <td class="des">栅格占据的列数</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>24</td>
            </tr>
            <tr>
              <td>offset</td>
              <td class="des">栅格左侧的间隔格数</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>0</td>
            </tr>
            <tr>
              <td>phone</td>
              <td class="des"><span class="code">&lt;576px</span> 响应式栅格数或者栅格属性对象</td>
              <td class="type">Number / Object (例如： {span: 4, offset: 4})</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>pad</td>
              <td class="des"><span class="code">≥576px</span> 响应式栅格数或者栅格属性对象</td>
              <td class="type">Number / Object (例如： {span: 4, offset: 4})</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>narrow-pc</td>
              <td class="des"><span class="code">≥768px</span> 响应式栅格数或者栅格属性对象</td>
              <td class="type">Number / Object (例如： {span: 4, offset: 4})</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>pc</td>
              <td class="des"><span class="code">≥992px</span> 响应式栅格数或者栅格属性对象</td>
              <td class="type">Number / Object (例如： {span: 4, offset: 4})</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>wide-pc</td>
              <td class="des"><span class="code">≥1200px</span> 响应式栅格数或者栅格属性对象</td>
              <td class="type">Number / Object (例如： {span: 4, offset: 4})</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
