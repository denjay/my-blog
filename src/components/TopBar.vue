<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
    <el-submenu index="2">
        <template slot="title">文章分类</template>
        <el-menu-item index="2-1">技术</el-menu-item>
        <el-menu-item index="2-2">生活</el-menu-item>
        <el-menu-item index="2-3">笔记</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><router-link to="/about">关于本站</router-link></el-menu-item>
    <el-menu-item index="4"><router-link to="/login">{{ status }}</router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
        return {
            status: localStorage.token ? '退出': '登录'
        }
    }
}
</script>

<style scoped>
    div {
        margin-bottom: 10px;
    }
</style>

<style>
    li[class="el-menu-item"]:last-child {
        float: right;
    }
</style>
