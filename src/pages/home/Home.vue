<template>
    <div class="index-header">
        <home-search></home-search>
        <home-swipe :items="swipeList"></home-swipe>
        test
    </div>
</template>

<script type="text/javascript">
import HomeSwipe from "./components/Swipe";
import HomeSearch from "./components/Search";

export default {
  data() {
    return {
      swipeList: []
    };
  },
  components: {
    HomeSwipe,
    HomeSearch
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
</style>
