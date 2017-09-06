<template>
  <div>
    <!-- 用户信息 -->
    <div class="user">
      <div class="avatar">
        <img :src="user.avatar">
      </div>
      <div class="name">{{ user.name }}</div>
    </div>
    <!-- /用户信息 -->
    <ul v-for="subList in list">
      <li v-for="item in subList">
        <i class="icon"><img :src="item.iconSrc"></i>
        <div class="text">{{ item.text }}</div>
        <i class="arrowRight"></i>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {
          name: 'maxiangsai',
          avatar: ''
        },
        list: [
          [{
            iconSrc: '',
            text: '我的订单'
          },{
            iconSrc: '',
            text: '我的xxx'
          }],
          [{
            iconSrc: '',
            text: '客服帮助'
          }]
        ]
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
