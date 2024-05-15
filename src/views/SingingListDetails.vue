<template>
  <div class="pb-[12vw]">
    <!-- 头部 -->
    <div
      class="h-[70vw] transition-all duration-20 0 relative pb-[5vw] pl-[3.9vw] pr-[3.4vw] pt-[13.5vw]"
      :style="{ backgroundColor: randomColor, height: headerHeight }"
    >
      <div
        class="a2 pl-[3.9vw] pr-[3.4vw] h-[13.5vw] flex items-center justify-between"
        :style="{ backgroundColor: randomColor }"
      >
        <!-- 歌单 -->
        <div class="flex items-center" @scroll="handleScroll">
          <van-icon
            name="arrow-left"
            class="text-[#fff] text-[7vw]"
            @click="$router.push('/Home')"
          />
          <div
            v-if="showWored"
            class="w-[42vw] h-[13.5vw] flex items-center overflow-hidden relative"
          >
            <div class="text-[4.2vw] text-[#fff] ml-[4.7vw] relative">歌单</div>
          </div>
          <div class="w-[42vw] overflow-hidden" v-else>
            <div
              class="w-[42vw] h-[13.5vw] flex items-center overflow-hidden text-[#fff] relative scroll-left"
            >
              <span> {{ museicWord?.name }}</span>
            </div>
          </div>
        </div>

        <!-- 图标 -->
        <div class="flex items-center">
          <van-icon name="weapp-nav" class="text-[7vw] text-[#fff] mr-[5vw]" />
          <van-icon name="audio" class="text-[7vw] text-[#fff] mr-[5vw]" />
        </div>
      </div>

      <div class="transition-all">
        <div v-if="!show">
          <div class="h-[29vw] flex pt-[2.6vw] justify-between">
            <div class="w-[24vw] h-[24vw] pt-[1vw] relative">
              <img
                :src="museicWord?.coverImgUrl"
                class="w-[24vw] h-[24vw]"
                alt=""
              />
            </div>
            <div class="w-[67vw] pr-[12vw]">
              <p class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">
                {{ museicWord?.name }}
              </p>

              <div class="h-[10.5vw] flex items-center">
                <img
                  class="w-[6vw] h-[6vw] rounded-[50%]"
                  :src="museicWord?.creator.avatarUrl"
                  alt=""
                />
                <span
                  class="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50"
                  >{{ museicWord?.creator.nickname }}</span
                >

                <span
                  class="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]"
                >
                  <Icon
                    class="text-[4vw] text-[#fff] iconify iconify--material-symbols"
                    icon="material-symbols-light:add"
                    style="color: #ffffff"
                  />关注</span
                >
              </div>

              <div class="flex">
                <div
                  class="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]"
                  v-for="item in museicWord?.tags"
                  :key="item"
                >
                  <span class="text-[2.2vw]">{{ item }}</span>
                  <Icon
                    icon="mingcute:right-line"
                    style="color: #ffffff"
                    class="text-[4vw] ml-[0.6vw] iconify iconify--ep"
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            class="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw] justify-between"
          >
            <span
              class="text-[#fff] opacity-50 text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden"
              >{{ museicWord?.description }}</span
            >

            <Icon
              icon="mingcute:right-line"
              style="color: #ffffff"
              class="text-[4vw] ml-[0.6vw] iconify iconify--ep"
            />
          </p>
        </div>
        <div v-if="show">
          <div
            class="h-[10vw] flex items-center justify-between text-[#fff] opacity-50 text-[3vw]"
          >
            喜欢这个歌单的用户也听了
          </div>
          <BetterScroll
            :option="{ scrollX: true }"
            class="w-[95vw] overflow-hidden"
          >
            <div class="flex w-[160vw]">
              <div
                class="w-[28vw] mr-[2.5vw]"
                v-for="item in museicneWord"
                :key="item"
              >
                <div
                  class="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
                >
                  <img :src="item.coverImgUrl" alt="" />
                  <div
                    data-v-32bd4a63=""
                    class="dark:bg-[#272727] w-[26vw] h-[28vw] bg-opacity-20 bg-[#fff] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"
                  ></div>
                </div>
                <p
                  class="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item"
                >
                  {{ item.name }}
                </p>
              </div>
            </div>
          </BetterScroll>
        </div>

        <div
          class="absolute right-[3.4vw] top-[15vw] w-[6vw] h-[6vw] rounded-[50%] bg-opacity-20 bg-[#fff] flex items-center justify-center"
          @click="changge"
        >
          <div v-if="show">
            <Icon icon="mingcute:up-fill" />
          </div>
          <div v-else>
            <Icon icon="mingcute:down-fill" />
          </div>
        </div>

        <!-- 三个按钮 -->
        <div class="flex items-center mt-[3.5vw]">
          <div
            class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8f8f8] text-[3vw]"
          >
            <span>
              <Icon
                icon="mdi:share-outline"
                style="color: #ffffff"
                class="text-[5vw] mr-[1.8vw] iconify iconify--majesticons"
            /></span>
            {{ museicWord?.shareCount }}
          </div>
          <div
            class="mx-[3vw] flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8f8f8] text-[3vw]"
          >
            <span
              ><Icon
                icon="fluent:chat-16-filled"
                style="color: #ffffff"
                class="text-[5vw] mr-[1.8vw] iconify iconify--majesticons"
            /></span>
            {{ museicWord?.commentCount }}
          </div>
          <div
            class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8f8f8] text-[3vw]"
          >
            <span
              ><Icon
                icon="fluent:collections-add-24-filled"
                style="color: #ffffff"
                class="text-[5vw] mr-[1.8vw] iconify iconify--majesticons"
            /></span>
            {{ museicWord?.subscribedCount.toString().substring(0, 2) }}万
          </div>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div
      class="bg-[#fff] w-[100vw] rounded-[15px] relative z-[1] mt-[-2.5vw] px-[3.8vw]"
    >
      <div class="a1 h-[13vw] flex items-center justify-between">
        <!-- 播放 -->
        <div class="flex items-center justify-between w-[38vw]">
          <span class="text-[#ed3e20] text-[8vw]"
            ><Icon icon="carbon:play-filled" style="color: #ff0000"
          /></span>
          <div>
            <span class="text-[#25272C] text-[3.7vw]">播放全部</span>
            <span class="text-[#8C9094] text-[2.7vw]">(296)</span>
          </div>
        </div>
        <div class="flex items-center">
          <span class="text-[5vw] text-[#2c3034]"
            ><Icon icon="ic:baseline-download"
          /></span>
          <span class="text-[6vw] text-[#2c3034] ml-[5vw] mt-[1vw]"
            ><Icon icon="solar:list-down-linear"
          /></span>
        </div>
      </div>
      <!-- 列表渲染 -->
      <div>
        <div
          class="flex items-center h-[14vw]"
          v-for="(item, index) in museiclist"
          :key="index"
        >
          <div
            class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw]"
          >
            {{ index + 1 }}
          </div>
          <div
            class="text-[3.6vw] w-[64vw]"
            @click="$router.push(`/PlayerHome/${item.id}/${id}`)"
          >
            <div
              class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]"
            >
              <span class="text-ellipsis text-[#000]">{{ item.name }}</span>
            </div>
            <div
              class="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center"
            >
              <span>{{ item?.ar[0].name }}-{{ item?.al.name }}</span>
            </div>
          </div>
          <span class="ml-[4.6vw] text-[6vw] text-[#B3B3B3] mt-[-2vw]"
            ><Icon icon="icon-park-outline:play-two"
          /></span>
          <span class="ml-[4.6vw] text-[5vw] text-[#B3B3B3] mt-[-2vw]"
            ><Icon icon="ri:more-2-fill"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRequest } from "@/hooks";
import { museicdata, museicdatalist, museinewlist } from "@/service";
import { ref, watch, watchEffect, onMounted } from "vue";
import { useRoute } from "vue-router";
import BetterScroll from "../components/BetterScroll.vue";
const route = useRoute();
const id = route.params.id;
const museicWord = ref("");
const museiclist = ref([]);
const museicneWord = ref("");
let show = ref(false);
let showWored = ref(true);
const headerHeight = ref("70vw");

// 获取列表的详细数据
const { data: getmvparticularlist } = useRequest(
  () => museicdata({ numid: id }),
  {
    formateResult(response) {
      return response.data.playlist;
    },
  }
);
// 获取列表
const { data: getmvlist } = useRequest(() => museicdatalist({ numid: id }), {
  formateResult(response) {
    return response.data.songs;
  },
});

const { data: getnewlist } = useRequest(() => museinewlist({ numid: id }), {
  formateResult(response) {
    return response.data.playlists;
  },
});

watchEffect(() => {
  console.log("getnewlist", getnewlist.value);
  museicWord.value = getmvparticularlist.value;
  museiclist.value = getmvlist.value;
  museicneWord.value = getnewlist.value;
});

// 创建一个引用，用于存储随机背景色
const randomColor = ref("");

// 定义一个函数，用于生成随机颜色值
const generateRandomColor = () => {
  // 生成一个随机的RGB值
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`; // 返回rgb颜色字符串
};

// 在组件挂载后设置随机背景色

randomColor.value = generateRandomColor();

const changge = () => {
  console.log(show.value);
  show.value = !show.value;
  headerHeight.value = headerHeight.value === "70vw" ? "82vw" : "70vw";
};

// 滚动处理函数
const handleScroll = (event) => {
  const scrollPosition = event.target.scrollTop;
  console.log(1111);
  showWored.value = scrollPosition > someThreshold;
};
</script>

<style scoped>
.a2 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.a1 {
  position: sticky;
  top: 13.5vw;
  z-index: 998;
  background-color: white;
}

/* 定义滚动动画的关键帧 */
@keyframes scroll-left {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

/* 应用动画到滚动元素 */
.scroll-left {
  animation: scroll-left 10s linear infinite;
  /* 根据需要调整动画时长 */
  white-space: nowrap;
  overflow: hidden;
}
</style>
