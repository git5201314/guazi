<template>
  <div class="city-search" ref="search" v-show="hasKeywords">
    <ul class="city-serach-list">
      <li class="city-search-item" v-for="item of filterSearchList" :key="item.id">
        <button @click="changeCity(item.name)" v-text="item.name"></button>
      </li>
      <li class="city-search-item" v-show="hasCity">暂无数据</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object,
    keywords: String
  },
  data() {
    return {
      filterSearchList: []
    };
  },
  methods: {
    changeCity(city) {
      this.$store.dispatch("changeCity", city);
      this.$router.push("/");
    }
  },
  computed: {
    cityList() {
      let cities = [];
      for (let i in this.cities) {
        this.cities[i].forEach(ele => {
          cities.push({
            id: ele.id,
            spell: ele.spell,
            name: ele.name
          });
        });
      }
      return cities;
    },
    hasCity() {
      return !this.filterSearchList.length;
    },
    hasKeywords() {
      return this.keywords;
    }
  },
  watch: {
    keywords(newVal, oldVal) {
      this.filterSearchList = [];

      if (!newVal) {
        return;
      }

      this.cityList.forEach(ele => {
        if (ele.spell.includes(newVal) || ele.name.includes(newVal)) {
          this.filterSearchList.push({
            id: ele.id,
            name: ele.name
          });
        }
      });
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  }
};
</script>

<style lang="scss" scoped>
.city-search {
  position: absolute;
  top: 1.6rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  color: #777;
  z-index: 9999;
  overflow: hidden;

  .city-search-item {
    border-bottom: 1px solid #fafafa;
    font-size: 0.25rem;

    button {
      width: 100%;
      padding: 0.2rem;
      padding-left: 0.2rem;
      text-align: left;
      background: #eee;
      color: #777;
    }
  }
}
</style>
