<template>
  <div id="app">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'app',
    data () {
      return {}
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    max-width: 750px;
    margin: 0 auto;
  }
</style>
