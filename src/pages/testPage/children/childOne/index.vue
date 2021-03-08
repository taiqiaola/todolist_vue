<template>
  <div class="childOneBox">
    <div class="boxTitle">这是一个ChildOne页面</div>
    <a-button @click="getCurrentRouteName()">
      获取当前路由名称
    </a-button>
    <p>当前路由名称为：{{ currentRouteName }}</p>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
import "./index.less";

export default {
  name: "childOne",
  data() {
    return {
      currentRouteName: "",
    };
  },
  components: {
    "a-button": Button,
  },
  methods: {
    getCurrentRouteName() {
      this.currentRouteName = this.$route.path;
    },
  },
};
</script>
