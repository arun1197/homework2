<template>
  <!-- <div class="post">
    <el-table stripe style="width: 100%">
      <el-table-column label="Name" width="180">
        <span>{{ post.name }}</span>
        <p>{{ post.content }}</p>
      </el-table-column>
      <el-table-column label="Address">
        <el-button type="primary" icon="plus">code</el-button>
      </el-table-column>
    </el-table>
  </div> -->
  <div class="post">
    <span>Title: {{ post.name }}</span>
    <p>Content: {{ post.content }}</p>
  </div>

</template>


<script>

export default {
  name: 'post',
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

</style>
