// * p参数是：请求参数的名称
// * config参数有3个值 manual：是否自动发送请求  deps：参数发生变化自动发送请求
// * formateResult函数是解构data数据使他直接返回想要的数据
import { ref, watch, onBeforeUnmount } from "vue";
export function useRequest(p, config = { manual: false, deps: [] }) {
  //* 定义一个ref的值为请求成功的值
  const loading = ref(true);
  // * 定义一个ref的值为请求成功返回的数据
  const data = ref(null);
  // *定义一个ref的值为请求失败返回的值
  const error = ref(null);

  // *  判断传进来的p是否是一个函数 如歌不是直接返回
  if (!(typeof p === "function")) return;

  // *  定义一个函数run() 用来封装promise的请求 使他可以 自动和手动请求
  function run() {
    p()
      .then((response) => {
        // 请求完后loading的值为false
        loading.value = false;
        data.value =
          typeof config.fomateResult === "function"
            ? config.fomateResult(response)
            : response;
      })
      .catch(() => {
        // 请求完后loading的值为false
        loading.value = false;
        error.value = error;
      });
  }

  // *  去监听数据deps中的数据发生变化就请求
  const stop = watch(config.deps, run);
  //*使用onBeforeUnmount终止watch监听 ---- 性能优化
  onBeforeUnmount(stop);
  // *  判读是否自动发送请求
  if (!config.manual) run();

  return { loading, data, error, run };
}
