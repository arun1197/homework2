<template>
  <div class="new-post">
    <h1>Add new post</h1>
    <el-form label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="post.name" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="Content">
        <el-input type="textarea" v-model="post.content" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <span style="flex: 1"></span>
        <div class="subtn">
          <el-button type="primary" @click.native="createPost">Save</el-button>
        </div>
        <span style="flex: 1"></span>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import PostsApi from '../../api/posts.js'
import router from '../../router'

export default {
  name: 'new-post',
  data () {
    return {
      post: {
        name: '',
        content: ''
      }
    }
  },
  methods: {
    createPost () {
      PostsApi.createPost(this.post,
        function (_post) {
          router.push({ name: 'Posts.index' })
        }
      )
    }
  }
}
</script>

<style scoped>
  .new-post {
    padding-top: 40px;
    padding-right: 40px;
  }
  .subtn {
    padding-right: 80px;
  }

</style>
