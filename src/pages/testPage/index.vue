<template>
  <div class="testPageBox">
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import "./index.less";

export default {
  name: "testPage",
  data() {
    return {};
  },
  components: {
    "router-view": RouterView,
  },
  methods: {},
};
</script>
