<template>
  <div class="search-bar-wrap">
    <div class="im-chat"></div>
    <div class="search-bar">
      <input type="text" placeholder="宽松显瘦套头卫衣" class="search">
    </div>
    <div class="cart-btn"></div>
  </div>
</template>
<script>

</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .search-bar-wrap {
    display: flex;
    padding: 6px 10px;
    .im-chat {
      flex: 0.2;
      background: url("/static/images/im-chat.png") no-repeat center center/22px auto;
    }
    .search-bar {
      flex: 1;

      .search {
        width: 100%;
        height: 30px;
        padding-left: 30px;
        border-radius: 2px;
        background:#eee url("/static/images/icon-search.png") no-repeat 5px center/16px auto;
        box-sizing: border-box;
      }
    }
    .cart-btn {
      flex: 0.2;
      background: url("/static/images/hd-cart.png") no-repeat center center/22px auto;
    }
  }
</style>
