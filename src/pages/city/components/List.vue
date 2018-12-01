<template>
  <div class="city-con" ref="con">
    <div>
      <div class="city-con-item">
        <h3 class="city-title border-tombottom">当前城市</h3>
        <div class="city-list">
          <button type="button">{{city}}</button>
        </div>
      </div>
      <div class="city-con-item">
        <h3 class="city-title border-tombottom">热门城市</h3>
        <div class="city-list">
          <button type="button" v-for="item of hot" :key="item.id" v-text="item.name"></button>
        </div>
      </div>
      <div class="city-con-item" v-for="(list, key) of cities" :key="key">
        <h3 class="city-title border-tombottom" v-text="key" ref="alphabetName"></h3>
        <ul>
          <li class="border-bottom" v-for="item of list" :key="item.id">
            <button type="button" v-text="item.name"></button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "CityList",
  props: {
    city: {
      type: String,
      default: "上海"
    },
    alphaCity: String,
    alphaIndex: Number,
    hot: Array,
    cities: Object
  },
  watch: {
    alphaCity(newVal, oldVal) {
      this.scroll.scrollToElement(this.$refs.alphabetName[this.alphaIndex]);
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.con);
  }
};
</script>

<style lang="scss" scoped>
.city-con {
  overflow: hidden;
  position: absolute;
  top: 1.6rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  font-size: 0.25rem;

  button {
    display: inline-block;
    background: #fff;
    color: #666;
  }

  .city-con-item {
    .city-title {
      padding: 0.05rem 0.2rem;
      line-height: 0.4rem;
      background: #eee;
      color: #666;
    }

    .city-list {
      padding: 0.2rem;
      background: #fff;

      button {
        width: 27%;
        line-height: 0.5rem;
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;
        border: 1px solid #ccc;
        border-radius: 0.04rem;
      }
    }

    ul {
      li {
        button {
          padding-left: 0.2rem;
          line-height: 0.6rem;
        }
      }
    }
  }
}
</style>
