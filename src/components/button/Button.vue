<template>
  <div :class="['btn', `btn-${type}`, { 'btn-round': round }]" @click="trigger">
    <slot />
  </div>
</template>
<script>
export default {
  // 在vue3中props的定义没有变化
  // 获取组件的porps属性值 获取组件的attrs值 触发自定义事件有变化
  // 通过emits选项区分自定义事件
  // 只有在emits选项中配置的事件才被认定为自定义事件 否则按原生事件处理
  emits: ["click"],

  setup(props, context) {
    // console.log(props, context);
    console.log(context.attrs.abc);
    const trigger = () => context.emit("click");
    // 当在组件内部不主动暴露数据 当前组件数据可以直接获取（porps return的数据）
    // 当在组件内部主动暴露数据 只能获取你主动暴露的数据 其他数据都不可获取
    context.expose({ a1, f1 });
    // 需求：让组件的所有数据都私有化 不能外界访问
    return { trigger };
  },
  props: {
    type: {
      default: "default",

      validator(value) {
        return [
          "primary",
          "success",
          "info",
          "warning",
          "danger",
          "default",
        ].includes(value);
      },
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.btn {
  user-select: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.btn:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}
</style>
