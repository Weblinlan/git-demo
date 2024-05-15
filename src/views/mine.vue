<template>
  <div ref="eleDiv">mine</div>
  <co-button ref="btn" @click="fn" abc="abc">按钮</co-button>
  <co-input v-model:value="username" @abc="f" />
  <!-- v-model：属性名=’属性值‘ -->
  <!-- ：属性名=’属性值‘ @update：属性名= （e）=>e.targert.vale -->
  <h1>{{ username }}</h1>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const eleDiv = ref();
    // eleDiv是引用数据类型 + 获取eleDiv.value的过程是一个异步过程
    // console.log(eleDiv); // 可以在控制台看到
    // console.log(eleDiv.value); // 看不到
    onMounted(() => console.log(eleDiv.value));
    const fn = () => console.log("button clicked!");
    const btn = ref();
    onMounted(() => console.log("btn: round", btn.value.round));
    onMounted(() => console.log("btn: a1", btn.value.a1));
    onMounted(() => console.log("btn: f1", btn.value.f1));

    const username = ref("123");
    const f = (arg) => {
      console.log(arg);
    };

    // 
    return { eleDiv, fn, btn, username, f };
  },
};
</script>
