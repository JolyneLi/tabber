<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <span class="iconfont icon-yemian" slot="icon"></span>
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <span class="iconfont icon-leimupinleifenleileibie2" slot="icon"></span>
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <span
          class="iconfont icon-qicheqianlian-select-copy"
          slot="icon"
        ></span>
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <span class="iconfont icon-wodedangxuan" slot="icon"></span>
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabber/TabBar";
import TabBarItem from "./components/tabber/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style lang="less">
@import "./assets/css/Base.css";
@import "./assets/font/iconfont.css";
</style>
