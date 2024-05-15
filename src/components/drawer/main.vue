<template>
  <Transition name="slide">
    <div
      v-show="open"
      class="min-w-[300px] h-[100vh] bg-red-500 absolute z-[50] top-0 left-0"
    ></div>
  </Transition>

  <Teleport to="body">
    <div
      class="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] z-[40]"
    ></div>
  </Teleport>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
};

/**
 * transition =>Transition
 *
 *
 *
 */
</script>

<style>
/* 经常是从无到有 */
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-active {
  transition: all ease-in-out 300ms;
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-active {
  transition: all ease-in-out 300ms;
}
.slide-leave-from {
  transform: translateX(-100%);
}
</style>
