<template>
  <div class="ipt">
    <input
      v-bind="$attrs"
      class="ipt-inner"
      :value="value"
      @input="(e) => emit('update:value', e.target.value)"
      :type="type"
    />
    <span
      @click="emit('update:value', '')"
      class="icon-[ooui--clear]"
      v-show="isClearable"
    ></span>
    <div v-show="showPassword" @click="isPasswordVisible = !isPasswordVisible">
      <span
        v-if="isPasswordVisible"
        class="icon-[heroicons-outline--eye]"
      ></span>
      <span v-else class="icon-[mdi--eye-off-outline]"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits, defineProps } from "vue";
const isPasswordVisible = ref(false);
const props = defineProps({
  value: {
    required: true,
    type: String,
  },
  clearable: {
    default: false,
    type: Boolean,
  },
  showPassword: {
    default: false,
    type: Boolean,
  },
});
const emit = defineEmits(["update:value"]);
const isClearable = computed({
  get: () => props.clearable && props.value.length > 0,
});
const type = computed(() =>
  props.showPassword && !isPasswordVisible ? "password" : "text"
);
</script>

<style scoped>
.ipt {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.ipt-inner {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.ipt-inner:focus {
  outline: none;
  border-color: #409eff;
}
.ipt-inner:hover {
  border-color: #c0c4cc;
}
</style>
