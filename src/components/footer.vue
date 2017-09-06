<template>
  <footer class="tabBar">
    <router-link to="/home" class="home">首页</router-link>
    <router-link to="/notice" class="classify">分类</router-link>
    <router-link to="/download" class="cart">购物车</router-link>
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
        background: url("/static/images/icon-home.png") no-repeat center top/22px auto;
      }
      &.home.active {
        background: url("/static/images/icon-home-active.png") no-repeat center top/22px auto;
      }

      &.classify {
        background: url("/static/images/icon-classify.png") no-repeat center top/22px auto;
      }
      &.classify.active {
        background: url("/static/images/icon-classify-active.png") no-repeat center top/22px auto;
      }

      &.cart {
        background: url("/static/images/icon-cart.png") no-repeat center top/22px auto;
      }

      &.my {
        background: url("/static/images/icon-my.png") no-repeat center top/22px auto;
      }
      &.my.active {
        background: url("/static/images/icon-my-active.png") no-repeat center top/22px auto;
      }

      &.active {
        color: $color-primary;
      }

    }
  }

</style>
