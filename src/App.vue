<template>
  <div id="app">
    <router-view class="view"></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vFooter from 'components/footer'
  export default {
    name: 'app',
    data () {
      return {
        title: '首页',
        menuIcon: 'icon-menu.png'
      }
    },
    components: {
      vFooter
    },
    methods: {

    },
    mounted () {

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    height: 100%;
  }

</style>
