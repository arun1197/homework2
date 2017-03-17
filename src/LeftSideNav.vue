<template>
  <div>
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link :to="{ name: 'Posts.new' }">
          <el-button type="success">Add new</el-button>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ name: 'Posts.index' }">
          <el-button type="warning">View Post</el-button>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <el-button type="danger" @click.native="logout">Logout</el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import UsersApi from './api/users.js'

export default {
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      console.log('methods.logout')
      UsersApi.logout()
    }
  }
}
</script>

<style lang="css">
</style>
