<template>
    <div class="city-header">
        <div class="city-title ">
            <router-link to="/" tag="span">&lt;</router-link>
            <h3>城市选择</h3>
        </div>
        <div class="city-input">
            <input type="text" placeholder="输入城市名或拼音"/>
        </div>
    </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="scss" scoped>
.city-header {
  position: relative;
  line-height: 0.8rem;
  color: #fff;
  font-size: 0.3rem;

  span {
    position: absolute;
    left: 0.1rem;
    top: 0;
    cursor: pointer;
  }
  h3 {
    text-align: center;
  }

  .city-input {
    padding: 0 0.1rem;

    input {
      width: 100%;
      padding: 0 0.2rem;
      line-height: 0.6rem;
      font-size: 0.28rem;
      text-align: center;
      border-radius: 0.1rem;
      box-sizing: border-box;
    }
  }
}
</style>
