import Vue from 'vue';
import {tabs} from "./components"

class tabPlugin {
  open(item, param = {}) {
    console.log(param);
    let component = tabs.filter(it => it.key === item.key)
    if (component) {
      Vue.component(component.name,component.component)
    }
    this.$store.commit('addTagView')
  }
}

export default {
  install(Vue) {
    Vue.mixin({
      beforeCreate() {
        let tab;
        Object.defineProperty(this, '$tabPlugin', {
          //lazy初始化
          get() {
            if (typeof tab === 'undefined')
              tab = new tabPlugin();
            return tab;
          }
        })
      }
    });
  }
}

