<template>
  <div v-highlight class="codeWrapper">
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <pre v-show="codeVisible" ref="code">
        <code>{{ code }}</code>
      </pre>
    </transition>
    <div class="codeExpand" @click="toggleCodeVisible">
      <zch-icon :class="{ expand: codeVisible }" icon="caret-down"></zch-icon>
      <span>{{ codeVisible ? '隐藏代码' : '显示代码' }}</span>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import ZchIcon from '../../../../src/components/icon/index'
import Velocity from 'velocity-animate'

export default {
  name: 'CodeBar',
  components: { ZchIcon },
  props: {
    code: String,
  },
  directives: {
    highlight: {
      inserted: function (el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block)=>{
          hljs.highlightBlock(block)
        })
      }
    }
  },
  data () {
    return {
      codeVisible: true,
    }
  },
  mounted () {
    const { height } = this.$refs.code.getBoundingClientRect()
    this.height = height + 'px'
    this.codeVisible = false
  },
  methods: {
    toggleCodeVisible () {
      this.codeVisible = !this.codeVisible
    },
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter (el, done) {
      Velocity(el, { opacity: 1, height: this.height }, { duration: 300 })
    },
    leave (el, done) {
      Velocity(el, {
        height: 0,
        opacity: 0
      }, { complete: done })
    }
  },
}
</script>

<style lang="scss" scoped>
.codeWrapper {
  border-top: 1px solid #ebebeb;
  margin-top: 24px;
  > pre {
    margin: 0;
    border-radius: 0;
    box-sizing: border-box;
    padding-top: 0;
    padding-bottom: 0;
    opacity: 0;
  }
}
.codeExpand {
  text-align: center;
  display: flex;
  align-items: center;
  height: 3em;
  cursor: pointer;
  justify-content: center;
  svg {
    fill: #d3dce6;
    transition: all .2s;
    &.expand {
      transform: rotate(180deg);
    }
  }
  span {
    display: inline-block;
    transition: all .3s;
    width: 0;
    opacity: 0;
    white-space:nowrap;
    margin-left: 1em;
    overflow:hidden;
  }
  &:hover {
    svg {
      fill: #409eff;
    }
    span {
      color: #409eff;
      width: 4em;
      opacity: 1;
    }
  }
}
</style>
