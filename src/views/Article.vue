<template>
  <div class="article shadow">
    <h3>{{ article.article_title }}</h3>
    <hr>
    <div class="content">
      {{ article.article_content }}
    </div>
      <hr>
    <div class="comment">
      <p v-if="loggedIn">{{ username }}，留下你的评论吧！</p>
      <p v-else>请<router-link to="/login">登录</router-link>再留言</p>
      <el-form>
        <el-form-item>
            <el-input type="textarea" rows="4" v-model="form.comment"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" :disabled="!loggedIn" @click="onSubmit" size="mini">提交评论</el-button>
        </el-form-item>
      </el-form>
      <br>
      <ul v-if="comments" v-bind="comments">
        <li v-for="comment in comments" v-bind:key="comment.index">
          {{ comment.username}}
          {{ comment.date }}
          {{ comment.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return { 
      form :{
        comment: ''
      },
      article:{},
      comments: {},
      loggedIn: false,
      username: '',
    }
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
    this.get_article();
    if (localStorage.token) {
      this.loggedIn = true;
      this.username = localStorage.username;
    };
  },
  watch:{
      '$route':'get_article'
  },
}
</script>

<style scoped>
  .article {
    padding: 15px;
    background-color: white;
    margin-bottom: 20px;
  }
  hr {
    height:1px; 
    border:none; 
    border-top:1px dashed rgba(0, 102, 204, 0.459);
    margin: 10px 0px;
  }
  .content {
    min-height: 300px;
    text-align: left;
    text-indent: 2em;
  }
  .comment {
    text-align: left;
  }
  .comment > p {
    font-size: 14px;
  }
  .el-form-item {
    margin: 2px;
  }
  button {
    float: right;
  }
</style>
