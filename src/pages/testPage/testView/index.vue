<template>
  <div class="testViewBox">
    <div class="boxTitle">这是一个测试页面</div>
    <a-button type="primary" @click="goToTodoList()">
      跳到TodoList
    </a-button>
    <a-button type="link" @click="onDeal('childone')">
      跳到ChildOne
    </a-button>
    <a-button type="link" @click="onDeal('childtwo')">
      跳到ChildTwo
    </a-button>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
import "./index.less";

export default {
  name: "testView",
  data() {
    return {};
  },
  components: {
    "a-button": Button,
  },
  methods: {
    goToTodoList() {
      this.$router.push("todolist");
    },
    onDeal(p) {
      this.$router.push({
        path: `${this.$route.path}/${p}`,
      });
    },
  },
};
</script>
