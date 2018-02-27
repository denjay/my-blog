<template>
  <div class="shadow">
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
        margin: 0px auto;
        margin-bottom: 20px;
        padding: 1px 10px;
        background-color: white;
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
        margin-bottom: 0px 
    }
</style>
