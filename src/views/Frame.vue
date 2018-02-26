<template>
  <div>
    <top-bar></top-bar>
    <div class="content">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
          <router-view></router-view>
        </el-col >
        <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
          <others></others>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Article from './Article'
import TopBar from '@/components/TopBar'
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
      TopBar,
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
    padding: 0px;
  }
</style>
