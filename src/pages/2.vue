<template lang="html">
  <div class="page">
    this is page 2
    <hr>
    <div style="background: lightblue; width: 300px;">
      这是 page 2 显示的 count {{$store.state.count}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page2'
}
</script>

<style>
</style>
