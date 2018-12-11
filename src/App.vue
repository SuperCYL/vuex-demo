<template>
  <div id="app">
    <router-view/>
    <vuex-demo/>

    <hr>
    <div style="background: grey; width: 300px;">
      这是主页的 count {{$store.state.count}}
    </div>
  </div>
</template>

<script>
import VuexDemo from './components/vuex.vue'
export default {
  name: 'app',
  components: {
    VuexDemo,
  }
}
</script>

<style>

</style>
