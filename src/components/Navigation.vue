<template>
    <el-menu default-active="/grid" :router="true">
      <el-menu-item index="/grid">Grid</el-menu-item>
      <el-menu-item index="/character">Character</el-menu-item>
      <el-menu-item index="/table">Bloods</el-menu-item>
    </el-menu>
</template>
<script>
export default {
  name: 'navigation',
  data () {
    return {
    }
  }
}
</script>
