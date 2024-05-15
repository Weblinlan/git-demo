<template>
  <!-- v-model的改动 v-model需要传递双向绑定的属性参数 -->
  <Comp v-model:key="value"></Comp>
  <Comp :key="value" @update:key="(e) => (value = e)"></Comp>
  <!-- v-bind:属性.sync的兼容 .sync修饰符 已经被vue3弃用 因为v-model完全满足改需求 -->
  <!-- <Comp :key.sync="value"></Comp> 改写发已经弃用了 -->
  <Comp v-model="value"></Comp>
  <div>
    <!-- 改动的内置组件 -->
    <transition name="a">
      <div>vue2</div>
    </transition>
    <Transition name="b">
      <div>vue3</div>
    </Transition>

    <!-- 新增的组件 -->
    <Suspense>
      <template #default>
        <!-- 渲染主体(组件) 异步依赖(async setup) <template #default>是可以省略不写的 -->
      </template>
      <template #fallback>
        <!-- 在渲染主题没有完成异步依赖的解析resolve时候 渲染的元素 -->
      </template>
    </Suspense>
    <Teleport to="body">
      <!-- 突破当前组件的渲染区域 将内部元素渲染为to属性指定标签的内部(子节点) -->
    </Teleport>
  </div>
</template>

<script>
// vue2 vue3的<script setup>
export default {
  // 定义组件名称：
  name: "", // defineOptions({name:''}) 不用主动导入
  //   定义组件的响应式数据
  data() {}, // ref reactive 在setup中
  mathods: {}, // 普通函数 在setup中
  computed: {}, // computed 在setup中
  watch: {}, // watch 在setup中
  components: {}, //导入直接使用无需任何配置 可以直接使用
  props: {}, // defineProp 在setup中 不用主动导入 可以直接使用
  model: {}, //
  beforeCreate() {}, //在setup中
  created() {}, // 在setup中
  beforeMount() {}, //onBeforMount API 在setup中
  mounted() {}, //onmounted API 在setup中
  beforeUpdate() {}, //onbeforeUpdate API 在setup中
  updated() {}, //onupdated API 在setup中
  beforeDestroy() {}, //onbeforeUnmont api 在setup中
  destroyed() {}, //onUnmont api 在setup中

  //   vue2 不在选项中的api
  //  this.$attrs ==> cosnt attrs = useAttrs()
  //   this.$slots ==> const slots = useSlots()
  //   vue3新增的选项
  // emits:[], //defineEmits 在setup中 不用主动导入 可以直接使用
};
</script>

<style scoped>
.a-enter {
  /* vue2过渡起始状态 .[name]-enter */
}
.b-enter-form {
  /* vue3过渡起始状态 .[name]-enter-form */
}
</style>
