<template>
  <div id="header" class="wrap">
    <div class="nav-left"><img :src="navLeft" width="12"></div>
    <div class="nav-center">{{ title }}</div>
    <div class="nav-right">{{ navRight }}</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      navLeft: String,
      title: String,
      navRight: String
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  #header.wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #fff;
    font-size: 18px;
    .nav-left, .nav-right {
      flex: 0.3;
      text-align: center;
    }
    .nav-center {
      flex: 1;
      text-align: center;
    }
  }
</style>
