<template>
  <el-container class="b_l_box">
      <el-aside class="left_box" style="width:230px">
          <layout-left>
            左
          </layout-left>
      </el-aside>
      <el-container class="right_box">
          <el-header>
             <layout-header></layout-header> 
          </el-header>
          <el-footer>
              右下
          </el-footer>
      </el-container>
  </el-container>
</template>

<script>
import layoutLeft from "../../components/layout-left"
import layoutHeader from "../../components/layout-header"
export default {
  components:{
    'layout-left':layoutLeft,
    'layout-header':layoutHeader
  }
}
</script>

<style lang="less">
.b_l_box{
  // text-align: center;
  // width: 230px;

  height: 100vh;
  .left_box{
    background-color: #323745;
    height: 100vh;
    overflow: hidden;
    img{
       height:35px;
    }
    .right_box{
      
    }
   
  }
}
</style>