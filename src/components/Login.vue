<template>
  <div>
    <el-col :span="4" :offset="10">
      <el-card class="box-card" >
        <el-input
          class="login-input"
          placeholder="Username"
          :maxlength="10"
          v-model="username">
        </el-input>
        <el-button type="primary" @click="login()">Login</el-button>
      </el-card>
    </el-col>

  </div>
</template>
<script>
export default {
  name: 'login',
  date () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      // this.$http.post('http://localhost:3000/login', {username: this.username})
    }
  }
}
</script>
<style>
  .login-input {
    padding-bottom: 10px;
  }
</style>
