<template>
  <footer class="tabBar">
    <router-link to="/home" class="home">首页</router-link>
    <router-link to="/category" class="category">分类</router-link>
    <router-link to="/cart" class="cart">购物车</router-link>
    <router-link to="/my" class="my">我的</router-link>
  </footer>
</template>
<script>

</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../common/scss/variable";
  @import "../common/scss/mixins";
  .tabBar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateZ(0);
    display: flex;
    padding: 5px 0;
    background-color: $color-white;
    @include hairline('top', $color-border-gray, 0);
    > a {
      flex: 1;
      padding-top: 24px;
      text-align: center;
      color: $color-font-black;
      font-size: 12px;

      &.home {
        background: url("../common/image/icon-home.png") no-repeat center top/19px auto;
      }
      &.home.active {
        background: url("../common/image/icon-home-active.png") no-repeat center top/19px auto;
      }

      &.category {
        background: url("../common/image/icon-category.png") no-repeat center top/19px auto;
      }
      &.category.active {
        background: url("../common/image/icon-category-active.png") no-repeat center top/19px auto;
      }

      &.cart {
        background: url("../common/image/icon-cart.png") no-repeat center top/19px auto;
      }
      &.cart.active {
        background: url("../common/image/icon-cart-active.png") no-repeat center top/19px auto;
      }

      &.my {
        background: url("../common/image/icon-my.png") no-repeat center top/19px auto;
      }
      &.my.active {
        background: url("../common/image/icon-my-active.png") no-repeat center top/19px auto;
      }

      &.active {
        color: $color-primary;
      }

    }
  }

</style>
