<template>
    <ui v-bind="articles">
        <li v-for="(article, index) in articles" v-bind:key="article.index">
            <b>{{ index }} {{ article.article_title }}</b>
            <br>
            {{ article.article_content }}
            <br>
            <span><i class="el-icon-view"></i>{{ article.click }}</span>
            <span class="right"><i class="el-icon-date"></i>{{ article.article_date | date_only }}</span>
        </li>
    </ui>
</template>

<script>
export default {
    data(){
        return {
            articles: [
                {'article_title': '第一篇博客', 'article_content': '随便看看啊'},
            ]
        }
    },
    mounted() {
        this.$axios.get("http://127.0.0.1:5000/api/1_0/articles")
        .then(response => {
            console.log(response);
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
    li {
        border: 1px solid rgba(0, 255, 21, 0.24);
        margin: 10px 0px;
        padding: 5px;
        line-height: 30px;
        text-align: left;
    }
    li:hover {
        background: rgba(0, 255, 21, 0.24);
    }
    .right {
        float: right;
    }
</style>
