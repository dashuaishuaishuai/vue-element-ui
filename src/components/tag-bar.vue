<template>
  <el-tabs type="border-card" closable v-model="getActiveTabName"  @tab-remove="delTagView">
    <el-tab-pane
        v-for="(item) in getTabs"
        :key="item.key"
        :name="item.label"
    >
      <template slot="label">
        <el-popover
            v-model="item.contextmenu"
            placement="right-start"
            trigger="manual">
          <div @click="refresh(item)" style="width: 100px !important;">
            <i class="el-icon-refresh"></i><span>刷新页面</span>
          </div>
          <span slot="reference"
                @contextmenu.prevent="item.contextmenu=true"
                @blur="item.contextmenu=false"
               >
                {{item.label}}
              </span>
        </el-popover>
      </template>
      <component
          v-bind:is="item.
          component"
          class="tab" :tab="item"
      ></component>
    </el-tab-pane>
  </el-tabs>

</template>

<script>
  import User from "@/modules/user"
  import Role from "@/modules/role"
  import {mapMutations} from 'vuex'
  export default {
    name: "tag-bar",
    components: {
      "user": User,
      "role": Role,
    },
    created() {

    },
    data() {
      return {
        currentTab: "home",
        tabs: [],
        isShow:false
      }
    },
    methods: {
      ...mapMutations([
        'addTagView',
        'refresh',
        'delTagView',
      ]),
    },
    computed: {
      getTabs: {
        set(val) {
          console.log(val);
        },
        get() {
          return this.$store.state.tagViews.visitedViews;
        }
      },
      getActiveTabName: {
        get() {
          return this.$store.state.tagViews.activeTabName;
        },
        set(val) {
          console.log(val);
        },
      }
    }

  }
</script>

<style scoped lang="scss">

</style>
