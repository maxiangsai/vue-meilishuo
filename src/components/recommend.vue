<template>
  <div class="recommend">
    <h2><span class="title">推荐精选</span></h2>
    <ul>
      <li v-for="item in list">
        <router-link :to="{ name: 'Detail', params: { id: item.shopId } }">
          <div class="image-wrap">
            <div class="leftBottom_tagImg">
              <img :src="item.leftbottom_taglist" width="36">
            </div>
            <img :src="item.show.img">
          </div>
        </router-link>
        <p class="title">{{ item.title }}</p>
        <div class="goods_info">
          <span class="price">{{ item.price }}</span>
          <div class="star">{{ item.cfav }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      list: Array
    },
    data () {
      return {

      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../common/scss/variable";
  .recommend {
    padding:0 0 15px;
    overflow: hidden;

    @at-root {
      .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 10px 0;
        font-size: 0.8em;
      }
      .image-wrap {
        position: relative;
        padding-bottom: 130%;
        height: 0;
        overflow: hidden;
        img {
          animation: fadeIn .4s ease both 0s;
        }
        .leftBottom_tagImg {
          position: absolute;
          left: 5px;
          bottom: 0;
          > img {
            display: block;
          }
        }
      }
      .goods_info {
        display: flex;
        .price {
          color: $color-primary;
          margin-right: 15px;
        }
        .star {
          padding-left: 18px;
          background: url("../common/image/icon-star.png") no-repeat;
          background-size: contain;
        }
      }
    }

    h2 {
      padding: 0 2% 10px;
      font-size: 16px;
    }
    ul {
      li {
        float: left;
        width: 46%;
        margin: 0 2% 20px;
      }
    }
  }
</style>
