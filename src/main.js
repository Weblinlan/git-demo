import { createApp } from "vue";
import App from "./2App.vue";

//* 映入路由
import router from "./router";

// * 组件抽屉等
import Antd from "ant-design-vue";

import Button from "./components/button";
import Input from "./components/Input.vue";

const app = createApp(App);
app.component("co-input", Input);
app.use(Button);

import "./style.css";

app
  .use(Antd)

  .use(router)

  .mount("#app");

/**
 * 自定义组合函数
 * 介绍一下 vue3和vue2 生命周期的对应关系
 *
 *! 注意！！！ 如果使用async setup 生命周期函数的注册 必须在第一个await语法之前
 * beforeCreate  setup
 * created       setup
 * beforeMount   onBeforeMount
 * mounted       onMounted
 * beforeUpdate  onBeforeUpdate
 * updated       onUpdated
 * beforeDestroy onBeforeUnmount
 * destroyed     onUnmounted
 * Vue3 语法糖 （更加简洁的Vue3语法）<script setup>
 *
 */
