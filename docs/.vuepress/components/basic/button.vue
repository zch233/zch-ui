<template>
  <div class="block">
    <div class="source">
      <div>
        <zch-button>默认按钮</zch-button>
        <zch-button type="primary">主要按钮</zch-button>
        <zch-button type="success">成功按钮</zch-button>
        <zch-button type="warning">警告按钮</zch-button>
        <zch-button type="info">信息按钮</zch-button>
        <zch-button type="error">失败按钮</zch-button>
      </div>
      <div>
        <zch-button round>圆角按钮</zch-button>
        <zch-button round type="primary">主要按钮</zch-button>
        <zch-button round type="success">成功按钮</zch-button>
        <zch-button round type="warning">警告按钮</zch-button>
        <zch-button round type="info">信息按钮</zch-button>
        <zch-button round type="error">失败按钮</zch-button>
      </div>
      <div>
        <zch-button size="large">大型按钮</zch-button>
        <zch-button size="large" circle icon="setting"></zch-button>
        <zch-button>正常按钮</zch-button>
        <zch-button circle icon="setting"></zch-button>
        <zch-button size="mini">小型按钮</zch-button>
        <zch-button size="mini" circle icon="setting"></zch-button>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import ZchButton from '../../../../src/components/button/index'

export default {
  name: 'ButtonExample',
  components: { ZchButton },
}
</script>


<style lang="scss" scoped>
@import "../style.scss";
.source {
  padding: 24px;
  > div {
    margin-bottom: 20px;
  }
}
</style>