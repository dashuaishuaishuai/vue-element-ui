<template>
  <div>
    <div v-for="item in menu" :key="item.key">
      <el-submenu v-if="item.children && item.children.length>0" :key="item.key" :index="item.key">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <menu-bar :menu="item.children"></menu-bar>
      </el-submenu>
      <el-menu-item v-if="!item.children || item.children.length===0"
                    :key="item.key"
                    :index="item.key"
                    @click="addTagView(item)">
        <i :class="item.icon"></i>
        <span slot="title">{{item.key}}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: "menu-bar",
    props: {
      menu: {
        type: Array,
        require: true
      }
    },
    created() {
    },
    methods: {
      ...mapMutations([
        'addTagView',
      ]),
    }
  }
</script>

<style scoped lang="scss">


</style>
