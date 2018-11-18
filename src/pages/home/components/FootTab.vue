<template>
    <div class="tab-box">
        <ul class="tab-nav clearfix">
            <li class="tab-nav-item active">猜你喜欢</li>
            <li class="tab-nav-item">超值车源</li>
            <li class="tab-nav-item">降价急售</li>
        </ul>
        <div class="tab-con">
            <ul class="on">
                <li class="list-item">
                    <a class="car-info" href="javascript:void(0);">
                        <div class="car-img">
                            <img class="js-lazy-load" src="/static/images/tabnav-img1.jpg" alt="路虎 揽胜 2012款 5.0 V8 NA(进口)">
                        </div>
                        <h3 class="car-name">路虎 揽胜 2012款 5.0 V8 NA(进口)</h3>
                        <div class="car-km">
                            <span class="fl">2012年/9.4万公里</span>
                        </div>
                        <div class="car-price">
                            <strong class="fl">44.50万</strong>
                            <span class="fc-ac fl">新车价
                                <i>187.60万</i>
                            </span>
                        </div>
                        <p class="page-size" style="display: none">1/50</p>
                    </a>
                </li>
                <li class="list-item">
                    <a class="car-info" href="javascript:void(0);">
                        <div class="car-img">
                            <img data-role="lazyloadImg" class="js-lazy-load" src="/static/images/tabnav-img2.jpg" alt="哈弗H6 2014款 运动版 1.5T 手动两驱精英型">
                        </div>
                        <h3 class="car-name">哈弗H6 2014款 运动版 1.5T 手动两驱精英型</h3>
                        <div class="car-km">
                            <span class="fl">2015年/5.3万公里</span>
                        </div>
                        <div class="car-price">
                            <strong class="fl">5.85万</strong>
                            <span class="fc-ac fl">新车价
                                <i>14.00万</i>
                            </span>
                        </div>
                        <p class="page-size" style="display: none">1/50</p>
                    </a>
                </li>
                <li class="list-item">
                    <a class="car-info" href="javascript:void(0);">
                        <div class="car-img">
                            <img data-role="lazyloadImg" class="js-lazy-load" src="/static/images/tabnav-img3.jpg" alt="雪佛兰 科鲁兹 2013款 1.6L SL天窗版 MT">
                        </div>
                        <h3 class="car-name">雪佛兰 科鲁兹 2013款 1.6L SL天窗版 MT</h3>
                        <div class="car-km">
                            <span class="fl">2013年/7.8万公里</span>
                        </div>
                        <div class="car-price">
                            <strong class="fl">4.50万</strong>
                            <span class="fc-ac fl">新车价
                                <i>12.30万</i>
                            </span>
                        </div>
                        <p class="page-size" style="display: none">1/50</p>
                    </a>
                </li>
                <li class="list-item">
                    <a class="car-info" href="javascript:void(0);">
                        <div class="car-img">
                            <img data-role="lazyloadImg" class="js-lazy-load" src="/static/images/tabnav-img4.jpg" alt="现代ix25 2015款 1.6L 自动两驱智能型GLS">
                        </div>
                        <h3 class="car-name">现代ix25 2015款 1.6L 自动两驱智能型GLS</h3>
                        <div class="car-km">
                            <span class="fl">2015年/1.2万公里</span>
                        </div>
                        <div class="car-price">
                            <strong class="fl">8.50万</strong>
                            <span class="fc-ac fl">新车价
                                <i>15.50万</i>
                            </span>
                        </div>
                        <p class="page-size" style="display: none">1/50</p>
                    </a>
                </li>
                <li class="list-item">
                    <a class="car-info" href="javascript:void(0);">
                        <div class="car-img">
                            <img data-role="lazyloadImg" class="js-lazy-load" src="/static/images/tabnav-img5.jpg" alt="比亚迪S6 2013款 劲悦版 2.0L 手动豪华型 5座">
                        </div>
                        <h3 class="car-name">比亚迪S6 2013款 劲悦版 2.0L 手动豪华型 5座</h3>
                        <div class="car-km">
                            <span class="fl">2013年/6.2万公里</span>
                        </div>
                        <div class="car-price">
                            <strong class="fl">3.09万</strong>
                            <span class="fc-ac fl">新车价
                                <i>8.70万</i>
                            </span>
                        </div>
                        <p class="page-size" style="display: none">1/50</p>
                    </a>
                </li>
                <li class="list-item">
                    <a class="car-info" href="javascript:void(0);">
                        <div class="car-img">
                            <img data-role="lazyloadImg" class="js-lazy-load" src="/static/images/tabnav-img6.jpg" alt="江淮 瑞风S3 2014款 1.5L CVT豪华智能型">
                        </div>
                        <h3 class="car-name">江淮 瑞风S3 2014款 1.5L CVT豪华智能型</h3>
                        <div class="car-km">
                            <span class="fl">2014年/5.6万公里</span>
                        </div>
                        <div class="car-price">
                            <strong class="fl">4.00万</strong>
                            <span class="fc-ac fl">新车价
                                <i>9.20万</i>
                            </span>
                        </div>
                        <p class="page-size" style="display: none">1/50</p>
                    </a>
                </li>
                <li class="list-item" data-gzlog="tracking_type=click&amp;eventid=1110200000000008">
                    <div class="btnbox"><a href="/huzhou/buy" class="btnwhite">查看更多车源<span class="jump">&gt;</span></a></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "HomeFootTab"
};
</script>

<style lang="scss" scoped>
.tab-box {
  background: #fff;

  .tab-nav {
    box-shadow: 0 1px 3px 0 #e7ecf4;
    .tab-nav-item {
      float: left;
      width: 33.3%;
      line-height: 1.12rem;
      text-align: center;

      &.active {
        color: #22ac38;
        font-weight: 700;
      }
    }
  }

  .tab-con {
    position: relative;
    z-index: 1;

    .list-item {
      .car-info {
        display: block;
        min-height: 1.6rem;
        padding: 0.4rem;
        padding-left: 3.12rem;
        position: relative;

        &:before {
          content: "";
          display: block;
          height: 1px;
          position: absolute;
          left: 0.4rem;
          right: 0.4rem;
          bottom: 0;
          background: #eff2f6;
        }

        .car-img {
          float: left;
          position: absolute;
          left: 0.36rem;
          width: 2.4rem;
          height: 1.6rem;
          img {
            width: 100%;
          }
        }

        .car-name {
          font-size: 0.3rem;
          color: #303741;
          line-height: 0.34rem;
          font-weight: 400;
          margin-bottom: 0.2rem;
        }

        .car-km {
          font-size: 0.22rem;
          color: #8f96a0;
          line-height: 0.24rem;
          margin-bottom: 0.2rem;
        }

        .car-price {
          line-height: 0.3rem;

          strong {
            font-size: 0.34rem;
            color: #f56539;
            font-weight: 500;
            vertical-align: top;
          }

          span {
            font-size: 0.22rem;
            color: #8f96a0;
            display: inline-block;

            i {
              text-decoration: line-through;
            }
          }
        }
      }

      .btnbox {
        width: 100%;
        text-align: center;
        line-height: 1rem;

        a {
          color: #8f96a0;

          span {
            padding-left: 0.1rem;
          }
        }
      }
    }
  }
}
</style>
