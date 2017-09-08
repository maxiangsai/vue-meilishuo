<template>
  <div>
    <search-bar></search-bar>
    <!-- swipe banner-->
    <div class="slider">
      <img :src="banner" alt="">
    </div>
    <!-- /swipe banner-->

    <slide-box :list="slideList"></slide-box>

    <!-- 超值拼团 -->
    <recommend :list="recommendList"></recommend>
    <!-- /超值拼团 -->
  </div>
</template>
<script type="text/ecmascript-6">
  import searchBar from 'components/searchBar'
  import slideBox from 'components/slideBox'
  import recommend from 'components/recommend'
  import { getSliderBanner, getSlideList, getRecommend } from 'api/slider'

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
      recommend
    },
    created () {
      this._getSliderBanner()
      this._getSlideBox()
      this._getRecommend()
    },
    methods: {
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
          console.log(this.recommendList)
        })
      }
    }
  }

</script>
<style scoped lang="scss" rel="stylesheet/scss">
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
