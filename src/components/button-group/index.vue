<template>
  <div class="zch-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  $buttonRadius: 4px;
 .zch-button-group {
   display: inline-flex;
   vertical-align: middle;
   :not(:first-child) {
     margin-left: -1px;
   }
   > * {
     border-radius: 0;
   }
   :first-child {
     border-top-left-radius: $buttonRadius;
     border-bottom-left-radius: $buttonRadius;
   }
   :last-child {
     border-top-right-radius: $buttonRadius;
     border-bottom-right-radius: $buttonRadius;
   }
 }
</style>