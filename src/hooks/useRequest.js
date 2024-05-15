import { ref, watch, onBeforeUnmount } from "vue";
export function useRequest(p, config = { manual: false, deps: [] }) {
  const loading = ref(true);
  const data = ref(null);
  const error = ref(null);
  if (!(typeof p === "function")) return;
  function run() {
    return p()
      .then(function (response) {
        loading.value = false;
        data.value =
          typeof config.formateResult === "function"
            ? config.formateResult(response)
            : response;
      })
      .catch(function () {
        loading.value = false;
        error.value = error;
      });
  }

  // const stop = watch(config.deps, run);
  // onBeforeUnmount(stop);

  if (!config.manual) {
    // 当手动位假 ===自动执行
    run();
  }

  return { loading, data, error, run };
}
