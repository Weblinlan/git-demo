<template>
  <div>
    <div class="pb-[24vw]">
      <!-- tobu -->
      <div
        class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101] text-[4.2vw] font-[600]"
      >
        MV排行榜
      </div>
      <div class="relative">
        <van-tabs v-model:active="active">
          <van-tab title="内地">
            <div class="overflow-auto px-[4vw] h-[76vh]">
              <div class="w-[92vw]" v-for="(item, index) in mvimg" :key="index">
                <!-- 图片 -->
                <div class="w-[100%] h-[52vw] relative">
                  <img
                    :src="item.cover"
                    @click="$router.push(`/playmv/${item.id}`)"
                    alt=""
                    class="cursor-pointer"
                  />
                  <!-- <video
                    id="my-player"
                    src=""
                    type="video/mp4"
                    playsinline
                    controls
                  ></video> -->
                  <div
                    class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center"
                  ></div>
                </div>
                <!-- 文字描述 -->
                <div class="h-[15vw] flex items-center flex-wrap">
                  <div class="flex h-[5vw] w-[100vw]">
                    <span
                      class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                      >{{ index + 1 }}</span
                    >
                    <span
                      class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                      >{{ item.name }}</span
                    >
                  </div>
                  <div class="flex h-[4vw] items-center">
                    <div
                      class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"
                    ></div>
                    <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                      <span>{{ item.artistName }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="港台">
            <div class="overflow-auto px-[4vw] h-[76vh]">
              <div class="w-[92vw]" v-for="item in HKing" :key="item.id">
                <!-- 图片 -->
                <div class="w-[100%] h-[52vw] relative">
                  <img
                    :src="item.cover"
                    alt=""
                    @click="$router.push(`/playmv/${item.id}`)"
                  />
                  <div
                    class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center"
                  ></div>
                </div>
                <!-- 文字描述 -->
                <div class="h-[15vw] flex items-center flex-wrap">
                  <div class="flex h-[5vw] w-[100vw]">
                    <span
                      class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                      >1</span
                    >
                    <span
                      class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                      >{{ item.name }}</span
                    >
                  </div>
                  <div class="flex h-[4vw] items-center">
                    <div
                      class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"
                    ></div>
                    <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                      <span>{{ item.artistName }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div></van-tab
          >
          <van-tab title="欧美">
            <div class="overflow-auto px-[4vw] h-[76vh]">
              <div class="w-[92vw]" v-for="item in Americaimgs" :key="item.id">
                <!-- 图片 -->
                <div class="w-[100%] h-[52vw] relative">
                  <img
                    :src="item.cover"
                    alt=""
                    @click="$router.push(`/playmv/${item.id}`)"
                  />
                  <div
                    class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center"
                  ></div>
                </div>
                <!-- 文字描述 -->
                <div class="h-[15vw] flex items-center flex-wrap">
                  <div class="flex h-[5vw] w-[100vw]">
                    <span
                      class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                      >1</span
                    >
                    <span
                      class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                      >{{ item.name }}</span
                    >
                  </div>
                  <div class="flex h-[4vw] items-center">
                    <div
                      class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"
                    ></div>
                    <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                      <span>{{ item.artistName }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div></van-tab
          >
          <van-tab title="韩国"
            ><div class="overflow-auto px-[4vw] h-[76vh]">
              <div class="w-[92vw]" v-for="item in Koreaimg" :key="item.id">
                <!-- 图片 -->
                <div class="w-[100%] h-[52vw] relative">
                  <img
                    :src="item.cover"
                    alt=""
                    @click="$router.push(`/playmv/${item.id}`)"
                  />
                  <div
                    class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center"
                  ></div>
                </div>
                <!-- 文字描述 -->
                <div class="h-[15vw] flex items-center flex-wrap">
                  <div class="flex h-[5vw] w-[100vw]">
                    <span
                      class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                      >1</span
                    >
                    <span
                      class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                      >{{ item.name }}</span
                    >
                  </div>
                  <div class="flex h-[4vw] items-center">
                    <div
                      class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"
                    ></div>
                    <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                      <span>{{ item.artistName }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div></van-tab
          >
          <van-tab title="日本"
            ><div class="overflow-auto px-[4vw] h-[76vh]">
              <div class="w-[92vw]" v-for="item in Japaneseimg" :key="item.id">
                <!-- 图片 -->
                <div class="w-[100%] h-[52vw] relative">
                  <img
                    :src="item.cover"
                    alt=""
                    @click="$router.push(`/playmv/${item.id}`)"
                  />
                  <div
                    class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center"
                  ></div>
                </div>
                <!-- 文字描述 -->
                <div class="h-[15vw] flex items-center flex-wrap">
                  <div class="flex h-[5vw] w-[100vw]">
                    <span
                      class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                      >1</span
                    >
                    <span
                      class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                      >{{ item.name }}</span
                    >
                  </div>
                  <div class="flex h-[4vw] items-center">
                    <div
                      class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"
                    ></div>
                    <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                      <span>{{ item.artistName }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div></van-tab
          >
        </van-tabs>
      </div>
    </div>
    <!--  Japaneseimg-->
    <div class="bg-[#fff] fixed z-[3] bottom-0 h-[12vw] w-[100vw]">
      <van-tabbar v-model="active1" active-color="#ee0a24">
        <van-tabbar-item icon="home-o" @click="$router.push('/Home')"
          >首页</van-tabbar-item
        >
        <van-tabbar-item icon="search">排行榜</van-tabbar-item>
        <van-tabbar-item icon="friends-o" @click="onImageClick()"
          >我的</van-tabbar-item
        >
        <van-tabbar-item icon="like-o">关注</van-tabbar-item>
        <van-tabbar-item icon="friends">标签</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { getMVImg, getmv } from "@/service";
import { useRequest } from "@/hooks";

const active = ref(0);
const active1 = ref(1);
const mvimg = ref("");
const HKing = ref("");
const Americaimgs = ref("");
const Koreaimg = ref("");
const Japaneseimg = ref("");
// const HongkongmvUrls = ref([]);
// 内地
const { data: img } = useRequest(() => getMVImg({ num: 50, opction: "内地" }), {
  formateResult(response) {
    return response.data.data;
  },
});
// 港台
const { data: Hongkongimg } = useRequest(
  () => getMVImg({ num: 50, opction: "港台" }),
  {
    formateResult(response) {
      return response.data.data;
    },
  }
);

const onImageClick = (id) => {
  console.log(`Image with id ${id} clicked`);
};

// 欧美
const { data: Americaimg } = useRequest(
  () => getMVImg({ num: 50, opction: "欧美" }),
  {
    formateResult(response) {
      return response.data.data;
    },
  }
);
// 韩国
const { data: Korea } = useRequest(
  () => getMVImg({ num: 50, opction: "韩国" }),
  {
    formateResult(response) {
      return response.data.data;
    },
  }
);
// 日本
const { data: Japanese } = useRequest(
  () => getMVImg({ num: 50, opction: "日本" }),
  {
    formateResult(response) {
      return response.data.data;
    },
  }
);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
watchEffect(() => {
  mvimg.value = img.value;
  HKing.value = Hongkongimg.value;
  Americaimgs.value = Americaimg.value;
  Koreaimg.value = Korea.value;
  Japaneseimg.value = Japanese.value;
});
</script>
