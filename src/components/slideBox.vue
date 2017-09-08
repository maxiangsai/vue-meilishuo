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
    padding: 15px 5px;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    > ul {
      overflow-y: hidden;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
      display: flex;
      li {
        flex: 1 0 25%;
        text-align: center;
      }
    }

    @at-root {
      .imageBox {
        margin-bottom: 5px;
        img {
          width: 88%;
        }
      }
    }
  }
</style>
