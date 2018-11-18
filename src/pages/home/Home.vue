<template>
    <div class="main" id="main">
      <div class="index-header">
        <!-- 首页 搜索 start -->
        <home-search></home-search>
        <!-- 首页 搜索 end -->
        
        <!-- 首页 头部 滚动区域 start -->
        <home-swipe :items="swipeList"></home-swipe>
        <!-- 首页 头部 滚动区域 end -->
      </div>
      <div class="home-content">
          <!-- 首页 图标区域 start -->
          <home-content></home-content>
          <!-- 首页 图标区域 end -->

          <!-- 首页 瓜子头条 start -->
          <home-toutiao></home-toutiao>
          <!-- 首页 瓜子头条 end -->

          <!-- 热门二手车 start -->
          <home-second-car></home-second-car>
          <!-- 热门二手车 end -->

          <!-- 毛豆新车 start -->
          <home-mao-dou-car></home-mao-dou-car>
          <!-- 毛豆新车 end -->
      </div>
    </div>
</template>

<script type="text/javascript">
import HomeSwipe from "./components/Swipe";
import HomeSearch from "./components/Search";
import HomeContent from "./components/Content";
import HomeToutiao from "./components/Toutiao";
import HomeSecondCar from "./components/SecondCar";
import HomeMaoDouCar from "./components/BaoMai";

export default {
  data() {
    return {
      swipeList: []
    };
  },
  components: {
    HomeSwipe,
    HomeSearch,
    HomeContent,
    HomeToutiao,
    HomeSecondCar,
    HomeMaoDouCar
  },
  methods: {
    getHomeInfo() {
      // 请求后台数据
      this.getHomeInfoSucc();
    },
    getHomeInfoSucc() {
      this.swipeList = [
        { id: 1, src: "/static/images/header1.jpg" },
        { id: 2, src: "/static/images/header2.jpg" },
        { id: 3, src: "/static/images/header3.jpg" },
        { id: 4, src: "/static/images/header4.png" }
      ];
    }
  },
  created() {
    this.getHomeInfo();
  }
};
</script>

<style scoped lang="scss">
.index-header {
  height: 3.26rem;
}
.home-content {
  background-color: #f5f7fa;
}
</style>
