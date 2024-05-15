<template>
  <div>
    <div class="bg-black w-[100vw] h-screen flex flex-wrap absolute pb-[12vw]">
      <div
        class="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw]"
      >
        <span
          class="text-[6vw] text-[#fefefe] iconify iconify--ep"
          @click="$router.push(`/mv`)"
          ><Icon icon="ic:baseline-arrow-back"
        /></span>

        <div class="flex items-center justify-between">
          <Icon
            icon="icon-park-outline:full-screen-play"
            class="text-[6vw] text-[#fefefe] mr-[7vw] iconify iconify--fluent"
          />

          <Icon
            icon="ri:more-2-line"
            class="text-[6vw] text-[#fefefe] mr-[7vw] iconify iconify--fluent"
          />
        </div>
      </div>
      <!-- 视频 -->
      <div class="w-[100%] absolute top-[12%]">
        <video
          id="player"
          width="640"
          height="360"
          controls
          @timeupdate="updateProgress"
        >
          <source loop autoplay muted :src="mvUrl" type="video/mp4" />
        </video>
      </div>

      <div class="w-[100%] absolute bottom-[0vw]">
        <div class="flex justify-between px-[4vw] items-end pb-[3vw]">
          <div class="flex-1 mr-[10vw]">
            <div class="flex items-center mb-[3vw]">
              <span
                class="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-[#ffffff] overflow-hidden"
                ><img :src="mvWord?.artists[0]?.img1v1Url" alt=""
              /></span>
              <span class="mx-[2vw] text-[#ffffff] text-[4vw]">{{
                mvWord?.artistName
              }}</span>
              <div
                class="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]"
              >
                <Icon icon="ic:sharp-plus" style="color: #ffffff" />
              </div>
            </div>
            <div class="mb-[5vw] van-collapse">
              <div class="van-collapse-item">
                <div
                  class="van-cell van-cell--clickable van-collapse-item__title"
                  style="background: #000"
                >
                  <div class="van-cell__title flex justify-between">
                    <div>
                      <h1 class="text-[3.2vw] text-[#fff]">
                        <span
                          class="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]"
                          >MV</span
                        >
                        {{ mvWord?.name }}
                      </h1>
                    </div>
                    <div
                      class="van-icon van-icon-arrow van-cell__right-icon"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <span class="text-[4vw] text-[#b3b3b3] iconify iconify--entypo"
                ><Icon icon="ri:music-line" style="color: #ffffff"
              /></span>

              <div class="overflow-hidden">
                <div class="w-[34vw] text-[#fff] text-[11px] scroll-left">
                  {{ mvWord?.name }}
                </div>
              </div>
              <span class="text-[4vw] text-[#fff] iconify iconify--ant-design"
                ><Icon icon="simple-line-icons:like" style="color: #ffffff" />
              </span>
            </div>
          </div>
          <div class="w-[9vw]">
            <div class="flex items-center flex-wrap justify-center mb-[4vw]">
              <span
                class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs"
                ><Icon icon="icon-park-outline:good-two"
              /></span>
              <span class="text-[#eaeaea] text-[3vw]">{{
                lisk?.likedCount
              }}</span>
            </div>
            <div class="flex items-center flex-wrap justify-center mb-[4vw]">
              <span
                class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs"
                ><Icon icon="gg:copy"
              /></span>
              <span class="text-[#eaeaea] text-[3vw]">{{
                mvWord?.commentCount
              }}</span>
            </div>

            <div class="flex items-center flex-wrap justify-center mb-[4vw]">
              <span
                class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs"
                ><Icon icon="la:share"
              /></span>
              <span class="text-[#eaeaea] text-[3vw]">{{
                mvWord?.shareCount
              }}</span>
            </div>
            <div class="flex items-center flex-wrap justify-center mb-[4vw]">
              <span
                class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs"
                ><Icon icon="fluent:collections-add-24-filled"
              /></span>
              <span class="text-[#eaeaea] text-[3vw]">收藏</span>
            </div>
            <div class="relative flex items-center justify-center"></div>
          </div>
        </div>

        <div style="padding: 7px 0px; width: auto; height: 4px">
          <van-progress
            :show-pivot="false"
            :percentage="progress"
            stroke-width="4"
          />
        </div>
        <div
          class="w-[100%] flex items-center justify-between text-[#4d4d4d] px-[4vw] py-[4vw] text-[4vw]"
        >
          发条评论结识有趣的人
          <Icon icon="oi:fullscreen-enter" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRequest } from "@/hooks";
import { useRoute } from "vue-router";
import { getmv, getmvparticular, getmvparticulardata } from "@/service";
import Plyr from "plyr";
const player = new Plyr("#player");
import { ref, watch, watchEffect, onMounted } from "vue";

const mvUrl = ref("");
const route = useRoute();
const id = route.params.id;
const mvWord = ref("");
const lisk = ref("");

const videoPlayer = ref(null); // 保存视频播放器的引用
const progress = ref(0); // 保存进度条的进度
const { data: mv } = useRequest(() => getmv({ id: id }), {
  formateResult(response) {
    return response.data.data.url;
  },
});

const { data: getmvparticularlist } = useRequest(
  () => getmvparticular({ id: id }),
  {
    formateResult(response) {
      return response.data.data;
    },
  }
);

const { data: getmvparticulardatas } = useRequest(
  () => getmvparticulardata({ id: id }),
  {
    formateResult(response) {
      return response.data;
    },
  }
);

watchEffect(() => {
  mvWord.value = getmvparticularlist.value;
  lisk.value = getmvparticulardatas.value;
});
watch(
  () => mv.value,
  () => {
    mvUrl.value = mv.value;
  }
);
onMounted(() => {
  videoPlayer.value = document.getElementById("player"); // 在组件挂载后设置视频播放器的引用
});

const updateProgress = () => {
  if (videoPlayer.value) {
    const percentage =
      (videoPlayer.value.currentTime / videoPlayer.value.duration) * 100;
    progress.value = percentage; // 更新进度条的值
  }
};
</script>

<style scoped>
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
