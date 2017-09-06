<template>
  <div>
    <search-bar></search-bar>
    <!-- swipe -->
    <div class="slider">
    </div>
    <!-- /swipe -->
  </div>
</template>
<script type="text/ecmascript-6">
  import searchBar from 'components/searchBar'
  export default {
    data () {
      return {}
    },
    components: {
      searchBar
    }
  }

</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .slider {
    position: relative;
    max-width: 750px;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 50.6%;
    height: 0;
    .mint-swipe {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      max-height: 380px;
    }
  }
</style>
