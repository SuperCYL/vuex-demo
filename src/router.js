import Vue from 'vue'
import VueRouter from 'vue-router'
import page1 from './pages/1.vue'
import page2 from './pages/2.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', name: 'Page1', component: page1 },
    { path: '/page2', name: 'Page2', component: page2 }
  ]
})
