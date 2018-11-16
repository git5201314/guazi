<template>
    <div class="index-headlines">
        <div class="headlines-list">
            <div class="j-headlines-list" ref="headlinesList">
                <ul>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>选车攻略</span>如何快速评估一辆二手车车况？
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>严选车</span>什么是瓜子严选车？
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>严选车</span>原来瓜子把优质车源都“藏”在这里……
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>贷款购车</span>一图读懂分期手续
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>交易过户</span>史上最全！办理二手车过户时所须注意事项
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>预约看车</span>看车的时候，买家怎么才能看起来像老司机？
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>车况复检</span>解密瓜子的259项检测
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>解密二手车</span>瓜子二手车排行榜出炉！想买得值，或想卖价高，就看这里
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>维修保养</span>刚买二手车别高兴的太早 还有必须要做的6件事！
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>上门评估</span>二手车开几年卖车时最划算？
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>好车别错过</span>三年保值近7成，这3款SUV让人爱不释手！
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>好车别错过</span>8万元轿车怎么选？选择那些畅销车准没错
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>好车别错过</span>10-15万踏青车推荐，让您度过一个难忘的春季
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="headlines-item" data-gzlog="tracking_type=click&amp;eventid=92996300">
                            <span>好车别错过</span>只需5-10万元，您便能拥有“诗和远方”
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
  name: "HomeToutiao",
  data() {
    return {
      index: 1,
      h: 0
    };
  },
  methods: {
    // listAnimate() {
    //   var v = this;
    //   setInterval(function() {
    //     v.h = v.index * -0.76;
    //     v.index++;
    //     if (v.index == 16 / 2) {
    //       setTimeout(function() {
    //         v.h = 0;
    //         v.index = 0;
    //         list.style.transform = `translate3d(0, 0rem, 0)`;
    //         list.style.transition = "none";
    //       }, 300);
    //     }
    //     list.style.transform = `translate3d(0, ${v.h}rem, 0)`;
    //     list.style.transition = "all .3s linear";
    //   }, 2000);
    // }
    animate() {
      let v = this,
        list = this.$refs.headlinesList;

      list.addEventListener("transitionend", function() {
        let len = list.firstElementChild.childElementCount / 2 + 1;
        if (v.index >= len) {
          v.index %= len;
          v.index = v.index === 0 ? 1 : v.index;
          v.h = 0;
          list.style.transform = `translate3d(0, 0rem, 0)`;
          list.style.transition = "none";
        }
      });

      setInterval(function() {
        v.h = v.index * -0.76;
        v.index++;
        list.style.transform = `translate3d(0, ${v.h}rem, 0)`;
        list.style.transition = "all .3s linear";
      }, 2000);
    }
  },
  mounted: function() {
    // this.listAnimate();
    let list = this.$refs.headlinesList;
    list.appendChild(list.firstElementChild.cloneNode(true));
    this.animate();
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/variable.scss";
.index-headlines {
  position: relative;
  height: 0.64rem;
  padding: 0.3rem 0.4rem;
  background-color: #fff;
  overflow: hidden;

  &:before {
    content: "";
    display: block;
    height: 1px;
    background: #eff2f6;
    position: absolute;
    left: 0.4rem;
    right: 0.4rem;
    margin-top: -0.3rem;
  }

  .headlines-list {
    height: 0.68rem;
    padding-left: 1rem;
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      display: block;
      width: 0.68rem;
      height: 100%;
      position: absolute;
      margin-left: -1rem;
      background: url("/static/images/guazitoutiao.png") 0 0 no-repeat;
      background-size: 1.32rem auto;
    }

    .j-headlines-list {
      height: auto;

      .headlines-item {
        display: block;
        font-size: 0.24rem;
        color: $fontColor;
        font-weight: 300;
        margin-bottom: 0.14rem;
        @include ellipsis;

        span {
          padding-right: 0.25rem;
          position: relative;

          &:after {
            content: "|";
            display: block;
            width: 0.02rem;
            height: 100%;
            position: absolute;
            right: 0.12rem;
            top: 0;
            color: #777;
            font-weight: 100;
          }
        }
      }
    }
  }
}
</style>
