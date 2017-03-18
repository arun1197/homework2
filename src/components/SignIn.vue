<template>
  <div class="sign-in">
    <h1>Willkommen auf der Loginseite</h1>
    <el-form label-width="120px" class="demo-ruleForm">
      <el-form-item label="Email">
        <el-input v-model="email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import UsersApi from '@/api/users.js'
import router from '@/router/index.js'

export default {
  name: 'sign-in',
  data () {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      UsersApi.login(this.email, this.pass, function (_response) {
        // NOTE: Posts.index is not yet implemented
        router.push({ name: 'Posts.index' })
      })
    }
  }
}
</script>

<style scoped>
</style>
