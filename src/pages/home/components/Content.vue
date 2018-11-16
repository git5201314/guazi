<template>
    <section class="nav-content clearfix">
        <mt-swipe :auto="0" class="content-swipe">
            <mt-swipe-item v-for="(page, index) of computedIcons" :key="index">
                <p class="clearfix nav-content-item" v-for="item of page" :key="item.id">
                     <a href="javascript:void(0);" :style="item.imgUrl">
                        {{item.msg}}
                        <span class="iconfree" v-if="item.free">{{item.freeText}}</span>
                    </a>
                </p>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>

<script>
export default {
  name: "HomeContent",
  data() {
    return {
      icons: [
        {
          id: "0001",
          msg: "二手车",
          imgUrl: "background-image: url(/static/images/ershouche.png)"
        },
        {
          id: "0002",
          msg: "严选车",
          imgUrl: "background-image: url(/static/images/yanxuanche.png)",
          free: true,
          freeText: "优选"
        },
        {
          id: "0003",
          msg: "分期购",
          imgUrl: "background-image: url(/static/images/fenqigou.png)"
        },
        {
          id: "0004",
          msg: "新车",
          imgUrl: "background-image: url(/static/images/xinche.png)",
          free: true,
          freeText: "降3万"
        },
        {
          id: "0005",
          msg: "高价卖车",
          imgUrl: "background-image: url(/static/images/gaojiamaiche.png)"
        },
        {
          id: "0006",
          msg: "快速卖车",
          imgUrl: "background-image: url(/static/images/kuaisumaiche.png)",
          free: true,
          freeText: "保卖"
        },
        {
          id: "0007",
          msg: "估价",
          imgUrl: "background-image: url(/static/images/gujia.png)"
        },
        {
          id: "0008",
          msg: "限时秒杀",
          imgUrl: "background-image: url(/static/images/xianshimiaosha.png)"
        },
        {
          id: "0009",
          msg: "查成交",
          imgUrl: "background-image: url(/static/images/chachengjiao.png)"
        },
        {
          id: "0010",
          msg: "热销SUV",
          imgUrl: "background-image: url(/static/images/suv.png)"
        }
      ],
      pages: []
    };
  },
  computed: {
    computedIcons: function() {
      this.icons.forEach((item, index) => {
        var i = Math.floor(index / 8);
        if (!this.pages[i]) {
          this.pages[i] = [];
        }
        this.pages[i].push(this.icons[index]);
      });
      return this.pages;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/variable.scss";
$width: 100%;
.content-swipe /deep/ .mint-swipe-indicator {
  width: $iconWidth;
  height: $iconHeight;
  background: $bgColor;
  border: 1px solid #ccc;
  opacity: 1;
}
.content-swipe /deep/ .mint-swipe-indicator.is-active {
  background: $activeColor;
}
.content-swipe /deep/ .mint-swipe-items-wrap {
  width: 100%;
}
.content-swipe /deep/ .mint-swipe-item {
  width: 100%;
}
// .nav-content {
//   background-color: #f5f7fa;
//   height: $width / 2;
//   // padding-bottom: 50%;

//   .nav-content-item {
//     display: inline-block;
//     width: 25%;
//     padding-bottom: 25%;
//     background-color: #f00;
//   }
// }
.nav-content {
  background-color: #fff;
  height: 3.83rem;
  padding-bottom: 0.14rem;

  .nav-content-item {
    float: left;
    width: 25%;
    font-size: 0.24rem;

    a {
      float: left;
      width: 100%;
      padding-top: 76%;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 0.8rem auto;
      text-align: center;
      color: $fontColor;
      font-weight: 100;
      font-size: 0.22rem;
      position: relative;

      span {
        position: absolute;
        top: 24%;
        right: 9%;
        padding: 0 0.06rem;
        line-height: 0.3rem;
        border: 1px solid #fff;
        border-radius: 0.3rem 0.3rem 0.3rem 0;
        text-align: center;
        color: #fff;
        background-color: #ff2d3d;
        font-size: 0.18rem;
        white-space: nowrap;
      }
    }
  }
}
</style>
