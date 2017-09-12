<template>
  <div id="detailFooter" class="footerBar">
    <div class="price">{{ goodsPrice }}元</div>

    <div class="addToCart">加入购物车</div>
    <div class="buy-now" @click="buyNow">购买</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      goodsPrice: String
    },
    methods: {
      buyNow () {
        this.$emit('buyNow')
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../common/scss/variable";

  .footerBar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 45px;
    line-height: 45px;
    @at-root {
      .price, .addToCart, .buy-now {
        font-size: 18px;
        text-align: center;
      }

      .price {
        flex: 1;
      }

      .addToCart {
        flex: 0.8;

        color: $color-font-black;
        background-color: $color-yellow;
      }

      .buy-now {
        flex: 0.5;
        color: $color-white;
        background-color: $color-primary;
      }
    }
  }
</style>
