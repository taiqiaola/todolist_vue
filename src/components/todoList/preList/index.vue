<template>
  <div class="listSty">
    <a-checkbox :value="data.key" :disabled="type !== 'done' && !data.isTodo">
      <span :title="data.value">{{ data.value }}</span>
    </a-checkbox>
    <a-button size="small" @click="deleteItem(data.key)">
      Remove
    </a-button>
  </div>
</template>

<script>
import { Button, Checkbox } from "ant-design-vue";
import "./index.less";

export default {
  name: "preList",
  props: ["type", "data", "deleteItem"],
  components: {
    "a-button": Button,
    "a-checkbox": Checkbox,
  },
};
</script>
