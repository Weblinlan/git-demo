import { isRef, ref } from "vue";
export const useFullscreen = (targetElement) => {
  const isFullscreen = ref(false);
  // 检测参数是否为ref数据
  const element = isRef(targetElement) ? targetElement : ref(targetElement);
  // 进入全屏
  const enter = () => {
    // 检测参数是否为HTML元素
    if (!(element.value instanceof Element))
      throw new Error("useFullscreen的参数必须是一个HTML元素");
    element.value.requestFullscreen().then(() => {
      isFullscreen.value = true;
    });
  };
  // 退出全屏
  const exit = () => {
    document.exitFullscreen().then(() => {
      isFullscreen.value = false;
    });
  };
  // 切换全屏状态
  const toggle = () => (isFullscreen.value ? exit() : enter());
  return { enter, exit, toggle, isFullscreen };
};

// !定义一个组合函数useRequest
// ! 对请求封装
/**
  import {ref} from "vue";
  impot { getUserInfo } from "@/service";
  export default {
    setup() {
      const res = ref();
      getUserInfo().then(function (data) {
        res.value = data.xxx
      })
    }
  }
 */

/**
  import {useRequest} from "@/hooks";
  impot { getUserInfo } from "@/service";
  export default {
    setup() {
      const {data: res} = useRequest(getUserInfo)
    }
  }
 */
