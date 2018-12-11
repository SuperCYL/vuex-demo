<template lang="html">
  <div class="page">
    this is page 1 , page1 的 count {{$store.state.count}}
    <router-link to="/pageb">go page 2</router-link>
  </div>
</template>

<script>
export default {
  name: 'Page1'
}
</script>

<style>
</style>
