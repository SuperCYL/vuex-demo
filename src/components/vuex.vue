<template>
  <div class="vuex">
    Vuex 全局 Store count {{$store.state.count}}
    <button type="button" name="button" @click="increment">++</button>
    <button type="button" name="button" @click="decrement">--</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

<style scoped>

</style>
