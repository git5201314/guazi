<template>
    <ul class="city-alphabet">
        <li class="alpha-item" v-for="item of citiesName" :key="item" v-text="item"></li>
    </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    citiesName: function() {
      var cities = [];
      for (var key in this.cities) {
        cities.push(key);
      }
      return cities;
    }
  }
};
</script>

<style lang="scss" scoped>
.city-alphabet {
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.6rem;
  bottom: 0;
  right: 0.1rem;
  z-index: 999;

  .alpha-item {
    line-height: 0.32rem;
    color: rgb(0, 188, 212);
    text-align: center;
  }
}
</style>
