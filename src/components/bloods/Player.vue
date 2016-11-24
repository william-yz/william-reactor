<template>
  <div>
    <span v-for="card in cards">
      <card :card="card" :onClick="putCard"></card>
    </span>
  </div>

</template>
<script>
  import Card from './Card'
  import _ from 'lodash'
  export default {
    name: 'player',
    props: ['hands'],
    components: {
      Card
    },
    computed: {
      cards () {
        const cards = []
        _.each(this.hands, (colors, type) => {
          _.each(colors, (v, value) => {
            for (var i = 0; i < v; i++) {
              cards.push({
                type,
                value
              })
            }
          })
        })
        return cards
      }
    },
    methods: {
      putCard (card) {
        debugger
      }
    }
  }
</script>
