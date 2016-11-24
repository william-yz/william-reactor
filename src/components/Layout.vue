<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <navigation>

        </navigation>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>

</template>
<script>
import Navigation from './Navigation'
export default {
  name: 'layout',
  components: {
    Navigation
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
