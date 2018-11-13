import '@/assets/reset.css'
import '@/assets/border.css'
import '&/mint-ui/lib/style.min.css'
import '@/assets/iconfont.css'

import fastClick from 'fastclick'

import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import Home from '@/pages/home/Home'

Vue.use(Router)
Vue.use(MintUI)
fastClick.attach(document.body)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  }]
})