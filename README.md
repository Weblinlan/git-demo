// vue3 所有的 API 模块化
// vue2 中对 vue 库是全量引用 不能做到按需引用

// vue3 几乎兼容 vue2 语法 ----> 平滑的过渡

// vue3 推荐组合式 API
// vue3 干掉了一些

// vue2 中组件的配置项：
// 选项式 API
// 组合式 API （VUE3 推荐）
// name data methods computed watch components mixins beforeCreate create beforeMount mount
// beforeUpdata updated

// 与 data 选项等价的 APi
// vue3 的 api 都是模块化的
// vue3 API 基本都是函数 createApp ref

1.使用 createApp（根组件） 创建根组件

2.setup == beforeCreate + created

3.setup 是 vue3 Api（就是和 vue2 选项等价的 api） 的入口

4.setup 函数返回的对象中的属性才能被模版使用！！！

5.使用 ref 定义响应式数据 ref 定义的数据都需要使用.value 取值 (模版语法的{{}}语法)

6.使用 reactive 定义响应式数据 不能用于基本数据类型的定义！！！

7.ref 是 reactive 的语法糖！！！(ref 就是给予 reactive 实现的)

import { reactive } from 'vue'

const $ref = ( initValue )=> reactive ({ value:initValue });

8.ref 可以获取 DOM 节点或者组件.

9.ref 可以用于任意数据类型 reactive 仅用于对象

10. toRef:将 reactive 定义的响应式数据的某个属性转换为某个响应式数据 ref !!禁止对齐结构赋值

11.toRefs:批量转换

12.onMounted 相当于 vue2 中的 Mounted 生命周期

13.通过 createApp().component(组件名,);

14.setup 的第一个参数是组件的 props 属性 （获取组件 props 属性值是最常见的操作）

15.setup 的第二个参数是组件的 attrs emit slots expose 的集合构成的 context 对象

16.context.attrs => this.$attrs (属性)

17.context.emit => this.$emit (函数)

18.context.slots => this.$slots (属性)

19.在 vue3 的组件中只有通过 emits 选项配置的事件名才被认定为自定义事件

20.v-model 在 vue3 中的变化 v-model 可以传递参数了 （vue2）

21.constext.expose 对外暴露组件的数据

22.v-model 跟新绑定的值的自定义事件发生了变化 updata：key

```jsx
  /* vue2 */
  <MyComponent v-model="v1"/>
  <MyComponent :value="v1" @input="(e) => v1=e.target.value"/>
  /* vue3 */
  <MyComponent v-model:value="v1" v-model:index="v2"/>
  <MyComponent :value="v1" @update:value="(e) => v1=e.target.value"
               :index="v2" @update:index="(e) => v2=e.target.value" />
```

23.使用 compute API 来定义计算属性

```
import { ref, computed } from "vue";
export default {
  setup() {
    const a = ref(1);
    const b = ref(2);
    // 定义计算属性 求a和b的和
    const sum = computed(() => a.value + b.value);
    const sum = computed({
      get: () => a.value + b.value,
    });
    const sum = computed({
      get: () => a.value + b.value,
      set: (value) => a.value = b.value = value/2;
    });
  },
};
```

24.watch/watchEffect 是一个组合式 API 需要按需引入让后使用
26.watch 监听 ref 数据
watch([ref1,ref2],()=>{})

27.如何取消 watch 的监听 ： watch 的返回值就是一个取消当前监听的函数 执行该函数就可取消监听

```js
import { ref, watch } from "vue";
export default {
  setup() {
    const a = ref(1);
    const b = ref(2);
    // 监听单个ref
    watch(a, () => console.log("a changed"));
    watch(b, () => console.log("b changed"));
    watch(
      () => a.value,
      () => console.log("a changed")
    );
    watch(
      () => b.value,
      () => console.log("b changed")
    );
  },
};
```

26.nextTick 是一个组合式 API 需要按需引入后使用

27.watch 的第三个参数对像是可选的 immediate：true(初始化执行一次) deep：true 对于多层级的数据使用

```js
watch(
  () => count.value,
  () => {
    console.log("count更新");
  },
  {
    // 该watch的毁掉函数的初始化
    immediate: true,
    deep: true,
  }
);
```

28.watchEffect 99% 除了(1.第一次不执行 2.获取监听数据改变前的值)

29.Suspense 组件有什么作用 （等待组件异步资源准备完成后渲染组件 异步加载过程的定义 loading）

30.二个插件 （unplugin-auto-impot、unplugin-vue-components）
