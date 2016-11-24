<template>
  <el-button
    class="card"
    style="margin-right:2px;"
    @click="onClick(card)"
    :type="getType(card.type)">
    {{card.value + 1}}
  </el-button>
</template>
<script>
  export default {
    name: 'card',
    props: ['card', 'onClick'],
    methods: {
      getType (type) {
        return {
          '0': 'success',
          '1': 'primary',
          '2': 'danger'
        }[type]
      }
    }
  }
</script>
<style>
  .card:hover {
    top: -5px;
    position: relative;
  }
</style>
