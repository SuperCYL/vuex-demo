import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false


// 新版写法
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// 旧版写法
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })
