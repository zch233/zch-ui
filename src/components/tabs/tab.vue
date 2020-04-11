<template>
  <div class="zchTab">
    <div class="zchTab-header">
      <zch-tab-bar ref="zchTabBar"></zch-tab-bar>
      <zch-tab-nav ref="zchTabNav" v-for="(item, index) in panes" :key="item.name || index" :pane="item"></zch-tab-nav>
    </div>
    <div class="zchTab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ZchTabBar from './tab-bar'
import ZchTabNav from './tab-nav'
import Vue from 'vue'

export default {
  name: 'ZchTab',
  components: {
    ZchTabBar,
    ZchTabNav,
  },
  props: {
    value: {},
  },
  data () {
    return {
      panes: [],
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    this.calcPaneInstances()
    this.eventBus.$on('click', (value, { $el: navElement }) => {
      this.$emit('input', value)
      const { width, left } = navElement.getBoundingClientRect()
      const { left: tabLeft } = this.$el.getBoundingClientRect()
      this.$refs.zchTabBar.$el.style.width = `${width}px`
      this.$refs.zchTabBar.$el.style.left = `${left - tabLeft}px`
    })
  },
  methods: {
    calcPaneInstances () {
      const paneSlots = this.$slots.default.filter(vnode => vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'ZchTabPane');
      this.panes = paneSlots.map(({ componentInstance }) => componentInstance)
      this.$nextTick(() => {
        this.$refs.zchTabNav.map(v => {
          v.pane.name === this.value && this.eventBus.$emit('click', this.value, v)
        })
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.zchTab {
  &-header {
    display: flex;
    border-bottom: 2px solid #e4e7ed;
    margin-bottom: 15px;
    position: relative;
  }
}
</style>