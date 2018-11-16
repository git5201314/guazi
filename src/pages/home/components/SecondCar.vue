<template>
    <!-- 热门二手车 start -->
    <div class="index-column index-second-car">
        <div class="column-title">
            <h3>热门二手车</h3>
            <a href="javascript:void(0)">查看全部
                <span>&gt;</span>
            </a>
        </div>
        <div class="entry-list">
            <ul class="entry-money-list">
                <li><a href="javascript:void(0);">5万以下</a></li>
                <li><a href="javascript:void(0);">5-10万</a></li>
                <li><a href="javascript:void(0);">10-15万</a></li>
                <li><a href="javascript:void(0);">15万以上</a></li>
            </ul>
            <ul class="entry-brand-list clearfix">
                <li>
                    <a href="javascript:void(0);"><i class="icon icon-dazhong"></i>大众</a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <i class="icon icon-bieke"></i>
                        别克
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <i class="icon icon-bc"></i>
                        奔驰
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <i class="icon icon-bm"></i>
                        宝马
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <i class="icon icon-byd"></i>
                        比亚迪
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <i class="icon icon-rw"></i>
                        荣威
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <i class="icon icon-f"></i>
                        福特
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <i class="icon icon-more">
                            <span></span>
                            <span></span>
                            <span></span>
                        </i>
                        更多
                    </a>
                </li>
            </ul>
            <ul class="entry-operate-list second-operate-list clearfix">
                <li class="operate-item operate-item-0">
                    <a href="javascript:void(0);">
                        <div class="operate-item-text">
                            <p>严选好车</p>
                            <span>优惠10000元</span>
                        </div>
                        <div class="operate-item-img">
                            <img src="/static/images/operate1.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="operate-item operate-item-1">
                    <a href="javascript:void(0);">
                        <div class="operate-item-text">
                            <p>限时秒杀</p>
                            <span>9折好车</span>
                        </div>
                        <div class="operate-item-img">
                            <img src="/static/images/operate2.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="operate-item operate-item-2">
                    <a href="javascript:void(0);">
                        <div class="operate-item-text">
                            <p>准新车</p>
                            <span>新车二手价</span>
                        </div>
                        <div class="operate-item-img">
                            <img src="/static/images/operate3.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="operate-item operate-item-3">
                    <a href="javascript:void(0);">
                        <div class="operate-item-text">
                            <p>爆款SUV</p>
                            <span>新车首付3000起</span>
                        </div>
                        <div class="operate-item-img">
                            <img src="/static/images/operate4.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="operate-item operate-item-4">
                    <a href="javascript:void(0);">
                        <div class="operate-item-text">
                            <p>分期购车</p>
                            <span>轻松买车0压力</span>
                        </div>
                        <div class="operate-item-img">
                            <img src="/static/images/operate5.png" alt="">
                        </div>
                    </a>
                </li>
            </ul>
            <div class="second-car-focus">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="item of list" :key="item.id">
                        <a href="javascript:void(0)">
                            <img :src="item.imgUrl" alt="">
                        </a>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>

    </div>
    <!-- 热门二手车 end -->
</template>

<script>
export default {
  name: "HomeSecondCar",
  data() {
    return {
      list: [
        { id: "0001", imgUrl: "/static/images/focus1.jpg" },
        { id: "0002", imgUrl: "/static/images/focus2.png" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/variable.scss";
.second-car-focus /deep/ .mint-swipe-indicator {
  width: $iconWidth;
  height: $iconHeight;
  background: $bgColor;
  opacity: 0.8;
  border: 1px solid #ccc;
}
.second-car-focus /deep/ .mint-swipe-indicator.is-active {
  background: $activeColor;
}

.index-column {
  border-top: 0.12rem solid #f5f7fa;
  background-color: #fff;

  .column-title {
    height: 1.075rem;
    line-height: 1.075rem;
    padding: 0 0.4rem;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0.4rem;
      right: 0.4rem;
      height: 1px;
      background-color: #eff2f6;
    }

    h3 {
      float: left;
      font-size: 0.28rem;
    }
    a {
      float: right;
      font-size: 0.23rem;
      color: #8f96a0;
    }
  }

  .entry-list {
    padding: 0 0.4rem;

    a {
      color: #303741;
      font-weight: 150;
      font-size: 0.28rem;
    }

    .entry-money-list {
      width: 100%;
      margin-top: 0.22rem;
      height: 0.78rem;
      line-height: 0.78rem;

      li {
        display: table-cell;
        width: 1%;
        text-align: center;
      }
    }

    .entry-brand-list {
      margin-bottom: 0.22rem;

      li {
        float: left;
        width: 25%;
        text-align: center;

        a {
          position: relative;
          display: block;
          width: 100%;
          padding: 0.16rem 0 0.2rem;
          font-size: 0.27rem;
          max-width: 1.5rem;
          @include ellipsis();

          .icon {
            display: inline-block;
            width: 0.3rem;
            height: 0.3rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 0.3rem auto;
            vertical-align: middle;
            margin-bottom: 0.03rem;
            margin-right: 0.1rem;
          }
          .icon-more {
            display: inline-block;
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
            background: #eff2f6;

            span {
              display: inline-block;
              width: 0.04rem;
              height: 0.04rem;
              background: #8f96a0;
              margin-right: -0.02rem;
              margin-bottom: 0.04rem;
            }
          }

          .icon-dazhong {
            background-image: url("/static/images/dazhong.png");
          }
          .icon-bieke {
            background-image: url("/static/images/bieke.png");
          }
          .icon-bc {
            background-image: url("/static/images/benchi.png");
          }
          .icon-bm {
            background-image: url("/static/images/baoma.png");
          }
          .icon-byd {
            background-image: url("/static/images/byd.png");
          }
          .icon-rw {
            background-image: url("/static/images/rongwei.png");
          }
          .icon-f {
            background-image: url("/static/images/ford.png");
          }
        }
      }
    }

    .entry-operate-list {
      background: #fff;
      .operate-item {
        height: 2.52rem;
        position: relative;
        float: left;
        padding: 0 0.04rem 0.04rem 0;
        box-sizing: border-box;
        overflow: hidden;

        a {
          display: block;
        }

        .operate-item-text {
          position: relative;
          padding-left: 0.3rem;
          text-align: left;
          z-index: 999;

          p {
            width: 1.2rem;
            padding-top: 0.32rem;
            margin-bottom: 0.1rem;
            color: #000;
            font-size: 0.3rem;
            @include ellipsis();
          }
          span {
            font-size: 0.2rem;
            color: #f00;
          }
        }

        .operate-item-img {
          position: absolute;
          left: 0;
          right: 0.04rem;
          top: 0;

          img {
            width: 100%;
          }
        }
      }

      .operate-item-0,
      .operate-item-1 {
        width: 50%;
        height: 2.24rem;
      }

      .operate-item-2,
      .operate-item-3,
      .operate-item-4 {
        width: 33.3%;

        .operate-item-text {
          width: 100%;
          text-align: center;
          padding: 0;

          p {
            width: 100%;
            padding-top: 0.2rem;
            text-align: center;
          }
        }
      }
    }

    .second-car-focus {
      height: 2rem;

      img {
        width: 100%;
      }
    }
  }
}
</style>
