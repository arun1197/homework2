<template>
  <div class="posts">
    <h1>View post</h1>
    <el-card class="box-card">
      <div v-for="post in posts" :key="post.id" class="text item">
        <el-card class="box-card">
          <router-link :to="{ name: 'Posts.show', params: {id: post.id } }">
            <iccs340-post :post='post'></iccs340-post>
          </router-link>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'

export default {
  name: 'posts',
  components: {
    Iccs340Post: require('./Post')
  },
  data () {
    return {
      posts: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    PostsApi.getPosts(_posts => {
      _next(vm => {
        vm.posts = _posts
      })
    })
  },
  watch: {
    $route () {
      PostsApi.getPosts(_posts => {
        this.posts = _posts
      })
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

</style>
