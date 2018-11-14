<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  font-size: 0.3rem;
}
@media only screen and (min-width: 768px) {
  html {
    font-size: 100px;
  }
}
@media only screen and (min-width: 1024px) {
  html {
    font-size: 150px;
  }
}
</style>
