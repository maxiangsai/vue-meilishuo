<template>
  <div class="box-wrap">
    <ul>
      <li v-for="item in list">
        <div class="imageBox">
          <img :src="item.image">
        </div>
        <p>{{ item.title }}</p>
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
      return {}
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .box-wrap {
    padding: 10px 5px;
    overflow-scrolling: touch;
    overflow: auto;
    > ul {
      overflow-y: hidden;
      overflow-x: scroll;
      overflow-scrolling: touch;
      white-space: nowrap;
      display: flex;
      li {
        flex: 1 0 25%;
        text-align: center;
        img {
          width: 90%;
        }
      }
    }
  }
</style>
