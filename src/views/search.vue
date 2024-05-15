<template>
  <div>
    <div
      class="bg-[#F4F4F4] dark:bg-[#1a1c23] h-[100vh] overflow-auto pb-[12vw]"
    >
      <div class="pb-[5vw]">
        <!-- 搜索框 -->
        <div
          class="w-[100vw] h-[20vw] p-[3vw] pl-[2vw] flex justify-between items-center"
        >
          <div>
            <Icon
              icon="ph:arrow-left-thin"
              class="text-[#000] dark:text-[#e9e9e9] text-[30px]"
              @click="$router.push('/Home')"
            />
          </div>
          <!-- 搜索框 -->
          <div class="relative">
            <form action="/">
              <van-search
                v-model="inputValue"
                show-action
                :placeholder="searchcontent"
              />
            </form>
          </div>
          <div class="font-semibold text-[3.7vw] text-[#283349]" @click="lists">
            搜索
          </div>
        </div>
        <!-- 搜索的雷荣 -->
        <div v-if="inputValue" class="fixed h-[100vh] z-10 bg-white">
          <div
            class="h-[12vw] ml-[3.6vw] flex items-center"
            v-for="item in searchWordlist"
            :key="item"
          >
            <Icon icon="material-symbols:search" />
            <div
              class="dark:border-[#282a31] dark:text-[#e7e7e8] border-b-[2px] text-[3.5vw] w-[93vw] h-[12vw] leading-[12vw] ml-[1.8vw]"
            >
              {{ item.name }}
            </div>
          </div>
        </div>

        <!-- 下面 -->
        <div>
          <div class="flex justify-around mt-[3vw]">
            <div
              class="border-r-[1px] border-[#d0cfd7] flex w-[25vw] justify-center items-center"
            >
              <Icon icon="arcticons:my-spectrum" style="color: red" />
              <p
                class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]"
              >
                歌手
              </p>
            </div>
            <div
              class="border-r-[1px] border-[#d0cfd7] flex w-[25vw] justify-center items-center"
            >
              <Icon icon="ph:book-fill" style="color: red" />
              <p
                class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]"
              >
                曲风
              </p>
            </div>
            <div
              class="border-r-[1px] border-[#d0cfd7] flex w-[25vw] justify-center items-center"
            >
              <Icon icon="ri:music-fill" style="color: red" />
              <p
                class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]"
              >
                专区
              </p>
            </div>
            <div class="flex w-[25vw] justify-center items-center">
              <Icon icon="ph:microphone-fill" style="color: red" />
              <p
                class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]"
              >
                识曲
              </p>
            </div>
          </div>
          <div class="mt-[5vw]">
            <!-- 猜你喜欢 -->
            <div class="flex justify-between px-[3vw]">
              <h1
                class="font-[600] text-[4vw] text-[#283349] dark:text-[#e9e9e9]"
              >
                猜你喜欢
              </h1>
              <Icon
                icon="lucide:refresh-ccw"
                style="color: rgb(172, 175, 174)"
              />
            </div>
            <!-- 歌曲 -->
            <div class="flex px-[3vw] flex-wrap h-[23vw] overflow-hidden">
              <!-- 渲染 -->
              <div
                class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]"
                v-for="item in yourLove"
                :key="item.score"
              >
                {{ item.searchWord }}
              </div>
            </div>
          </div>
        </div>
        <!-- 列表 -->
        <div class="overflow-hidden mt-[5vw]">
          <BetterScroll :option="{ scrollX: true }">
            <div
              v-for="item in serchlist"
              :key="item.id"
              class="flex"
              style="
                transition-duration: 500ms;
                transform: translateX(0px);
                width: 2437.5px;
              "
            >
              <div
                class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
                style="width: 243.75px"
              >
                <!-- 榜单 -->
                <div
                  class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
                >
                  <span
                    class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                    >{{ item.name }}</span
                  >
                  <div
                    class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
                  >
                    <Icon
                      icon="ph:play"
                      class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw]"
                    />
                    <span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
                      >播放</span
                    >
                  </div>
                </div>
                <!-- 列表 -->

                <div class="pr-[2vw]">
                  <div class="my-[2.7vw] flex items-center h-[8vw]">
                    <div
                      class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                      style="color: red"
                    ></div>
                    <span
                      class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
                      >{{ item.name }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </BetterScroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, watchEffect } from "vue";
import { useRequest } from "@/hooks";
import {
  getsearch,
  getsearchlist,
  getYouLove,
  getlist,
  museicdata,
} from "@/service";
import BetterScroll from "../components/BetterScroll.vue";
// 搜索框
const inputValue = ref("");
const onSearch = (val) => showToast(val);
const onCancel = () => showToast("取消");
const searchcontent = ref(""); //搜索框里的placeholder
const serchlist = ref(); //列表
const yourLove = ref(); //猜你喜欢
const searchWordlist = ref();
const search = ref();
// 搜索框里的placeholder的请求
const { data } = useRequest(getsearch, {
  manual: true,
  formateResult(response) {
    return response.data.data.showKeyword;
  },
});

// 列表内容的请求
const { data: listData } = useRequest(getsearchlist, {
  formateResult(response) {
    return response.data.list;
  },
});

// 猜你喜欢
const { data: Love } = useRequest(getYouLove, {
  formateResult(response) {
    return response.data.data;
  },
});

// 搜索的内容
const { data: ddddd, run: lists } = useRequest(
  () => getlist(inputValue.value),
  {
    formateResult(response) {
      return response.data.result.songs;
    },
  }
);

//处理所有的id
const getid = () => {
  // 创建一个数组来收集所有的 Promise

  const promises = listData?.value?.map((item) => {
    return useRequest(() => museicdata({ numid: item.id }));
  });

  // 使用 Promise.all 来等待所有的 Promise 解决
  Promise.all(promises)
    .then((songsArrays) => {
      // 所有请求都成功解决后，songsArrays 是一个包含每个请求结果数组的数组
      search.value = songsArrays;
      // 这里可以进一步处理所有歌曲数据
    })
    .catch((error) => {
      // 如果任何一个请求失败，这里会捕获到错误
      console.log("错误");
    });
};

watchEffect(() => {
  searchcontent.value = data.value; //搜索框里的placeholder
  serchlist.value = listData.value; // 排行榜里的内容
  getid();
  yourLove.value = Love.value; //猜你喜欢
  searchWordlist.value = ddddd.value;
});
</script>
