<template>
  <a-config-provider :locale="zh_CN">
    <div class="appBox">
      <TodoList />
    </div>
  </a-config-provider>
</template>

<script>
import { ConfigProvider } from "ant-design-vue";
import { TodoList } from "./components";
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "./common/css/global.less";
import "./App.less";

moment.locale("zh-cn");

export default {
  name: "app",
  data() {
    return {
      zh_CN,
    };
  },
  components: {
    "a-config-provider": ConfigProvider,
    TodoList,
  },
};
</script>
