<template>
  <player :hands="hands"></player>
</template>
<script>
  import Player from './Player'
  export default {
    name: 'table',
    components: {
      Player
    },
    data () {
      return {
        hands: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1],
          [2, 0, 1, 1],
          []]
      }
    }
  }
</script>
