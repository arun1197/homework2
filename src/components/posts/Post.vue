<template>
  <div class="posts">
      <div class="text item">
        <el-card class="box-card">
          <p># {{ post.id }}</p>
          <span>Title: {{ post.name }}</span>
          <p>Content: {{ post.content }}</p>
        </el-card>
      </div>
  </div>
</template>


<script>

export default {
  name: 'posts',
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
  padding-right: 50px;
}

</style>
