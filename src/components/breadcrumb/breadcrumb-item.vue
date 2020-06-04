<template>
  <div class="zchBreadcrumb-item">
    <span :class="['inner', to && 'is-link']" @click="handleClick"><slot></slot></span>
    <span class="separator">{{ separator }}</span>
  </div>
</template>

<script>
export default {
  name: 'ZchBreadcrumbItem',
  props: {
    to: {
      type: String || Object
    },
    replace: Boolean
  },
  inject: ['separator'],
  methods: {
    handleClick () {
      this.$emit('click')
      const { to, $router } = this;
      if (!to || !$router) return;
      this.replace ? $router.replace(to) : $router.push(to);
    }
  }
}
</script>

<style lang="scss" scoped>
  .zchBreadcrumb-item {
    font-weight: 400;
    color: #606266;
    cursor: text;
    font-size: 14px;
    display: flex;
    align-items: center;
    .inner {
      > a {
        font-weight: 700;
        text-decoration: none;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
        color: #303133;
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
      &.is-link {
        font-weight: 700;
        text-decoration: none;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
        color: #303133;
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
    }
    .separator {
      margin: 0 9px;
      font-weight: 700;
      color: #c0c4cc;
      font-size: 12px;
    }
    &:last-child {
      .separator {
        display: none;
      }
    }
  }
</style>