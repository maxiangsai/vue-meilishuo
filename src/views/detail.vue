<template>
  <div>
    <div class="slide-banner">
      <img :src="goods.showLarge.img" width="90%">
    </div>
    <div class="title">{{ goods.title }}</div>

    <dialog-goods :goods="goods" :isShow="isShow" @hide="dialogHide"></dialog-goods>
    <footer-detail :goodsPrice="goods.price" @buyNow="dialogShow"></footer-detail>
  </div>
</template>
<script type="text/ecmascript-6">
  import footerDetail from 'components/footer-detail'
  import dialogGoods from 'components/dialog-goods'
  import {mapGetters} from 'vuex'
  export default {
    name: 'detail',
    data() {
      return {
        isShow: false
      }
    },
    components: {
      footerDetail,
      dialogGoods
    },
    computed: {
      ...mapGetters(['goods'])
    },
    methods: {
      dialogHide () {
        this.isShow = false
      },
      dialogShow () {
        this.isShow = true
      }
    },
    mounted () {
      console.log(this.goods)
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .slide-banner {
    text-align: center;

    @at-root {
      .title {
        padding: 10px 5%;
        font-size: 16px;
        line-height: 1.4;
      }
    }
  }
</style>
