<template>
  <div class="zchTabNav" :data-name="pane.name" @click="handleNavClick" :class="[active && 'zchTabNav-active', pane.disabled && 'zchTabNav-disabled']">
    <div v-if="pane.labelEnabledHtml" v-html="pane.label"></div>
    <div v-else>{{ pane.label }}</div>
  </div>
</template>

<script>
export default {
  name: 'ZchTabNav',
  props: {
    pane: Object,
  },
  data () {
    return {
      active: '',
    }
  },
  inject: ['eventBus'],
  created () {
    this.eventBus && this.eventBus.$on('click', value => {
      this.active = value === this.pane.name
    })
  },
  methods: {
    handleNavClick () {
      if (this.pane.disabled) return
      this.eventBus && this.eventBus.$emit('click', this.pane.name, this)
    }
  }
}
</script>


<style lang="scss" scoped>
.zchTabNav {
  margin: 0 10px;
  padding: 0 10px;
  height: 40px;
  transition: all .3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  &-disabled {
    color: rgba(0,0,0,.25);
    cursor: not-allowed;
    pointer-events: none;
  }
  &-active {
    color: #409eff;
  }
  &:hover {
    color: #409eff;
  }
  &:nth-child(2) {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>