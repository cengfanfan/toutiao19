<template>
  <el-container class="b_l_box">
      <el-aside class="left_box" :style="{'width':collaspsed?'60px':'230px'}">
          <layout-left>
    
          </layout-left>
      </el-aside>
      <el-container class="right_box">
          <el-header style="padding:0">
             <layout-header></layout-header> 
          </el-header>
          <el-main>
           
           
            <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import eventBus from "../../utils/eventBus"
export default {
  data(){
    return{
      collaspsed:false,
    }
  },
  methods:{
   
  },
  created(){
    eventBus.$on('collaspsed',()=>{
      this.collaspsed=!this.collaspsed


    })
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
    
   
  }
}
</style>