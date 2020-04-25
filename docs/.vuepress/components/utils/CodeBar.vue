<template>
  <div v-highlight>
    <pre>
      <code>{{ code }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'
//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
import 'highlight.js/styles/monokai-sublime.css'

export default {
  name: 'CodeBar',
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
  mounted () {
    this.$nextTick(() => {
    console.log(this.code)
    })
  },
}
</script>


<style lang="scss" scoped>
</style>