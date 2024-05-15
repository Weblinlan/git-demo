<template>
  <div>
    <div class="relative h-[100vh] pb-[12vw]">
      <div class="absolute z-[3] flex flex-wrap h-[100%] pb-[7.5vw]">
        <!-- title -->
        <div
          class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between"
        >
          <!-- 下标 -->
          <Icon
            class="dark:text-[#EEEEEE] text-[6vw] mt-[0.6vw] text-[#fff] iconify iconify--ep"
            icon="ic:baseline-arrow-downward"
            @click="$router.push(`/Singing/${singid}`)"
          />
          <!-- 标题 -->
          <div class="text-center w-[60vw]">
            <p class="h-[5vw] text-[4vw] text-[#fff] line-clamp-1">
              {{ getdata?.name }}
            </p>
            <p class="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]">
              {{ getdata?.ar?.[0]?.name }}
              <span
                class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]"
                >关注</span
              >
            </p>
          </div>
          <!-- 分享 -->
          <Icon
            class="text-[6vw] text-[#fff] iconify iconify--carbon"
            icon="material-symbols:share-outline"
          />
        </div>
        <!-- 瓷碟 -->
        <div class="relative top-[2%] w-[100vw] h-[120vw]" v-if="false">
          <div
            class="absolute top-[10%] left-[50%] origin-top-left translate-x-[-50%] z-[10] rotated w-[30vw] h-[40vw]"
            :style="`transform: rotate(${rotationDegrees}deg); transition: transform 0.5s ease;`"
          >
            <img
              src="@/assets/needle-ab.png"
              class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]"
              alt=""
            />
          </div>
          <div
            class="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]"
          >
            <div class="absolute w-[80vw] h-[80vw]">
              <img
                src="@/assets/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                class="absolute top-0 w-[80vw] h-[80vw]"
              />
              <img src="@/assets/disc_light.png" alt="" />
            </div>
            <img
              :style="`animation-play-state: ${play ? 'running' : 'paused'};`"
              :src="getdata?.al?.picUrl"
              class="w-[50vw] h-[50vw] absolute top-[15vw] left-[15vw] rounded-[50%] border-[5px] border-[#000] rotateDisc"
            />
          </div>
        </div>
        <!-- 歌词 -->
        <div
          class="w-[100vw] scroll h-[121vw] flex items-center flex-wrap px-[6vw] justify-center relative internalShadow"
          ref="box"
        >
          <div
            class="absolute top-0 transition-all duration-1000 overflow-y-scroll"
            :style="{ top: `${-currentLineTop}vw` }"
          >
            <div
              class="text-[hsla(0,0%,88.2%,.8)] overflow-auto line-clamp-2 w-[100%] h-[12vw] px-[4vw] flex justify-center text-center"
              v-for="item in lrcData"
              :key="item"
            >
              {{ item.words }}
            </div>
          </div>
        </div>
        <!-- 控制台 -->
        <div class="flex flex-wrap content-end">
          <!-- ICON -->
          <div class="w-[100vw] mt-[5vw] flex justify-evenly items-center">
            <div>
              <Icon
                icon="icon-park-outline:like"
                class="text-[5vw] text-[#fff] iconify iconify--streamline"
              />
            </div>
            <Icon
              icon="el:download"
              class="text-[5vw] text-[#fff] iconify iconify--streamline"
            />
            <Icon
              icon="healthicons:i-groups-perspective-crowd-outline"
              class="text-[8vw] text-[#fff] iconify iconify--streamline"
            />
            <Icon
              icon="fluent:chat-48-filled"
              class="text-[5vw] text-[#fff] iconify iconify--streamline"
            />
            <Icon
              icon="ri:more-2-line"
              class="text-[5vw] text-[#fff] iconify iconify--streamline"
            />
          </div>
          <!-- 进度条 -->
          <div
            class="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[3vw]"
          ></div>

          <!-- 播放状态 -->
          <div class="h-[12.3vw] flex w-[100vw] items-center justify-evenly">
            <Icon
              icon="fluent-mdl2:playback-rate-1x"
              class="text-[#fff] text-[6vw]"
            />
            <Icon icon="bx:arrow-to-left" class="text-[#fff]" />
            <div
              class="w-[12vw] h-[12vw] rounded-[50%] bg-[#fff] flex items-center justify-center"
              @click="togglePlay"
            >
              <Icon icon="mdi:play" v-if="!play" />
              <Icon icon="charm:minus" v-else />
            </div>
            <Icon icon="bx:arrow-to-right" class="text-[#fff]" />
            <Icon
              icon="fontisto:play-list"
              style="color: #ffffff"
              class="text-[#fff] text-[6vw]"
            />
          </div>
        </div>
        <div>
          <audio controls :src="getvideo?.url" ref="audio"></audio>
        </div>
      </div>
    </div>
  </div>
  <div
    class="element fixed z-[1] top-0 left-0 right-0 bottom-0"
    :style="`background-image: url('${getdata?.al?.picUrl}')`"
  ></div>
  <div
    data-v-8298fe8a=""
    class="fixed z-[2] bgColor top-0 left-0 right-0 bottom-0"
  ></div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
import { useRequest } from "@/hooks";
import { getmuseicdata, getauto, getlyric } from "@/service";
const play = ref(false); //暂停
const rotationDegrees = ref(-45); //倾斜
// 路由
const route = useRoute();
const id = route.params.id;
const singid = route.params.singid;
let lrcData = ref("");
const audio = ref(null);
const box = ref(null);
const currentLineTop = ref(20); // 用于存储当前行顶部的位置
// 暂停和播放的切换
const togglePlay = () => {
  // rotationDegrees.value = play.value ? 360 : 0; // 根据播放状态设置旋转角度
  play.value = !play.value;
  if (play.value) {
    rotationDegrees.value = -6; // 设置旋转角度

    // rotations.value = "linear infinite"; // 开始无限旋转ipt
  } else {
    rotationDegrees.value = -45; // 设置旋转角度
    // rotations.value = "paused"; // 停止旋转
  }
};
// 获取列表的详细数据
const { data: getdata } = useRequest(() => getmuseicdata({ numid: id }), {
  formateResult(response) {
    return response.data.songs[0];
  },
});
// 音频
const { data: getvideo } = useRequest(() => getauto({ numid: id }), {
  formateResult(response) {
    return response.data.data[0];
  },
});

// 获取歌词
const { data: lyricdata } = useRequest(() => getlyric({ id: id }), {
  formateResult(response) {
    return response.data.lrc.lyric;
  },
});

onMounted(() => {
  // 确保audio.value是有效的DOM音频元素
  audio.value.addEventListener("timeupdate", () => {
    let currentTime = audio.value.currentTime;

    // 根据当前时间找到对应的歌词行
    let currentLine = findCurrentLine(currentTime);
    // 更新歌词容器的滚动位置以显示当前行

    updateLyricScroll(currentLine);
  });

  // console.log(audio.value);
  /**
   * 计算出，当前情况
   * lrcData数组中，应该高亮显示的歌词下标
   * 如果没有任何一个为nnull
   *
   */
  const findCurrentLine = (currentTime) => {
    for (let i = 0; i < lrcData.value.length; i++) {
      if (currentTime < lrcData.value[i].time) {
        return i - 1;
      }
    }
    return lrcData.value.length - 1;
  };

  const updateLyricScroll = (lineIndex) => {
    if (box.value && lineIndex >= 0 && lineIndex < box.value.children.length) {
      const lyricLine = box.value.children[lineIndex];
      const offsetTop = lyricLine.offsetTop;
      // 滚动到对应的歌词行
      currentLineTop.value = offsetTop;
    }
  };
});

// 观察lyricdata的变化
watch(lyricdata, (newVal) => {
  if (newVal) {
    const parseLyric = (lyc) => {
      let lines = lyc.split("\n");
      let result = [];
      for (let i = 0; i < lines.length; i++) {
        let str = lines[i];
        let parts = str.split("]");
        let timeStr = parts[0].substring(1);
        let obj = {
          time: parseTime(timeStr),
          words: parts[1],
        };
        result.push(obj);
      }
      return result;
    };
    let parseTime = (timeStr) => {
      let parts = timeStr.split(":");
      return +parts[0] * 60 + +parts[1];
    };

    lrcData.value = parseLyric(newVal);
  }
});
</script>

<style>
.element {
  background-size: 100% 100%;
  filter: blur(24px);
}
.bgColor {
  background-color: rgba(0, 0, 0, 0.5);
}
.rotateDisc {
  width: 50vw;
  height: 50vw;
  position: absolute;
  top: 15vw;
  left: 15vw;
  animation: rotateDisc 20s linear infinite;
  animation-fill-mode: forwards;
}
@keyframes rotateDisc {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.internalShadow {
  mask-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.6) 15%,
    #fff 25%,
    #fff 75%,
    hsla(0, 0%, 100%, 0.6) 85%,
    hsla(0, 0%, 100%, 0)
  );
}

.active {
  color: #fff;
  transform: scale(1.2);
}
</style>
