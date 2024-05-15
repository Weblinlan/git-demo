<template>
  <div>
    <!-- <h1>{{ a }}</h1>
    <button @click="updataA()">a++</button> -->
    <co-drawer :open="isopen"></co-drawer>
    <button @click="!isopen">打开抽屉</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const a = ref(123);
    const updataA = () => a.value++;
    // 优点
    // watchEffect是不需要手动指定监听数据的
    // 自动判断需要监听谁！！！
    // 默认执行第一次
    // 缺点：无法确定监听数据变化前后的最新值 只能获取跟新后的最新值
    const stopwatch = watchEffect(() => {
      console.log(a.value);
    });

    const isopen = ref(false);
    return { a, stopwatch, updataA, isopen };
  },
};
</script>

<style></style>
