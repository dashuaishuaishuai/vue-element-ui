const tagViews = {
  state: {
    visitedViews: []
  },
  mutations: {
    addTagView(state, view) {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push({
          name: view.name,
          key: view.key,
          component: view.component
        }
      )
    },
    delTagView(state, view) {
      state.visitedViews.forEach((it, index) => {
        if (it.path === view.path) state.visitedViews.splice(index, 1);
      });
    }
  },
}
export default tagViews
