<template>
  <header id="header">
    <div class="navLeftBtn">
      <img :src="leftIcon" width="20">
    </div>
    <div class="nav-center">
      <h3 class="title">{{title}}</h3>
    </div>
    <div class="navRightBtn">
      <img :src="rightIcon">
    </div>
  </header>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: String,
      leftIcon: String,
      rightIcon: String
    },
    data () {
      return {}
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../common/scss/variable";
  #header {
    display: flex;
    height: 40px;
    padding: 0 15px;
    background-color: $color-primary;
  }
  .navLeftBtn {
    flex: 0.4;
    align-self: center;
    > p {
      margin-top: 3px;
    }
  }
  .nav-center {
    flex: 1;
    .title {
      text-align: center;
      line-height: 40px;
      font-size: 18px;
    }
  }
  .navRightBtn {
    flex: 0.4;
  }
</style>
