import Vue from 'vue'
import App from './App.vue'
import ElementUI  from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import tabPlugin from './plugins/tabs/tab-plugin'
import Bus from './plugins/bus'

Vue.config.productionTip = false

Vue.use(tabPlugin);
Vue.use(ElementUI);
Vue.use(Bus);
Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
