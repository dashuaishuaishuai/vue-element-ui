<template>
  <el-tabs type="border-card" closable>
    <el-tab-pane
        v-for="(item) in tabs"
        :key="item.key"
        :label="item.label"
        :name="item.name"
    >
      <el-button @click="refresh(item.name)">刷新</el-button>
      <component
          v-bind:is="item.component"
          class="tab"
      ></component>
    </el-tab-pane>
  </el-tabs>

</template>

<script>
  import User from "@/modules/user"
  import Role from "@/modules/role"

  let i=0;
  export default {
    name: "tag-bar",
    components:{
      "user":User,
      "role":Role,
    },
    created(){

    },
    data() {
      return {
        currentTab: "home",
        tabs: [
          {key: 'user', name: 'user', component: 'user', label: '用户管理'},
          {key: 'role', name: 'role', component: 'role', label: '角色管理'}
        ]
      }
    },
    methods: {
      refresh(name) {
        console.log(name);
        const component = this.tabs.find(c => c.name === name);
        const label = component.label
        const newTab = {
          key: `${component.name}_${++i}`,
          name: component.name,
          label,
          component: component.component,
        };
        if (this.tabs.find(t => t.label === label)) {
          this.tabs = this.tabs.map(oldTab => oldTab.label === label ? newTab : oldTab)
        }
        console.log(this.tabs)
      }
    }

  }
</script>

<style scoped>

</style>
