<template>
  <el-container class="b_l_box">
      <el-aside class="left_box" style="width:230px">
          <layout-left>
            左
          </layout-left>
      </el-aside>
      <el-container class="right_box">
          <el-header style="padding:0">
             <layout-header></layout-header> 
          </el-header>
          <el-main>
            <bread-crumb></bread-crumb>
            <!-- <layout-main>

            </layout-main>
            <comment-list>

            </comment-list> -->
            <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>


export default {
 
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
    
   
  }
}
</style>