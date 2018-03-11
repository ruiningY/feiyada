// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//animate.css
import 'animate.css'
Vue.config.productionTip = false

//
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)
//main.js
import store from './vuex/store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

