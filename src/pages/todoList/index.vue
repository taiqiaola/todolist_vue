<template>
  <div class="todoListBox">
    <div class="boxTitle">TodoList By Vue</div>
    <div class="boxContent">
      <div class="inputBox">
        <a-input v-model:value="inputValue" v-on:keyup.enter="onAddList" placeholder="enter some info..." />
        <a-button type="primary" @click="onAddList">
          <template #icon>
            <PlusOutlined />
          </template>
        </a-button>
      </div>

      <div class="listBox">
        <div v-if="getCurrentData().length > 0">
          <a-checkbox-group v-model:value="checkedList" @change="onCheckGroupChange">
            <a-row>
              <a-col class="preList" :span="24" v-for="item in getCurrentData()" :key="item.key">
                <PreList :type="type" :data="item" :deleteItem="onDeleteItem" />
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
        <div class="noList" v-else>
          <a-empty>
            <template #description>
              <span>暂无{{ noListText() }}数据</span>
            </template>
          </a-empty>
        </div>
      </div>

      <div class="footerBox">
        <a-checkbox v-model:checked="checkAll" :indeterminate="getIndeterminate()" @change="onCheckAllChange" :disabled="getCurrentData().length === 0" />
        Type:
        <a-radio-group size="small" :value="type" @change="onHandleTypeChange">
          <a-radio-button value="all">
            All
          </a-radio-button>
          <a-radio-button value="todo">
            Todo
          </a-radio-button>
          <a-radio-button value="done">
            Done
          </a-radio-button>
        </a-radio-group>
        <span v-if="getCurrentData().length > 0">
          <a-button size="small" @click="onDeal(true)" v-if="type === 'done'" :disabled="this.checkedList.length === 0">
            标为未处理
          </a-button>
          <a-button size="small" @click="onDeal(false)" v-else :disabled="this.checkedList.length === 0">
            标为已处理
          </a-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Input, Radio, Checkbox, Empty, Row, Col, message } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { PreList } from "./components";
import "./index.less";

export default {
  name: "todoList",
  data() {
    return {
      inputValue: "",
      type: "all",
      listKey: 4,
      allData: [
        { key: 1, value: "这是一条待处理数据", isTodo: true },
        { key: 2, value: "这是一条已处理数据", isTodo: false },
        { key: 3, value: "这是另一条待处理数据", isTodo: true },
      ],
      checkAll: false,
      checkedList: [],
    };
  },
  components: {
    "a-button": Button,
    "a-input": Input,
    "a-radio-group": Radio.Group,
    "a-radio-button": Radio.Button,
    "a-checkbox": Checkbox,
    "a-empty": Empty,
    "a-checkbox-group": Checkbox.Group,
    "a-row": Row,
    "a-col": Col,
    PlusOutlined,
    PreList,
  },
  methods: {
    noListText() {
      let txt = "";
      if (this.type === "todo") {
        txt = "待办";
      } else if (this.type === "done") {
        txt = "已办";
      }
      return txt;
    },
    getCurrentData() {
      let currentData;
      if (this.type === "all") {
        currentData = this.allData;
      } else if (this.type === "todo") {
        currentData = this.allData.filter((i) => i.isTodo);
      } else if (this.type === "done") {
        currentData = this.allData.filter((i) => !i.isTodo);
      }
      return currentData;
    },
    getIndeterminate() {
      return this.checkedList.length > 0 && this.checkedList.length < this.getCurrentData().length;
    },
    onAddList() {
      if (!this.inputValue) {
        message.info("输入框不可为空");
        return;
      }
      const addData = [
        {
          key: this.listKey,
          value: this.inputValue,
          isTodo: true,
        },
      ];
      this.allData = this.allData.concat(addData);
      this.listKey = this.listKey + 1;
      this.inputValue = "";
      message.success("新增成功");
    },
    onDeleteItem(key) {
      this.allData = this.allData.filter((i) => i.key !== key);
    },
    onHandleTypeChange(e) {
      this.type = e.target.value;
      this.checkAll = false;
      this.checkedList = [];
    },
    onCheckGroupChange(list) {
      this.checkAll = list.length === this.getCurrentData().length;
      this.checkedList = list;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? this.getCurrentData().map((i) => i.key) : [],
      });
    },
    onDeal(bol) {
      const newData = this.allData
        .filter((i) => i)
        .map((i) => {
          if (this.checkedList.indexOf(i.key) > -1) {
            return {
              ...i,
              isTodo: bol,
            };
          } else {
            return i;
          }
        });
      this.allData = newData;
      this.checkedList = [];
      this.checkAll = false;
    },
  },
};
</script>
