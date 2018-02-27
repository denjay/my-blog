<template>
  <div class="shadow">
    <el-container>
      <el-header><b>所有文章</b></el-header>
      <el-main>
        <ui v-bind="articles">
          <li v-for="article in articles" v-bind:key="article.index">
            <router-link :to="'/articles/' + article.article_id">
              <el-button type="primary" size="mini">{{ article.article_title }}</el-button>
            </router-link>
            <br>
            {{ article.article_content }}
            <br>
            <span><i class="el-icon-view"></i>{{ article.click }}</span>
            <span class="right"><i class="el-icon-date"></i>{{ article.article_date | date_only }}</span>
          </li>
        </ui>
      </el-main>
      <el-footer>底部栏</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
    data(){
        return {
            articles: [
                {'article_title': '默认博客', 'article_content': '表示axios请求没收到数据'},
            ]
        }
    },
    mounted() {
        this.$axios.get("http://127.0.0.1:5000/api/1_0/articles")
        .then(response => {
            this.articles = response.data
        })
    },
    filters: {
      date_only(datetime) {
        return datetime.split(" ")[0]
      }
    }
}
</script>

<style scoped>
  div {
    margin-bottom: 20px;
  }
  li {
    background-color: white;
    border: 1px solid rgba(0, 255, 21, 0.24);
    padding: 5px;
    margin: 10px;
    line-height: 30px;
    text-align: left;
    list-style: none;
  }
  li b {
    padding: 3px;
    border-bottom: 1px solid ;
  }
  li:hover {
    background: rgba(0, 255, 21, 0.24);
  }
  .right {
    float: right;
  }
</style>
