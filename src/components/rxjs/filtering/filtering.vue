<template>
  <div>
    // <div v-for="x in range">{{x}}</div>
    <sub-x></sub-x>
    <el-button class="minus">Minus 1</el-button>
    {{count}}
  </div>
</template>
<script>
  import Rx from 'rxjs'
  import subX from './subX'
  console.log(subX)
  // var s = subX.subscriptions()
  export default {
    name: 'filtering',
    methods: {
      click () {

      }
    },
    components: {
      subX
    },
    subscriptions () {
      console.log(this)
      var plus$ = this.$fromDOMEvent('.minus', 'click').map(e => -1)
      var minus$ = this.$fromDOMEvent('.minus', 'click').map(e => -1)
      var count$ = Rx.Observable.merge(plus$, minus$)
        .startWith(0)
        .scan((total, change) => total + change)
      return {
        count: count$
      }
    }
  }
</script>
