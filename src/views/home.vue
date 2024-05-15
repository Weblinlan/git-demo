<template>
  <Suspense>
    <div>
      <div class="bg-[#F4F4F4] pb-[12vw]" :style="modeStyles">
        <div class="h-[100vh] overflow-auto" :style="modeStyles">
          <div class="opacity-0.2" :class="modeClasses" :style="modeStyles">
            <!-- 头部搜索框 -->
            <div
              class="w-[100vw] h-[20vw] p-[3vw] pl-[2vw] flex justify-between items-center"
            >
              <div>
                <!-- 抽屉 -->
                <!-- <van-icon name="wap-nav"  /> -->
                <van-icon name="wap-nav" @click="showDrawer" />
                <a-drawer
                  v-model:open="open"
                  width="315"
                  :closable="false"
                  :footer-style="{ textAlign: 'left' }"
                  placement="left"
                  @close="onClose"
                  :style="modeStyles"
                >
                  <!-- 立即登录 -->
                  <div class="flex justify-between items-center h-[16vw]">
                    <div class="flex items-center justify-between">
                      <van-icon
                        name="manager"
                        class="text-[#f9dada] w-[7vw] h-[7vw] iconify iconify--gridicons text-center leading-[7vw]"
                      />
                      <div class="flex items-center justify-between">
                        <router-link to="/login" v-if="!UsenameData"
                          >立即登录</router-link
                        >
                        <span v-else>{{ UsenameData }}</span>
                      </div>
                      <div class="ml-[1vw]">></div>
                    </div>
                    <div>1</div>
                  </div>
                  <!-- vip -->
                  <div class="h-[420vw]">
                    <div
                      class="mx-auto px-[14.85px] ml-[-10px] w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] text-[#9e8f8f] rounded-[20px]"
                    >
                      <div class="h-[10vw] flex justify-between items-center">
                        <h1 class="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</h1>
                        <div
                          class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]"
                        >
                          会员中心
                        </div>
                      </div>
                      <div class="h-[7vw] border-b-[1px] border-[#494443]">
                        <p class="text-[2.73vw]">点击恢复超21项专属特权</p>
                      </div>

                      <div
                        class="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]"
                      >
                        <div class="text-[2.5vw] h-[11vw]">
                          受邀专享，黑胶VIP低至0.27元/天!
                        </div>
                        <div class="scale-50 w-[8vw]">
                          <div
                            class="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50"
                          >
                            受邀专享
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 我的消息 -->
                    <div
                      class="rounded-[15px] w-[76vw] mx-auto mt-[4vw]"
                      style="pointer-events: auto"
                    >
                      <!---->
                      <div class="px-[4vw]">
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                              >
                                <path
                                  d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295c1.086 0 2.005-.765 3.841-2.296L18 8"
                                ></path>
                              </g>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >我的消息</span
                            >
                          </div>
                          <div class="flex items-center">
                            <!---->
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 32 32"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--cib"
                            >
                              <path
                                fill="currentColor"
                                d="M16 1.151c-8.88 0-16 7.182-16 16.156c0 1.328.052 1.833.328 3.104l4.88 3.615l.76 6.021h8.135l.438.302c.5.349.938.5 1.443.5c.469 0 .974-.135 1.365-.417l.521-.385h8.125l.75-6.021l4.927-3.615c.276-1.271.328-1.776.328-3.104c0-8.969-7.12-16.156-16-16.156m1.328 3.01c1.198 0 2.37.297 3.349.865l-3.286 16.729l4.563-16.078c1.411.479 2.479 1.25 3.344 2.417l.031.047l-6.536 14.151L26.22 9.344l.047.036c1.01.943 1.661 2.089 1.99 3.531l-8.26 10.224l8.583-8.667l.01.026c.339.75.557 1.813.557 2.661c0 .677-.031.948-.219 1.667l-4.74 3.469l-.62 4.948h-5.969l-.688.526c-.266.208-.646.354-.911.354s-.646-.146-.911-.354l-.688-.526H8.427l-.589-4.813l-4.839-3.557a6.634 6.634 0 0 1-.214-1.677c0-.964.214-1.99.568-2.74l.016-.031l8.604 8.734l-8.307-10.328c.333-1.417 1.167-2.786 2.188-3.62l7.391 13.036L6.641 8.134c.74-1.089 1.932-1.943 3.391-2.438L14.6 21.79L11.142 5.087l.073-.042c1.083-.599 2.13-.875 3.276-.875c.26 0 .38.005.703.042l.781 17.401l.615-17.417c.297-.031.411-.036.74-.036z"
                              ></path>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >云贝中心</span
                            >
                          </div>
                          <div class="flex items-center">
                            <span class="text-[color:#a7a7a7] text-[3vw]"
                              >签到</span
                            >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--mingcute"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1m-4.95-2.05a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m11.314 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414M12.617 2a2 2 0 0 1 1.985 1.752l.38 3.04a6 6 0 1 1-5.964 0l.38-3.04A2 2 0 0 1 11.383 2zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-8 3a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zm-1.929-6.07a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-12.728 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707A1 1 0 0 1 6.343 4.93M12.617 4h-1.234l-.25 2h1.734z"
                                ></path>
                              </g>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >创作者中心</span
                            >
                          </div>
                          <div class="flex items-center">
                            <!---->
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 深色模式
                   -->
                    <div
                      class="= rounded-[15px] w-[76vw] mx-auto mt-[4vw]"
                      style="pointer-events: auto"
                    >
                      <div
                        class="text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
                      >
                        其他
                      </div>
                      <div class="px-[4vw]">
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--ri"
                            >
                              <path
                                fill="currentColor"
                                d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zm0 2.311L4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                              ></path>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]">设置</span>
                          </div>
                          <div class="flex items-center">
                            <!---->
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--line-md"
                            >
                              <g fill="currentColor" fill-opacity="0">
                                <path
                                  d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"
                                >
                                  <animate
                                    id="iconifyVue0"
                                    fill="freeze"
                                    attributeName="fill-opacity"
                                    begin="0.7s;iconifyVue0.begin+6s"
                                    dur="0.4s"
                                    values="0;1"
                                  ></animate>
                                  <animate
                                    fill="freeze"
                                    attributeName="fill-opacity"
                                    begin="iconifyVue0.begin+2.2s"
                                    dur="0.4s"
                                    values="1;0"
                                  ></animate>
                                </path>
                                <path
                                  d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
                                >
                                  <animate
                                    fill="freeze"
                                    attributeName="fill-opacity"
                                    begin="iconifyVue0.begin+3s"
                                    dur="0.4s"
                                    values="0;1"
                                  ></animate>
                                  <animate
                                    fill="freeze"
                                    attributeName="fill-opacity"
                                    begin="iconifyVue0.begin+5.2s"
                                    dur="0.4s"
                                    values="1;0"
                                  ></animate>
                                </path>
                                <path
                                  d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
                                >
                                  <animate
                                    fill="freeze"
                                    attributeName="fill-opacity"
                                    begin="iconifyVue0.begin+0.4s"
                                    dur="0.4s"
                                    values="0;1"
                                  ></animate>
                                  <animate
                                    fill="freeze"
                                    attributeName="fill-opacity"
                                    begin="iconifyVue0.begin+2.8s"
                                    dur="0.4s"
                                    values="1;0"
                                  ></animate>
                                </path>
                                <path
                                  d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"
                                >
                                  <animate
                                    fill="freeze"
                                    attributeName="fill-opacity"
                                    begin="iconifyVue0.begin+3.4s"
                                    dur="0.4s"
                                    values="0;1"
                                  ></animate>
                                  <animate
                                    fill="freeze"
                                    attributeName="fill-opacity"
                                    begin="iconifyVue0.begin+5.6s"
                                    dur="0.4s"
                                    values="1;0"
                                  ></animate>
                                </path>
                              </g>
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-dasharray="56"
                                stroke-dashoffset="56"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                              >
                                <animate
                                  fill="freeze"
                                  attributeName="stroke-dashoffset"
                                  dur="0.6s"
                                  values="56;0"
                                ></animate>
                              </path>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >深色模式</span
                            >
                          </div>
                          <div class="flex items-center">
                            <div
                              class="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in"
                            >
                              <van-switch v-model="checked" />
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--mdi"
                            >
                              <path
                                fill="currentColor"
                                d="M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m.5 4H11v6l4.75 2.85l.75-1.23l-4-2.37zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86z"
                              ></path>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >定时关闭</span
                            >
                          </div>
                          <div class="flex items-center">
                            <!---->
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 256 256"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
                            >
                              <path
                                fill="currentColor"
                                d="m245.68 64.73l-51.77-28.24A4 4 0 0 0 192 36h-32a4 4 0 0 0-4 4a28 28 0 0 1-56 0a4 4 0 0 0-4-4H64a4 4 0 0 0-1.9.5L10.32 64.73a11.79 11.79 0 0 0-5 15.89l19.28 36.81a12.37 12.37 0 0 0 11 6.57H60v84a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-84h24.33a12.37 12.37 0 0 0 11-6.57l19.28-36.81a11.79 11.79 0 0 0-4.93-15.89M35.67 116a4.46 4.46 0 0 1-4-2.28L12.44 76.91a3.79 3.79 0 0 1 1.71-5.15L60 46.74V116ZM188 208a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V44h24.22a36 36 0 0 0 71.56 0H188Zm55.56-131.09l-19.27 36.81a4.46 4.46 0 0 1-4 2.28H196V46.74l45.85 25a3.79 3.79 0 0 1 1.71 5.17"
                              ></path>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >个性装扮</span
                            >
                          </div>
                          <div class="flex items-center">
                            <!---->
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M12 13v5m0 3.01l.01-.011M4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"
                              ></path>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >边听边存</span
                            >
                          </div>
                          <div class="flex items-center">
                            <span class="text-[color:#a7a7a7] text-[3vw]"
                              >未开启</span
                            >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M12 13v5m0 3.01l.01-.011M4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"
                              ></path>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >在线听歌免流量</span
                            >
                          </div>
                          <div class="flex items-center">
                            <!---->
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                              >
                                <path
                                  d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  d="M10 16H6m8 0h-1.5M2 10h20"
                                ></path>
                              </g>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >音乐黑名单</span
                            >
                          </div>
                          <div class="flex items-center">
                            <span class="text-[color:#a7a7a7] text-[3vw]"
                              >未开启</span
                            >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 1024 1024"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--ant-design"
                            >
                              <path
                                fill="currentColor"
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372c0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884m288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8"
                              ></path>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >青少年模式</span
                            >
                          </div>
                          <div class="flex items-center">
                            <span class="text-[color:#a7a7a7] text-[3vw]"
                              >未开启</span
                            >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                        >
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 1024 1024"
                              class="font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
                            >
                              <path
                                fill="currentColor"
                                d="M512 832a320 320 0 1 0 0-640a320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768a384 384 0 0 1 0 768"
                              ></path>
                              <path
                                fill="currentColor"
                                d="m292.288 824.576l55.424 32l-48 83.136a32 32 0 1 1-55.424-32zm439.424 0l-55.424 32l48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z"
                              ></path>
                            </svg>
                            <span class="text-[3.5vw] ml-[2.73vw]"
                              >音乐闹钟</span
                            >
                          </div>
                          <div class="flex items-center">
                            <!---->
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                              style="color: rgb(181, 181, 181)"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                                ></path>
                              </g>
                            </svg>
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                    <van-button type="primary" @click="baseDialog"
                      >主要按钮</van-button
                    >
                  </div>
                </a-drawer>
              </div>
              <!-- 搜索框 -->
              <div class="relative">
                <input
                  @click="$router.push('/search')"
                  type="text"
                  placeholder="Search  your favorite music"
                  class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]"
                />
                <span class="absolute left-[-5px] top-[-1px]"> </span>

                <span class="absolute right-[-3px] top-[0px]"></span>
              </div>
              <div></div>
            </div>
            <!-- *轮播图 -->
            <van-swipe
              :autoplay="3000"
              indicator-color="white"
              class="w-[88vw] h-[100%] m-auto rounded-2xl"
            >
              <van-swipe-item
                v-for="item in homepagedata?.[0]?.extInfo?.banners"
                :key="item.bannerId"
              >
                <van-image
                  width="88vw"
                  height="140px"
                  fit="cover"
                  :src="item.pic"
                ></van-image>
              </van-swipe-item>
            </van-swipe>
            <!--*红色图标 -->
            <div class="w-[92vw] ml-[4vw] overflow-hidden">
              <BetterScroll
                :option="{ scrollX: true }"
                class="relative flex items-center justify-between"
              >
                <div class="w-[180vw] flex justify-between items-center">
                  <div v-for="item in homeIcon" :key="item.id">
                    <div
                      class="w-[56px] h-[75px] text-[2.78vw] flex flex-col items-center justify-center"
                    >
                      <img alt="" :src="item.iconUrl" class="red-image" />
                      <span>{{ item.name }}</span>
                    </div>
                  </div>
                </div>
              </BetterScroll>
            </div>
            <!--*推荐歌单  -->
            <div>
              <!-- tiitle -->
              <div class="w-[100vw] px-[4vw] overflow-hidden">
                <div class="flex justify-between items-center h-[12vw]">
                  <div class="flex items-center">
                    <span class="text-[4vw] font-[800]">
                      {{ homepagedata?.[1]?.uiElement?.subTitle?.title }}
                      <van-icon name="arrow" class="ml-[1vw]" />
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
              <!-- 内容 -->
              <div class="w-[98vw] h-[44vw] pt-[1vw]">
                <BetterScroll
                  :option="{ scrollX: true }"
                  class="relative flex pl-[1vw]"
                >
                  <div
                    class="w-[190vw] mt-[15px] flex items-center justify-between"
                  >
                    <div class="flex h-[45.6vw]">
                      <div
                        class="w-[31vw] h-[35vw] ml-[2.4vw] relative z-[1000]"
                      >
                        <van-swipe
                          style="height: 146px; position: relative"
                          :autoplay="3000"
                          vertical
                        >
                          <van-swipe-item
                            v-for="item in homepagedata?.[1]?.creatives[0]
                              .resources"
                            :key="item"
                            class="relative"
                          >
                            <img :src="item.uiElement.image.imageUrl" alt="" />
                            <p class="text-[2.78vw]">
                              {{ item.uiElement.mainTitle.title }}
                            </p>
                            <div class="absolute right-[4px] z-[1000]">
                              <van-icon name="play" />
                              <span class="text-[12px]">
                                {{
                                  item.resourceExtInfo.playCount
                                    .toString()
                                    .substring(0, 3)
                                }}万
                              </span>
                            </div>

                            <div
                              class="absolute right-[4px] text-[20px] bottom-[30px] z-[1000]"
                            >
                              <van-icon name="play" />
                            </div>
                          </van-swipe-item>
                          <template #indicator="{}">
                            <div class="custom-indicator"></div>
                          </template>
                        </van-swipe>
                        <div
                          class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#e3e3e3] absolute z-[-1] top-[-2vw] left-[50%] -translate-x-[50%] rounded-[8px]"
                        ></div>
                      </div>
                      <div
                        class="w-[31vw] h-[35vw] ml-[2vw] relative z-[1000]"
                        v-for="item in filteredItems"
                        :key="item.id"
                      >
                        <div class="absolute right-0">
                          <van-icon name="play" />
                          <span class="text-[12px]"
                            >{{
                              item.resources[0].resourceExtInfo.playCount
                                .toString()
                                .substring(0, 3)
                            }}万</span
                          >
                        </div>

                        <div
                          class="absolute right-[3px] text-[20px] bottom-[20px]"
                        >
                          <van-icon name="play" />
                        </div>
                        <div
                          class="w-[31vw] h-[31vw] rounded-[8px]"
                          @click="
                            $router.push(
                              `/Singing/${item.resources[0].resourceId}`
                            )
                          "
                        >
                          <img
                            :src="item?.uiElement.image.imageUrl"
                            style="border-radius: 8px"
                          />
                        </div>
                        <p class="text-[2.78vw] x flex flex-wrap">
                          {{ item.uiElement.mainTitle.title }}
                        </p>
                        <div
                          class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#e3e3e3] absolute z-[-1] top-[-2vw] left-[50%] -translate-x-[50%] rounded-[8px]"
                        ></div>
                      </div>
                    </div>
                  </div>
                </BetterScroll>
              </div>
            </div>
            <!--*新歌新碟\数字专辑  -->
            <div>
              <div class="w-[100vw] px-[4vw] overflow-hidden">
                <div class="flex justify-between items-center h-[12vw]">
                  <div class="flex items-center">
                    <span class="text-[4vw] font-[800]">
                      {{ homepagedata?.[2]?.uiElement?.subTitle?.title
                      }}<van-icon
                        name="arrow"
                        class="w-[4vw] h-[4vw] text-[14px]"
                      />
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
              <!-- 内容 -->
              <BetterScroll
                :option="{ scrollX: true }"
                class="w-[98vw] pt-[1vw] overflow-hidden"
              >
                <div class="flex w-[710vw] relative">
                  <ul
                    class="w-[88vw] scroll-item pb-[3.8vw]"
                    v-for="item in homepagedata[2]?.creatives"
                    :key="item"
                  >
                    <li
                      class="pl-[4vw] w-[88vw] pt-[2.7vw]"
                      v-for="i in item.resources"
                      :key="i"
                    >
                      <div class="flex">
                        <img
                          :src="i.uiElement.image.imageUrl"
                          alt=""
                          class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                        />

                        <div class="flex-1 pt-[2.85vw] ml-[1vw]">
                          <h4 class="text-[3.5vw]">
                            {{ i?.uiElement?.mainTitle?.title }}
                          </h4>
                          <p class="text-[2.36vw]">
                            {{ i?.uiElement?.subTitle?.title }}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pl-[2vw] w-[88vw] pt-[2.7vw]"></li>
                  </ul>
                </div>
              </BetterScroll>
            </div>
            <!--  * 排行榜 -->
            <div>
              <div class="w-[100vw] px-[4vw] overflow-hidden">
                <div class="flex justify-between items-center h-[12vw]">
                  <div class="flex items-center">
                    <span class="text-[4vw] font-[800]">
                      {{ homepagedata?.[3]?.uiElement?.subTitle?.title }}
                      <van-icon name="arrow" class="ml-[1vw]" />
                    </span>
                  </div>
                  <div>...</div>
                </div>
              </div>
              <!-- 内容 -->
              <div class="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden">
                <BetterScroll :option="{ scrollX: true }">
                  <div class="flex w-[540vw]">
                    <ul
                      class="ml-[2vw] w-[88vw] scroll-item mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] mb-[2vw] shadows"
                      v-for="item in homepagedata[3]?.creatives"
                      :key="item"
                      :style="
                        !checked ? 'backgroundColor:rgb(37 39 46 1)' : '#fff'
                      "
                    >
                      <li>
                        <div
                          class="flex justify-between items-center h-[12vw] px-[2vw]"
                        >
                          <div class="flex items-center">
                            <span class="text-[4vw]"
                              >{{ item.uiElement.mainTitle.title }}></span
                            >
                          </div>
                          <span class="">{{
                            item.uiElement.mainTitle.titleDesc
                          }}</span>
                        </div>
                      </li>

                      <li
                        v-for="(i, index) in item.resources"
                        :key="index"
                        class="mt-[2vw]"
                      >
                        <div class="flex">
                          <img
                            :src="i.uiElement.image.imageUrl"
                            class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                            alt=""
                          />
                          <div
                            class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
                          >
                            <div
                              class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
                            >
                              {{ index + 1 }}
                            </div>
                            <div class="w-[40vw]">
                              <h4 class="text-[3.5vw]">
                                {{ i.uiElement.mainTitle.title }}
                              </h4>
                              <p class="text-[2.36vw]">
                                {{ i.resourceExtInfo?.artists[0].name }}
                              </p>
                            </div>
                            <div
                              class="leading-[14vw] flex-3 ml-[4vw] text-[3.43vw]"
                            >
                              <span
                                v-if="i.uiElement.labelText.text === '新晋'"
                              >
                                <span class="text-[#39B184]">新晋</span>
                              </span>
                              <span v-else>
                                <span class="text-[#FF3836]">{{
                                  i.uiElement.labelText.text
                                }}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </BetterScroll>
              </div>
            </div>
            <!--  * 音乐日历 -->
            <div>
              <div class="w-[100vw] px-[4vw]">
                <div class="flex justify-between items-center h-[12vw]">
                  <div class="flex items-center">
                    <span class="text-[4vw] font-[800]">
                      音乐日历
                      <van-icon
                        name="arrow"
                        class="w-[4vw] h-[4vw] text-[14px]"
                      />
                    </span>
                  </div>
                  <div>...</div>
                </div>
              </div>
              <!-- 内容 -->
              <div class="w-[91vw] pt-[1vw] ml-[3vw] rounded-[8px]">
                <div class="flex mb-[6.31vw]">
                  <ul
                    class="mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] w-[91vw] pb-[3.8vw] shadows"
                    :style="checked ? 'backgroundColor:#333' : '#fff'"
                  >
                    <li class="flex justify-between mt-[3vw]">
                      <div class="">
                        <p class="text-[2.72vw]">{{ formattedDate }}</p>
                        <div class="text-[3.78vw]">
                          {{ fortune.calendarEvents?.[0]?.title }}
                        </div>
                      </div>
                      <div class="">
                        <img
                          :src="fortune.calendarEvents?.[0]?.imgUrl"
                          alt=""
                          class="w-[15vw] h-[15vw] rounded-[10px]"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-[#fff] fixed z-[3] bottom-0 h-[12vw] w-[100vw]">
              <van-tabbar v-model="active" active-color="#ee0a24">
                <van-tabbar-item icon="home-o">首页</van-tabbar-item>
                <van-tabbar-item icon="search" @click="$router.push('/mv')"
                  >排行榜</van-tabbar-item
                >
                <van-tabbar-item icon="friends-o" @click="$router.push('/me')"
                  >我的</van-tabbar-item
                >
                <van-tabbar-item icon="like-o">关注</van-tabbar-item>
                <van-tabbar-item icon="friends">标签</van-tabbar-item>
              </van-tabbar>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #fallback>
      <div class="w-[100vw] h-[100vh] flex items-center justify-center">
        login...
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getHomePageData, getIcon, getfortune } from "../service";
import BetterScroll from "../components/BetterScroll.vue";
import { showDialog } from "vant";
// 图标和首页的
const homepagedata = ref({}); // 首页的数据
const homeIcon = ref({}); //图标
const fortune = ref({}); //日历 （登录后）
const checked = ref(true); //深色模式
const active = ref(0);
// 定义当前激活的 tab 索引
const activeTab = ref(0);
// 处理 tab 点击事件
function handleTabClick(index) {
  activeTab.value = index;
  console.log(1);
}
// 获取数据的异步操作
(async () => {
  try {
    homepagedata.value = (await getHomePageData()).data.data.blocks; // 首页的数据
    homeIcon.value = (await getIcon()).data.data; //图标
    fortune.value = (
      await getfortune(
        todayAtNoonTimestamp.value,
        tomorrowAtNoonTimestamp.value
      )
    ).data.data; //日历
    // 数据加载完成后，设置 isDataLoading 为 false
  } catch (error) {
    console.log(error);
  }
})();
// Popup 弹出层
const open = ref(false);
const childrenDrawer = ref(false);
const showDrawer = () => {
  open.value = true;
};
const onClose = () => {
  open.value = false;
};
const showChildrenDrawer = () => {
  childrenDrawer.value = true;
};
// 获取当前天的 12 点时间戳
const todayAtNoonTimestamp = computed(() => {
  const now = new Date();
  const todayAtNoon = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    12,
    0,
    0,
    0
  );
  return todayAtNoon.getTime();
});
// 获取第二天的 12 点时间戳
const tomorrowAtNoonTimestamp = computed(() => {
  const tomorrowAtNoon = new Date(todayAtNoonTimestamp.value);
  tomorrowAtNoon.setDate(tomorrowAtNoon.getDate() + 1);
  return tomorrowAtNoon.getTime();
});
// 获取当前日期
const currentDate = new Date();
// 计算当前月份和日期
const formattedDate = computed(() => {
  const month = currentDate.getMonth() + 1; // 月份从0开始，所以加1
  const day = currentDate.getDate();
  return `${month}/${day}`;
});
// 判断推荐歌单的第一张图片怎么渲染
const filteredItems = computed(() => {
  // 检查 homepagedata 是否已经加载
  if (!homepagedata.value) {
    return []; // 如果没有数据，返回空数组
  }
  // 使用 filter 方法过滤出 creativeType 为 "list" 的元素
  return (
    homepagedata.value[1]?.creatives?.filter((item) => {
      return item.creativeType === "list";
    }) || []
  );
});
// 计算属性，用于返回深色模式的类名
const modeClasses = computed(() => {
  return {
    "dark-mode": checked.value,
  };
});
// 计算属性，用于返回深色模式的样式
const modeStyles = computed(() => {
  return {
    backgroundColor: !checked.value ? "#000" : "#F4F4F4",
    color: !checked.value ? "#F4F4F4" : "#000",
  };
});
const getImgId = (id, index) => {
  console.log("Image ID:", id);
  console.log("Index:", index);
  // 在这里可以添加更多的逻辑，比如导航到一个详情页面
  // 或者弹出一个对话框显示更多信息等
};
// 尝试获取名为 'Usename' 的数据
var UsenameData = localStorage.getItem("Usename");
// 判断 'Usename' 是否存在
if (UsenameData !== null) {
  console.log("Usename 数据存在。");
  // 这里可以执行进一步的操作，比如使用 UsenameData 变量
} else {
  console.log("Usename 数据不存在。");
  // 'Usename' 不存在，可以根据需要进行处理，例如提示用户或进行默认设置
}
</script>
<style>
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
}
.shadows {
  box-shadow: 0 0 10px rgba(204, 204, 204, 0.3);
}
</style>
