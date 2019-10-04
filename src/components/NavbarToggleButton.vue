<template>
  <button class="navbar-toggler" type="button"
          data-toggle="collapse"
          :data-target="target"
          :aria-controls="target"
          :aria-expanded="toggle"
          aria-label="Toggle navigation">
  </button>
</template>
<script>
 export default {
   props: {
     target: [String, Number],
     toggled: {
       type: Boolean,
       default: false
     }
   }
 }
</script>
<style>
</style>
