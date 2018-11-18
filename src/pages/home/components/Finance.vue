<template>
    <!-- 毛豆新车 start -->
    <div class="index-column index-maodou-car">
        <div class="column-title">
            <h3>瓜子金融</h3>
            <a href="javascript:void(0)">详情
                <span>&gt;</span>
            </a>
        </div>
        <div class="entry-list">
            <ul class="entry-operate-list second-operate-list clearfix">
                <li class="operate-item operate-item-0">
                    <a href="javascript:void(0);">
                        <div class="operate-item-text">
                            <p>瓜子金融</p>
                            <span>低首付 买好车</span>
                        </div>
                        <div class="operate-item-img">
                            <img src="/static/images/finance1.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="operate-item operate-item-1">
                    <a href="javascript:void(0);">
                        <div class="operate-item-text">
                            <p>付三成开好车</p>
                            <span>首付6000元起</span>
                        </div>
                        <div class="operate-item-img">
                            <img src="/static/images/finance2.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="operate-item operate-item-2">
                    <a href="javascript:void(0);">
                        <div class="operate-item-text">
                            <p>测测您的额度</p>
                            <span>秒获50万分期金额</span>
                        </div>
                        <div class="operate-item-img">
                            <img src="/static/images/finance3.png" alt="">
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!-- 毛豆新车 end -->
</template>

<script>
export default {
  name: "HomeFinance",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/variable.scss";
.index-maodou-car {
  border-top: 0.12rem solid #f5f7fa;
  background-color: #fff;

  .column-title {
    height: 1rem;
    position: relative;

    h3 {
      float: left;
      width: 2rem;
      line-height: 0.5rem;
      margin-top: 0.24rem;
      padding-left: 0.44rem;
      box-sizing: border-box;
      border-radius: 0 0.5rem 0.5rem 0;
      font-size: 0.28rem;
      color: #fff;
      background-image: linear-gradient(-90deg, #05d2a4, #16e1b6);
      position: relative;

      &:before {
        content: "";
        display: inline-block;
        width: 0.26rem;
        height: 0.26rem;
        position: absolute;
        left: 0.1rem;
        top: 0.12rem;
        background: url("/static/images/finance-icon.png") -6.6rem 0 no-repeat;
        background-size: 6.84rem auto;
      }
    }
    a {
      float: right;
      margin-top: 0.44rem;
      padding-right: 0.4rem;
      font-size: 0.23rem;
      color: #8f96a0;
    }
  }

  .entry-list {
    padding: 0 0.4rem;
    overflow: hidden;

    .operate-item {
      width: 33.3%;
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
        padding-top: 0.42rem;
        height: 1.3rem;
        position: relative;
        text-align: center;
        z-index: 999;

        p {
          width: 100%;
          padding-top: 0.32rem;
          margin-bottom: 0.14rem;
          color: #000;
          font-size: 0.3rem;
          text-align: center;
          @include ellipsis();
        }
        span {
          display: block;
          font-size: 0.2rem;
          color: #ff7147;
        }

        i {
          color: #fff;
          font-size: 0.16rem;
          padding: 0.05rem 0.1rem;
          background-image: linear-gradient(
            right,
            rgb(255, 99, 96),
            rgb(255, 125, 39)
          );
        }
      }

      .operate-item-img {
        width: 2.2rem;
        height: 2.2rem;
        margin: 0 auto;
        overflow: hidden;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
