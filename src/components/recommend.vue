<template>
  <div class="recommend">
    <h2><span class="title">推荐精选</span></h2>
    <ul>
      <li v-for="item in list">
        <div class="image-wrap">
          <div class="leftBottom_tagImg">
            <img :src="item.leftbottom_taglist" width="36">
          </div>
          <img :src="item.show.img">
        </div>
        <p class="title">{{ item.title }}</p>
        <div class="goods_info">

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
  .recommend {
    padding: 15px 0;
    h2 {
      padding: 10px 2%;
      font-size: 16px;
    }
    ul {
      li {
        float: left;
        width: 46%;
        margin: 0 2% 20px;
      }
    }
    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 10px 0;
    }
    .image-wrap {
      position: relative;
      padding-bottom: 130%;
      height: 0;
      overflow: hidden;

      .leftBottom_tagImg {
        position: absolute;
        left: 5px;
        bottom: 0;
        > img {
          display: block;
        }
      }
    }
  }
</style>
