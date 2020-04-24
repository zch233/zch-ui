<template>
  <div>
    <pre v-html="code">
    </pre>
  </div>
</template>

<script>
export default {
  name: 'CodeBar',
  props: {
    code: HTMLDivElement,
  }
}
</script>


<style lang="scss" scoped>
</style>