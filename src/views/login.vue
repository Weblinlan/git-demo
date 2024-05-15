<template>
  <div>
    <div class="bg-[#FDFBFC] h-[100vh] pb-[12vw]">
      <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
        <Icon icon="icon-park:left" class="text-[6vw]" />
        <div class="text-[4vw] text-[#696969]">游客登录</div>
      </div>
      <img
        src="@/assets/logo.fill.svg"
        class="w-[38vw] mx-auto mt-[7vw] mb-[9vw]"
        alt=""
      />
      <div class="relative" v-if="!show">
        <img :src="keyimgUrl" class="w-[40vw] h-[40vw] m-auto relative z-[1]" />
      </div>
      <div v-else>
        <van-button type="primary" @click="$router.push('/me')"
          >跳转页面</van-button
        >
      </div>
      <div class="text-[3vw] text-[#100A09] text-center mt-[10vw]">
        使用
        <span class="text-[#2C6AA1] mx-[1.5vw]"> 网易云音乐APP </span>
        扫码登录
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { getkey, getkeyimg, getstate } from "@/service";
import { useRequest } from "@/hooks";
import { data } from "autoprefixer";

const keyWord = ref("");
const keyimgUrl = ref("");
const show = ref(false);
let interval; // 初始化一个定时器
// 内地
const { data: key } = useRequest(() => getkey(), {
  formateResult(response) {
    return response.data.data.unikey;
  },
});

// 使用 watch 替代 watchEffect
watch(
  () => key.value, // 观察 key 的变化
  (newValue, oldValue) => {
    keyWord.value = newValue;
    if (!interval) {
      interval = setInterval(fetchState, 1000); // 每秒调用 fetchState
    }
  }
);

watch(
  () => key.value, // 观察 key 的变化
  (newValue) => {
    keyWord.value = newValue;

    const { data } = useRequest(() => getkeyimg({ key: keyWord.value }), {
      formateResult(response) {
        return response.data.data.qrimg;
      },
    });
    // 当异步请求完成时，更新 keyimgUrl
    watch(data, (newUrl) => {
      keyimgUrl.value = newUrl;
    });
  },
  { immediate: false } // 不立即执行，因为我们依赖于 key 的初始值
);
// 每两秒发起一次请求
function fetchState() {
  // 获取当前时间的毫秒时间戳
  const nowMilliseconds = Date.now();
  // 将毫秒时间戳转换为秒时间戳
  const nowSeconds = Math.floor(nowMilliseconds / 1000);
  
  const { data, run } = useRequest(
    () => getstate({ key: keyWord.value, time: nowSeconds }),
    {
      formateResult(response) {
        return response.data;
      },
    }
  );
  // 使用 watch 观察 data 的变化
  watch(
    () => data.value,
    (newCode, oldCode) => {
      // 每当 data.code 更新时，这个回调将被调用
      if (newCode.code === 803) {
        console.log(newCode.cookie);
        localStorage.setItem("UsenameCookie", newCode.cookie);
        show.value = true;
      }
    }
  );
}
</script>
<style></style>
