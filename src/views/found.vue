<template>
  <div>{{ count }}</div>
  <div>{{ index }}</div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const count = ref(123);
    const index = ref(234);
    const updataCount = () => count.value++;
    const updataindex = () => index.value--;
    // watch的第一个参数表示你监听的数据源
    // 第一个参数规范：ref 或者 ()=> ref.value

    // watch(index, () => {
    //   console.log("count更新");
    // });
    watch(
      () => count.value,
      () => {
        console.log("count更新");
      },
      {
        // 该watch的毁掉函数的初始化
        immediate: true,
        deep: true,
      }
    );
    // 多个数据变化后执行的逻辑是相同的
    // watch([count, index], () => {
    //   console.log("更新了");
    // });

    return { count, updataCount, updataindex, index };
  },
};
</script>
