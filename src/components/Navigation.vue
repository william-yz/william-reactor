<template>
    <el-menu default-active="/cs" :router="true">
      <el-submenu index="/cs">
        <template slot="title">CS</template>
        <el-menu-item index="/cs">CS</el-menu-item>
      </el-submenu>
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
