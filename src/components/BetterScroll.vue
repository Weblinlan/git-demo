<template>
  <div ref="wrapper" :class="[{ flex: option.scrollX }, 'overflow-hidden']">
    <div :class="{ 'flex flex-1': option.scrollX }">
      <slot />
    </div>
  </div>
</template>

<script setup>
import BetterScroll from "better-scroll";
import { onMounted, ref, watch, nextTick, defineProps } from "vue";
const props = defineProps({
  dep: {},
  option: {
    type: Object,
    default: () => ({
      scrollY: true,
      click: true,
    }),
  },
});
const wrapper = ref(null);
onMounted(() => {
  const bs = BetterScroll(wrapper.value, props.option);
  watch(
    () => props.dep,
    () => nextTick(bs.refresh)
  );
});
</script>

<style></style>
