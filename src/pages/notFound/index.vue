<template>
  <div class="notFoundBox">
    <div class="card">
      <h1>找不到页面</h1>
      <p>看起来你输入了一个此网站上不存在的URL。</p>
      <router-link to="/"><LeftOutlined /> 回到我们的网站</router-link>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { LeftOutlined } from "@ant-design/icons-vue";
import "./index.less";

export default {
  name: "notFound",
  data() {
    return {};
  },
  components: {
    LeftOutlined,
    "router-link": RouterLink,
  },
  methods: {},
};
</script>
