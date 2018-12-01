import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: localStorage.getItem('city') || '上海'
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit('changeCity', city);
    }
  },
  mutations: {
    changeCity(state, city) {
      state.city = city;
      localStorage.setItem('city', city);
    }
  }
})