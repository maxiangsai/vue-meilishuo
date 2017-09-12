<template>
  <div class="wrap" v-show="isShow">
    <div class="dialog">
      <span class="close" @click="handleHide"></span>
      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="image-wrap">
          <img :src="goods.show.img">
        </div>
        <div class="goods-about">
          <p class="title">{{ goods.title }}</p>

          <div class="buy-num">
            <button type="button" @click="reduce">-</button>
            <span>{{ buy.cartNum }}</span>
            <button type="button" @click="add">+</button>
          </div>
          <div class="remaind">库存：{{ goods.itemType }}</div>
        </div>
      </div>
      <!-- /商品信息 -->
      <div class="btn-ok" @click="addToCart">确定</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  export default {
    props: {
      goods: Object,
      isShow: false
    },
    data () {
      return {
        buy: {
          cartNum: 1
        }
      }
    },
    methods: {
      ...mapMutations(['ADD_TO_CART']),
      handleHide () { // 关闭弹窗
        this.$emit('hide')
      },
      addToCart () {
        const goods_buy = Object.assign({}, this.goods, this.buy)
        this.ADD_TO_CART(goods_buy) // 加入购物车
        this.handleHide()
        this.$router.push({
          path: '/cart'
        })
      },
      reduce () {
        this.buy.cartNum <= 0 ? 1 : this.buy.cartNum--
      },
      add () {
        this.buy.cartNum >= this.goods.itemType ? this.goods.itemType : this.buy.cartNum++
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../common/scss/variable";

  .wrap {
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    background-color: rgba(#000, 0.8);
    @at-root {
      .dialog {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 55%;
        background-color: $color-white;
        padding: 20px 10px 0;

        .close {
          &:before, &:after {
            position: absolute;
            right: 5px;
            top: 12px;
            content: '';
            display: block;
            width: 18px;
            height: 1px;
            background: #000;
            transform: rotateZ(-45deg);
          }
          &:before {
            transform: rotateZ(45deg);
          }
        }

        .btn-ok {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          padding: 10px 0;

          text-align: center;
          background-color: $color-primary;
          color: $color-white;
          font-size: 16px;
        }
      }
    }
  }

  .goods-info {
    display: flex;
    flex-wrap: nowrap;
    .image-wrap {
      width: 120px;
      position: relative;
      overflow: hidden;
      height: 0;
      padding-bottom: 56.2%;
      margin-right: 10px;
    }
  }

  .goods-about {
    flex: 1;
    line-height: 1.1;
    font-size: 15px;

    .title {
      margin-bottom: 15px;
    }

  }

  .buy-num {
    button[type='button'] {
      border: 0;
      padding: 0 8px;
      color: $color-white;
      font-size: 18px;
      background-color: $color-btn-primary;
    }
    span {
      margin: 0 5px;
    }
  }

  .remaind {
    margin-top: 15px;
  }
</style>
