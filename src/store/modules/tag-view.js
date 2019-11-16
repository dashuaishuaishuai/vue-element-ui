const tagViews = {
  state: {
    visitedViews: [],
    activeTabName: ""
  },
  mutations: {
    addTagView(state, tab) {
      state.activeTabName = tab.label;
      if (state.visitedViews.some(v => v.component === tab.component)) return;
      state.visitedViews.push({
          key: tab.key,
          label: tab.label,
          component: tab.component,
          param: tab.param
        }
      )
    },
    refresh(state, tab) {
      state.visitedViews.forEach((it, index) => {
        if (it.component === tab.component) state.visitedViews[index].key = state.visitedViews[index].key + Math.random();
      });
    },

    delTagView(state) {
      state.visitedViews.forEach((it, index) => {
        if (it.label === state.activeTabName) {
          state.visitedViews.splice(index,1);
          state.activeTabName =state.visitedViews[state.visitedViews.length-1]?.label;
        }
      });
    }
  },
}
export default tagViews
