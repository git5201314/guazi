<template>
  <div class="city">
    <city-header></city-header>
    <city-list
      :city="city"
      :hot="hotCities"
      :cities="cities"
      :alphaCity="alphaCity"
      :alphaIndex="alphaIndex"
    ></city-list>
    <city-alpha :cities="cities" @alphabetChange="alphabetChangeHandler"></city-alpha>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CityList from "./components/List";
import CityAlpha from "./components/Alphabet";
import axios from "axios";

export default {
  name: "City",
  components: {
    CityHeader,
    CityList,
    CityAlpha
  },
  data() {
    return {
      city: "",
      hotCities: [],
      alphaCity: "",
      alphaIndex: 0,
      cities: {}
    };
  },
  methods: {
    alphabetChangeHandler(name, index) {
      this.alphaCity = name;
      this.alphaIndex = index;
    }
  },
  mounted() {
    const v = this;
    axios.get("/api/city.json").then(function(res) {
      var data = res.data;
      if (data.ret) {
        data = data.data;
        v.city = data.city;
        v.cities = data.cities;
        v.hotCities = data.hotCities;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.border-bottom {
  &:after {
    border-width: 0.04rem;
    border-color: #666;
  }
}

.city {
  background: rgb(0, 188, 212);
}
</style>
