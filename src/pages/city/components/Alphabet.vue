<template>
  <ul class="city-alphabet">
    <li
      class="alpha-item"
      v-for="(item, index) of citiesName"
      :key="item"
      v-text="item"
      ref="alphabet"
      @click="$emit('alphabetChange', item, index)"
      @touchstart="startHandler"
      @touchmove="moveHandler"
      @touchend="endHandler"
    ></li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      timer: ""
    };
  },
  methods: {
    startHandler() {
      this.touchStatus = true;
    },
    moveHandler(event) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
          var alphaA = this.$refs.alphabet[0],
            alphaATop = alphaA.getBoundingClientRect().top,
            alphaAHeight = alphaA.offsetHeight,
            touchY = event.touches[0].clientY - alphaATop,
            index = Math.floor(touchY / alphaAHeight);

          if (index >= 0 && index < this.citiesName.length) {
            this.$emit("alphabetChange", this.citiesName[index], index);
          }
        }, 20);
      }
    },
    endHandler() {
      this.touchStatus = false;
    }
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