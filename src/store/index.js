import Vue from 'vue'
import Vuex from 'vuex'
//存储页签全局状态
import tagViews from './modules/tag-view'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    tagViews
  }
})
