<template>
  <div class="zch-loading"><div class="zch-loading-round"></div></div>
</template>

<script>
export default {
  name: 'ZchLoading',
}
</script>

<style lang="scss" scoped>
@keyframes zch-loading-rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.zch-loading {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  overflow: hidden;
}

.zch-loading .zch-loading-round {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid #409eff;
  border-left-color: transparent;
  animation: zch-loading-rotate 1s linear infinite;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>