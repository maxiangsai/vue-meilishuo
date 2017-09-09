<template>
  <div>
    <div class="slide-banner">
      <img :src="goods.showLarge.img" alt="">
    </div>
    获取到的id {{this.$route.params.id}}
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['goods'])
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
