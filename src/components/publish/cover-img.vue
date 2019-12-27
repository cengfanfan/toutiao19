<template>
  <div class="box"> 
      <div class="one" v-for="(itm,idx) in list" :key="idx">
        <p>点击图标选择图片</p>
        <img src="../../assets/img/pic_bg.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
props:['list']
}
</script>

<style lang='less' scoped>
  .box{
    width: 100%;
    padding: 0px 100px;
    margin-bottom: 20px;
    .one{
        width: 300px;
        height: 300px;
        border: 1px solid #ccc;
        text-align: center;
        display: inline-block
      }
  }
    
</style>