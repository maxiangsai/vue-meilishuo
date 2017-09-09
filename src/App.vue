<template>
  <div id="app">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vFooter from 'components/footer'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      vFooter
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    max-width: 750px;
    margin: 0 auto;
  }
</style>
