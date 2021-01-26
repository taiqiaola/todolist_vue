import { createStore } from "vuex";
import { storeTodoList } from "./modules/todoList";

// Create a new store instance.
export const store = createStore({
  modules: {
    todoList: storeTodoList,
  },
});
