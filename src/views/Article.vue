<template>
  <div class="content shadow">
    <b>{{ article.article_title }}</b>
    <hr>
    <div>
      {{ article.article_content }}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return { article:{} }
  },
  methods:{
    get_article(){
      this.$axios.get("http://127.0.0.1:5000/api/1_0/articles/" + this.$route.params.article_id)
      .then(response => {
      this.article = response.data
      })
    }
  },
  mounted(){
    this.get_article()
  },
  watch:{
      '$route':'get_article'
  },
}
</script>

<style scoped>
  .content {
    min-height: 500px;
    padding: 5px;
    background-color: white;
  }
</style>
