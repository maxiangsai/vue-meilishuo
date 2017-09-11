<template>
  <div>
    <v-header :navLeft="navLeftIcon" :title="title" :navRight="navRightText"></v-header>
    <div class="content">
      <div class="none-info">
        <p>您的购物车还空着呢，</p>
        <p>美物这么多，快去看看吧～</p>
        <a href="/#/home" class="btn">去逛逛</a>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import vHeader from 'components/header'
  import vFooter from 'components/footer'
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
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../common/scss/variable';
  .content {
    padding-top: 40px;

    @at-root {
      .none-info {
        padding-top: 10%;

        text-align: center;
        font-size: 16px;
        p{
          line-height:1.5;

        }
        .btn{
          display: inline-block;
          padding: 10px 5%;
          margin-top: 20px;

          background-color: $color-btn-primary;
          color: $color-white;
        }
      }
    }
  }
</style>
