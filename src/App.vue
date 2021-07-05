<template>
  <div id="app">
    <router-view />
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <span class="iconfont icon-yemian" slot="icon"></span>
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <span class="iconfont icon-leimupinleifenleileibie2" slot="icon"></span>
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cate" activeColor="blue">
        <span
          class="iconfont icon-qicheqianlian-select-copy"
          slot="icon"
        ></span>
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
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
