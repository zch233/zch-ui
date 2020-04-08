<template>
  <div class="zchToast-wrapper">
    <p class="zchToast-content">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'ZchToast',
  props: {
    message: String,
  }
}
</script>


<style lang="scss" scoped>
.zchToast {
  &-wrapper {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &-content {
    background-color: rgba(50, 50, 51, 0.88);
    padding: 15px 15px 15px 20px;
    color: #fff;
    margin: 0;
    border-radius: 4px;
  }
}
</style>