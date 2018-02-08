<template>
  <div>
      <b>热门文章</b><i class="el-icon-more right"></i>
      <hr>
      <div v-bind="articles">
          <p v-for="article in articles" v-bind:key="article.index">
            <a :href="'/#/articles/' + article.article_id">
              {{ article.article_title }}
            </a>
            </p>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return {
          articles: []
        }
    },
    mounted() {
      this.$axios.get("http://127.0.0.1:5000/api/1_0/articles")
      .then(response => {
          console.log(response);
          this.articles = response.data
      })
    }
}
</script>

<style scoped>
    div {
        max-width: 300px;
        margin: 10px auto;
        padding: 1px 10px;
        background-color: white;
    }
    p {
        margin: 5px;
        text-align: left;
    }
    i {
        font-size: 20px;
        margin: 5px 10px;
    }
    .right {
        float: right;
    }
</style>
