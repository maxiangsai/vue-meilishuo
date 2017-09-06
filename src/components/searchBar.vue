<template>
  <div class="search-bar-wrap">
    <div class="logo"></div>
    <div class="search-bar">
      <input type="text" placeholder="宽松显瘦套头卫衣" class="search">
    </div>
    <div class="cart-btn"></div>
  </div>
</template>
<script>

</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../common/scss/variable";
  .search-bar-wrap {
    display: flex;
    padding: 8px 10px;
    .logo {
      flex: 0.2;
      background: url("../common/image/logo.png") no-repeat center center/24px auto;
    }
    .search-bar {
      flex: 1;

      .search {
        width: 100%;
        height: 28px;
        padding-left: 30px;
        border-radius: 2px;
        background:$color-gray-light url("../common/image/icon-search.png") no-repeat 8px center/14px auto;
        box-sizing: border-box;
      }
    }
    .cart-btn {
      flex: 0.2;
      background: url("../common/image/im-chat.png") no-repeat center center/20px auto;
    }
  }
</style>
