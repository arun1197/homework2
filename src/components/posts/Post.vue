<template>
  <div class="posts">
      <div class="text item">
        <el-card class="box-card">
          <div class="number">
            <p># {{ post.id }}</p>
          </div>
          <div class="title">
            <span>Title: {{ post.name }}</span>
          </div>
          <div class="content">
            <p>Content: {{ post.content }}</p>
          </div>
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

.box-card {
  background-color: #ffff00;
}
.title {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
	font-size: 21px;
	font-variant: normal;
	font-weight: 400;
	line-height: 30px;
  font-style: normal;
}
.content {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
	font-size: 14px;
	font-style: normal;
	font-variant: normal;
	font-weight: 400;
	line-height: 20px;
}
.number {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
	font-size: 18px;
	font-style: normal;
	font-variant: normal;
	font-weight: 400;
	line-height: 18.5714px;
}

</style>
