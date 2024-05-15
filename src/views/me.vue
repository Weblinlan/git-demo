<template>
  <div>
    <div class="pb-[24vw]">
      <!-- title -->
      <div class="w-[100vw] h-[74vw] relative">
        <div
          class="w-[100vw] h-[15vw] px-[4.5vw] flex items-center justify-between fixed top-0 z-[10]"
        >
          <Icon
            icon="solar:arrow-left-linear"
            style="color: #ffffff"
            class="text-[7vw] text-[#fff]"
            @click="$router.push('/Home')"
          />
          <Icon
            icon="ri:more-2-fill"
            style="color: #ffffff"
            class="dark:text-[#e9ebf2] text-[#fff] font-[800] text-[7vw]"
          />
        </div>

        <img
          :src="UserWord?.[0].creator.backgroundUrl"
          alt=""
          class="w-[100vw] h-[74vw]"
        />
      </div>
      <div class="dark:bg-[#151515] bg-[#f1f1f1] h-[155vh] px-[4vw]">
        <div
          class="dark:from-[#2D2C2C] dark:to-[#161616] bg-gradient-to-b from-[#f1f1f1] to-[#f1f1f1] mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw] relative pt-[11vw] text-center pb-[3.8vw]"
        >
          <img
            :src="UserWord?.[0]?.creator.avatarUrl"
            alt=""
            class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]"
          />
          <p class="dark:text-[#DADADA] text-[5vw] text-[#253346] font-[800]">
            {{ UserWord?.[0]?.creator?.nickname }}
          </p>
          <div class="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]">
            <span class="px-[2vw]"><span>1</span> 关注</span
            ><span class="px-[2vw]"><span>0</span> 粉丝</span
            ><span class="px-[2vw]">Lv.<span>7</span></span>
          </div>
          <div class="h-[11vw] flex items-center justify-center">
            <span
              class="dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
              >IP:</span
            ><span
              class="dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] flex items-center border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
              ><Icon
                icon="ic:outline-man"
                style="color: #ffffff"
                class="text-[3vw] mr-[1vw] text-[#ff7474]"
              />00后 摩羯座</span
            ><span
              class="dark:bg-[#282828] dark:border-[#282828] dark:text-[#ECECEC] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
              >村龄 1 年</span
            >
          </div>

          <div class="flex items-center justify-center">
            <span
              class="dark:border-[#383838] dark:text-[#EEEEEE] px-[3vw] py-[1vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]"
              >编辑资料</span
            ><span
              class="dark:border-[#383838] dark:text-[#EEEEEE] w-[7.7vw] h-[7.7vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]"
            >
              <Icon icon="ph:caret-down-bold" style="color: #000"
            /></span>
          </div>
        </div>
        <div>
          <div
            class="flex justify-evenly items-center font-semibold relative w-[80vw] mx-auto"
          >
            <van-tabs
              v-model:active="active"
              style="width: 100vw; height: 100vw"
            >
              <van-tab title="主页">
                <div>
                  <div
                    class="dark:bg-[#2C2C2C] w-[92vw] h-[43vw] rounded-[15px] bg-[#fff] mb-[3.7vw]"
                  >
                    <h1
                      class="dark:text-[#EAEAEA] leading-[12vw] text-[4vw] pl-[4vw]"
                    >
                      音乐品味
                    </h1>
                    <div class="flex justify-evenly">
                      <div
                        class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#ffdfd3] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative"
                      >
                        <div
                          class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                        >
                          我的喜欢
                        </div>
                        <p
                          class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D] pl-[1.7vw]"
                        >
                          {{ getdata?.[0]?.trackCount }}首
                        </p>
                        <div
                          class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                        >
                          喜欢的音乐
                        </div>
                      </div>
                      <div
                        class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#f9ebcf] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative"
                      >
                        <div
                          class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                        >
                          累计听歌
                        </div>
                        <p
                          class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D] pl-[1.7vw]"
                        >
                          2889首
                        </p>
                        <div
                          class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                        >
                          喜欢的音乐
                        </div>
                      </div>
                      <div
                        class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#dbeff9] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative pr-[1.9vw]"
                      >
                        <div
                          class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                        >
                          本周关键词
                        </div>
                        <p
                          class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D] pl-[1.7vw]"
                        >
                          属于你的音乐档案
                        </p>
                        <div
                          class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                        >
                          黑胶时光机
                        </div>
                      </div>
                    </div>

                    <div
                      class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]"
                    >
                      <p
                        class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]"
                      >
                        创建的歌单<span
                          class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
                          >(2个)</span
                        >
                      </p>
                      <ul class="px-[4vw] pb-[4vw]"></ul>
                      <div></div>
                    </div>

                    <div
                      class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]"
                    >
                      <p
                        class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]"
                      >
                        收藏的歌单<span
                          class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
                          >(5个)</span
                        >
                      </p>
                      <ul class="px-[4vw] pb-[4vw]">
                        <li class="flex mb-[1.5vw]">
                          <div class="relative pt-[0.6vw] mr-[2.6vw]">
                            <img
                              :src="getdata?.[3]?.coverImgUrl"
                              class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative"
                            />
                            <div
                              class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"
                            ></div>
                          </div>
                          <div
                            class="flex flex-wrap items-center flex-1 py-[1vw]"
                          >
                            <p
                              class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1"
                            >
                              {{ getdata?.[3]?.name }}
                            </p>
                            <p
                              class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1"
                            >
                              {{ getdata?.[3].trackCount }}首，By用户{{
                                getdata?.[3].creator.nickname
                              }}，播放{{ getdata?.[3].playCount }}次
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div></div>
                    </div>

                    <div
                      class="dark:bg-[#2C2C2C] w-[92vw] h-[50vw] bg-[#fff] rounded-[15px]"
                    >
                      <nav
                        class="h-[15vw] flex items-center justify-between mx-[3.8vw]"
                      >
                        <div class="dark:text-[#ECECEC] text-[4vw] text-[#333]">
                          基本信息
                        </div>
                        <div
                          class="dark:text-[#ECECEC] dark:border-[#474747] text-[2.6vw] border-[1px] border-[#E7E7E7] rounded-[200px] px-[2.7vw] py-[1.5vw] text-[#333]"
                        >
                          领取村名证
                        </div>
                      </nav>
                      <div
                        class="dark:text-[#ADADAD] h-[25vw] text-[3vw] text-[#666] flex flex-wrap mx-[3.8vw]"
                      >
                        <div class="w-[100%]">
                          村龄：<span class="dark:text-[#E3E3E3]"
                            >1年 (2022年9月注册)</span
                          >
                        </div>
                        <div class="w-[100%]">
                          性别：<span class="dark:text-[#E3E3E3]">女</span>
                        </div>
                        <div class="w-[100%]">
                          年龄：<span class="dark:text-[#E3E3E3]"
                            >00后 摩羯座</span
                          >
                        </div>
                      </div>
                      <div
                        class="dark:border-[#434343] border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]"
                      >
                        查看全部
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </van-tab>
              <van-tab title="动态"></van-tab>
              <van-tab title="博客"></van-tab>
            </van-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { getusedata, getCookie, getUser } from "@/service";
import { useRequest } from "@/hooks";
import { watchEffect } from "vue";
// 使用 localStorage.getItem() 方法来读取数据
const usernameCookie = localStorage.getItem("UsenameCookie");
const usernameId = localStorage.getItem("UsenameId");
const Userdata = ref();
const UserWord = ref();
const UserId = ref();

const { data: getdata } = useRequest(
  () => getusedata({ id: usernameId, cookie: usernameCookie }),
  {
    formateResult(response) {
      return response.data.playlist;
    },
  }
);
const { data: getlist } = useRequest(() => getUser(), {
  formateResult(response) {
    return response.data;
  },
});

watch(
  () => getdata.value,
  (newValue) => {
    if (newValue) {
      console.log("newValue", newValue);
      UserWord.value = newValue;

      localStorage.setItem("Usename", newValue[0].creator.nickname);
    }
  },
  { immediate: true }
);
// 假设我们要从 localStorage 中读取名为 'UsenameCookie' 的数据
const { data: getCookiedata } = useRequest(
  () => getCookie({ cookie: usernameCookie }),
  {
    formateResult(response) {
      return response.data;
    },
  }
);
watch(
  () => getCookiedata.value,
  (newValue) => {
    if (newValue) {
      localStorage.setItem("UsenameId", newValue.account.id);
    }
  },
  { immediate: true }
);

</script>
