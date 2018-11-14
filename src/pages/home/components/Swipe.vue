<template>
    <mt-swipe :auto="4000" class="header-swipe">
        <mt-swipe-item v-for="item in items" :key="item.id">
            <a href="javascript:void(0)">
                <img :src="item.src" alt="">
            </a>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  name: "HomeSwipe",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/variable.scss";
.header-swipe /deep/ .mint-swipe-indicator {
  width: $iconWidth;
  height: $iconHeight;
  background: $bgColor;
  opacity: 0.8;
}
.header-swipe /deep/ .mint-swipe-indicator.is-active {
  background: $activeColor;
}

.header-swipe {
  a,
  a img {
    display: block;
    height: 100%;
    width: 100%;
  }
}
</style>
