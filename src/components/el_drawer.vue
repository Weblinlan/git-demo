<template>
  <div v-show="visible">
    <div class="el-drawer" @click="prepareToCloseDrawer"></div>
    <div :class="['el-drawer_body', drawerBodyClass]">
      <div>{{ city }}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      drawer: false,
    },
    city: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      shouldShow: this.visible, // 控制元素是否显示
    };
  },
  computed: {
    // 根据 city 的值动态计算类名
    drawerBodyClass() {
      switch (this.city) {
        case "ltr":
          return "class-for-ltr";
        case "rtl":
          return "class-for-rtl";
        case "ttb":
          return "class-for-ttb";
        case "btt":
          return "class-for-btt";
        default:
          return "";
      }
    },
  },
  methods: {
    prepareToCloseDrawer() {
      this.$emit("close-drawer");
      // 注意这里不立即隐藏元素，我们等动画结束后再隐藏
    },
  },
};
</script>
<style>
.el-drawer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}
.el-drawer_body {
  position: absolute;
  bottom: 0;
  left: 0;
  flex: 1;
  overflow: auto;
  width: 100%;
  height: 100px;
  padding-top: 30px;
  padding-left: 10px;
  background-color: white;
  animation: open 0.6s ease-in-out forwards;
}

.class-for-ltr {
  left: 0;
  width: 100px;
  height: 100vh;
  animation: zuo 0.6s ease-in-out forwards;
}

.class-for-ttb {
  position: absolute;
  top: 0;
  left: 0;
  flex: 1;
  overflow: auto;
  width: 100%;
  height: 100px;
  padding-top: 30px;
  padding-left: 10px;
  background-color: white;
  animation: shang 0.6s ease-in-out forwards;
}
.class-for-rtl {
  position: absolute;
  top: 0;
  left: 100%;
  flex: 1;
  overflow: auto;
  width: 100px;
  height: 100%;
  padding-top: 30px;
  padding-left: 10px;
  background-color: white;
  animation: you 0.6s ease-in-out forwards;
}
@keyframes you {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100px);
  }
}
@keyframes shang {
  0% {
    transform: translateY(-180px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes zuo {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes open {
  0% {
    transform: translateY(180px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
