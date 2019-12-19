<template>
  <div>
    <el-container class="b_l_box">
      <el-aside class="left_box" style="width:230px">
       <!-- <el-col :span="12"> -->
         <div style="background:#2e2f32; padding:10px; text-align:center">
           <img src="../assets/img/logo_admin.png" alt="">
         </div>
        <el-menu
          style="width:231px;"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
           background-color="#353b4e"
           text-color="#adafb5"
           active-text-color="#ffd04b">
            <el-menu-item index="2">
              <span slot="title" style="color:#adafb5">首页</span>
            </el-menu-item>
             <el-submenu index="1">
        <template slot="title">
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
         <el-submenu index="1">
        <template slot="title">
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
              <span slot="title" style="color:#adafb5">首页</span>
            </el-menu-item>
          </el-menu>
        <!-- </el-col> -->
      </el-aside>
      <el-aside>
        <el-header>
          上
        </el-header>
        <el-footer>
          下
        </el-footer>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
      handleOpen(key, keyPath) {
        Window.console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        Window.console.log(key, keyPath);
      }
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