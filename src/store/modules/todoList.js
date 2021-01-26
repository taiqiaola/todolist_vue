export const storeTodoList = {
  namespaced: true,
  state: {
    listKey: 4,
    allData: [
      { key: 1, value: "这是一条待处理数据", isTodo: true },
      { key: 2, value: "这是一条已处理数据", isTodo: false },
      { key: 3, value: "这是另一条待处理数据", isTodo: true },
    ],
  },
  getters: {
    todoData: (state) => state.allData.filter((i) => i.isTodo),
    todoCount: (state, getters) => getters.todoData.length,
  },
  mutations: {
    increaseListKey(state) {
      state.listKey++;
    },
    updateAllData(state, payload) {
      state.allData = payload.data;
    },
  },
  actions: {},
};
