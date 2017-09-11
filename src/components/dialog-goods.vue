<template>
  <div class="wrap" v-show="isShow">
    <div class="dialog">
      <div class="goods-info">
        <div class="image-wrap">
          <img :src="goods.show.img">
        </div>
        <p>{{ goods.title }}</p>
      </div>
      <div class="btn-ok" @click="handleHide">确定</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      goods: Object,
      isShow: false
    },
    methods: {
      handleHide () {
        this.$emit('hide')
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
        padding: 15px 10px 0;

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
          p {
            flex: 1;
            line-height: 1.1;
            font-size: 15px;
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
</style>
