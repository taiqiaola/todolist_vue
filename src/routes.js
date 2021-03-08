import { TodoList, TestPage, NotFound } from "./pages";
import { ChildOne, ChildTwo, TestView } from "./pages/testPage";

const routes = [
  {
    path: "/",
    redirect: "/testpage",
  },
  {
    path: "/todolist",
    name: "todoList",
    component: TodoList,
  },
  {
    path: "/testpage",
    name: "testPage",
    component: TestPage,
    children: [
      {
        path: "",
        component: TestView,
      },
      {
        path: "childone",
        component: ChildOne,
      },
      {
        path: "childtwo",
        component: ChildTwo,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
