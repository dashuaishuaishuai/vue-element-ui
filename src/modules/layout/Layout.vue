<template>
  <el-container class="el-container wrapper">
    <el-aside class="el-aside aside" width="200px">
      <!-- 滚动条 -->
      <el-header></el-header>
      <el-scrollbar class="el-scrollbar">
        <side-bar></side-bar>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header class="el-header header" height="70px">Header</el-header>
      <el-main class="el-main-my">
        <tag-bar></tag-bar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import SideBar from '@/components/side-bar'
  import TabBag from '@/components/tag-bar'

  export default {
    name: "LayOut",
    components: {
      "side-bar": SideBar,
      "tag-bar":TabBag,

    },

  }
</script>

<style>

</style>

