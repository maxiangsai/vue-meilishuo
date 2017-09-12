<template>
  <div>
    <v-header :navLeft="navLeftIcon" :title="title" :navRight="navRightText"></v-header>
    <div class="content">
      <div class="none-info" v-if="!cartLen">
        <p>您的购物车还空着呢，</p>
        <p>美物这么多，快去看看吧～</p>
        <a href="/#/home" class="btn">去逛逛</a>
      </div>
      <!-- 购物车商品 -->
      <ul class="cart-list">
        <li v-for="item in cart_goods">
          <input type="checkbox" class="checkbox">
          <div class="image-wrap">
            <div class="image" :style="{backgroundImage: 'url('+item.show.img+')'}"></div>
          </div>
          <div class="desc">
            {{ item.title }}
            <p>数量：{{ item.cartNum }}</p>
          </div>

        </li>
      </ul>
      <!-- /购物车商品 -->

    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import vHeader from 'components/header'
  import vFooter from 'components/footer'

  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        navLeftIcon: '../../static/icon-left.png',
        title: '购物车',
        navRightText: '首页'
      }
    },
    components: {
      vHeader,
      vFooter
    },
    computed: {
      ...mapGetters(['cart_goods', 'cartLen'])
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../common/scss/variable';
  @import '../common/scss/mixins';

  .content {
    padding-top: 40px;

    @at-root {
      .none-info {
        padding-top: 10%;

        text-align: center;
        font-size: 16px;
        p {
          line-height: 1.5;

        }
        .btn {
          display: inline-block;
          padding: 10px 5%;
          margin-top: 20px;

          background-color: $color-btn-primary;
          color: $color-white;
        }
      }

      .cart-list {

        li {
          position: relative;
          display: flex;
          margin: 15px 0;
          padding: 10px;
          background-color: $color-white;
          @include hairline('bottom', $color-border-gray, 0);
        }

        @at-root {
          .checkbox {
            appearance: none;
            align-self: center;
            margin-right: 15px;

            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid $color-border-gray;
            background-color: #e3e3e3;
          }
          .image-wrap {
            width: 25%;
          }

          .image {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 140%;
            overflow: hidden;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }

          .desc {
            flex: 1;
            font-size: 15px;
            padding: 0px 15px;

            p {
              padding: 10px 0;
            }
          }
        }
      }
    }
  }
</style>
