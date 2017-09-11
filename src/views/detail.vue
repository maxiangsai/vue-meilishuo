<template>
  <div>
    <div class="slide-banner">
      <img :src="goods.showLarge.img" alt="">
    </div>
    获取到的id {{this.$route.params.id}}

    <footer-detail :goodsPrice="goods.price"></footer-detail>
  </div>
</template>
<script type="text/ecmascript-6">
  import footerDetail from 'components/footer-detail'

  import { mapGetters } from 'vuex'
  export default {
    name: 'detail',
    computed: {
      ...mapGetters(['goods'])
    },
    components: {
      footerDetail
    },
    mounted () {
      console.log(this.goods)
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
