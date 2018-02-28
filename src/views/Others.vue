<template>
  <div class="container shadow">
      <p><b>热门文章</b><i class="el-icon-more right"></i></p>
      <hr>
      <div v-bind="articles">
            <p v-for="article in articles" v-bind:key="article.index">
                <router-link :to="'/articles/' + article.article_id">{{ article.article_title }}</router-link>
                <!-- <a :href="'/#/articles/' + article.article_id"></a> -->
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
      this.$axios.get("http://127.0.0.1:5000/api/1_0/articles_hot")
      .then(response => {
          this.articles = response.data
      })
    }
}
</script>

<style scoped>
    .container {
        border-radius: 5px;
        max-width: 300px;
        margin: 0px 10px 10px 10px;
        padding: 1px 10px;
        background-color: #71D38C;
    }
    p {
        margin: 5px;
        text-align: left;
    }
    i {
        font-size: 20px;
        margin: 3px 10px;
    }
    .right {
        float: right;
    }
    hr { 
        border: none;
        border-top: 1px solid rgba(0, 102, 204, 0.459);
        margin-bottom: 0px 
    }
</style>
