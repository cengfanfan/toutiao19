<template>
  <div class="box"> 
      <div class="one" v-for="(itm,idx) in list" :key="idx" @click="opendialog(idx)">
        <p>点击图标选择图片</p>
        <img :src="itm? itm: defaultImg" alt="">
      </div>
      <el-dialog :visible="control" @close="closedialog">
        <select-img @getImg="getImg"></select-img>
      </el-dialog>
  </div>
</template>

<script>
export default {
props:['list'],
data(){
  return{
    defaultImg:require('../../assets/img/pic_bg.png'),
    control:false,
    selectImg:-1
  }
  
},
methods:{
  opendialog(idx){
   this.control=true;
   this.selectImg=idx;
  },
  closedialog(){
   this.control=false

  },
  getImg(img){
    // alert('hhh'+img)
    this.$emit("getSonImg",img,this.selectImg)
    this.closedialog()
  }
}
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
        display: inline-block;
        img{
          width: 230px;
          height: 230px;
        }
      }
  }
    
</style>