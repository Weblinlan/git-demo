import { onMounted, onBeforeUnmount, ref } from "vue";
export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);
  const mousemoveHandler = (e) => {
    x.value = e.clientX;
    y.value = e.clientY;
  };
  onMounted(() => {
    window.addEventListener("mousemove", mousemoveHandler);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", mousemoveHandler);
  });
  return { x, y };
}

// 新功能：实时获取鼠标位置
// 组合哪个API: onMounted, onBeforeUnmount, ref
// 通过定义一个函数 组合了vue3提供的API 去完成一个新的可以复用的功能的过程 => 自定义组合函数
