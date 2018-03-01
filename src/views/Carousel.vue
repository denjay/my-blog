<template>
  <div class="wrapper">
      <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="article in articles_recommend" :key="article.index">
        <router-link :to="'/articles/' + article.article_id"></router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles_recommend: [
        { article_id: 1, pic: '1.jpg'},
        { article_id: 2, pic: '2.jpg'},
        { article_id: 3, pic: '3.jpg'},
        { article_id: 4, pic: '4.jpg'},
      ]
    }
  }
}
</script>

<style scoped>
  .wrapper {
    border-radius: 5px;
    margin: 0px 10px 0px 10px;
    padding: 10px;
    background-color: #83a3c79f
 }
</style>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
