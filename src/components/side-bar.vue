<!-- 左侧导航组件 -->
<!-- 使用说明：<side-bar></side-bar> -->
<template>
  <!-- 循环生成侧栏菜单 -->
  <el-menu  mode="vertical" active-text-color="#FFFFF" background-color="#2B303B" text-color="hsla(0,0%,100%,.7)">
    <menu-bar :menu="menu"></menu-bar>
  </el-menu>

</template>
<script>
  import Menu from './menu-bar'
  import {get} from "../axios"

  export default {
    name: "sidebar",
    components: {
      "menu-bar": Menu
    },
    data() {
      return {
        userName: localStorage.userName || "游客",
        menu: [],
      };
    },
    computed: {},
    created() {
      this.getMenu();
    },
    methods: {
      async getMenu() {
        let data = await get("/json/menu.json", "");
        this.menu = data.data;
      },

    }
  };
</script>
<style lang="scss">

</style>
