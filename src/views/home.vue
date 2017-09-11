<template>
  <div class="wrap-hasFooter">
    <search-bar></search-bar>
    <!-- swipe banner-->
    <div class="slider">
      <img :src="banner" alt="">
    </div>
    <!-- /swipe banner-->

    <slide-box :list="slideList"></slide-box>

    <!-- 精选推荐 -->
    <recommend :list="recommendList" @select="selectItem"></recommend>
    <!-- /精选推荐 -->

    <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import searchBar from 'components/searchBar'
  import slideBox from 'components/slideBox'
  import recommend from 'components/recommend'
  import vFooter from 'components/footer'
  import { getSliderBanner, getSlideList } from 'api/slider'
  import getRecommend from 'api/recommend'

  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        banner: '',
        slideList: [],
        wholesaleList: [],
        recommendList: []
      }
    },
    components: {
      searchBar,
      slideBox,
      recommend,
      vFooter
    },
    created () {
      this._getSliderBanner()
      this._getSlideBox()
      this._getRecommend()
    },
    methods: {
      ...mapMutations(['SET_GOODS']),
      _getSliderBanner() {
        getSliderBanner().then((res) => {
          let list = res.data['43542'].list
          this.banner = list[2].image
        })
      },
      _getSlideBox () {
        getSlideList().then((res) => {
          this.slideList = res.data['13730'].list
        })
      },
      _getRecommend () {
        getRecommend().then((res) => {
          this.recommendList = res.data.list
        })
      },
      selectItem (goods) {
        this.$router.push({
          path: `/detail/${ goods.shopId }`
        })
        this.SET_GOODS(goods)
      }
    }
  }

</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .wrap-hasFooter {
    padding-bottom: 46px;
  }
  .slider {
    position: relative;
    max-width: 750px;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 50.6%;
    height: 0;
    .mint-swipe {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      max-height: 380px;
    }
  }
</style>
