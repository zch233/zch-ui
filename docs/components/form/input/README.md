# Input 输入框

::: danger
Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰符。
:::

<ClientOnly>
  <form-input></form-input>
</ClientOnly>

<form-input-attr></form-input-attr>
