<template>
  <div>
    <div>
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">博客主页</el-menu-item>
      <el-submenu index="2">
          <template slot="title">所有文章</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><router-link to="/about">关于本站</router-link></el-menu-item>
      </el-menu>
    </div>

    <div class="content">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
          <el-container>
            <el-header>顶栏</el-header>
            <el-main>
            <articles-list>内容区</articles-list>
            </el-main>
            <el-footer>底部栏</el-footer>
          </el-container>
        </el-col >
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <others></others>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ArticlesList from './ArticlesList'
import Others from './Others'
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      ArticlesList,
      Others,
    }
};
</script>

<style>
  .content {
    max-width: 1200px;
    margin: auto;
    background-color: #E9EEF3;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 20px 0px;
  }
</style>
