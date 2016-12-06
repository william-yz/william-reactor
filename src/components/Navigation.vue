<template>
    <el-menu default-active="/rxjs" :router="true">
      <el-submenu index="/rxjs">
        <template slot="title">Learning-rxjs</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="/rxjs/filtering">Filtering Operators</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/other">
        <template slot="title">Other</template>
        <el-menu-item index="/grid">Grid</el-menu-item>
        <el-menu-item index="/character">Character</el-menu-item>
        <el-menu-item index="/table">Bloods</el-menu-item>
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
