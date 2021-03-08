<template>
  <a-config-provider :locale="zh_CN">
    <div class="appBox">
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>

<script>
import { RouterView } from "vue-router";
import { ConfigProvider, message } from "ant-design-vue";
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "./common/css/global.less";
import "./App.less";

moment.locale("zh-cn");

message.config({
  maxCount: 1,
});

export default {
  name: "app",
  data() {
    return {
      zh_CN,
    };
  },
  components: {
    "a-config-provider": ConfigProvider,
    "router-view": RouterView,
  },
};
</script>
