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
.header-swipe /deep/ .mint-swipe-indicator {
  background: #fff !important;
  opacity: 0.8 !important;
}
.header-swipe /deep/ .mint-swipe-indicator.is-active {
  background: #22a038 !important;
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
