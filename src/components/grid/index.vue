<template>
  <div>
    <grid :config="config"></grid>
  </div>
</template>
<script>
  import Grid from './Grid'
  import config from './config.mock'
  export default {
    name: 'grid-panel',
    components: {
      Grid
    },
    data () {
      return {
        config
      }
    }
  }
</script>
<style>
</style>
