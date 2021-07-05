<template>
  <div class="tab-bar-item">
    <div :class="{ active: isactive }">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      isactive: true,
    };
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.active {
  color: red;
}
</style>
