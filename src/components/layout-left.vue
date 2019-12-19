<template>
  <div>
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>