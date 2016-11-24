<template>
  <player :hands="hands"></player>
</template>
<script>
  import Player from './Player'
  export default {
    name: 'bloods',
    components: {
      Player
    },
    datas () {
      return {
        hands: [[1,1,1,1,1,1,1,1,1],[2,0,1,1],[]]
      }
    }
  }
</script>
