<template>
  <div>
         <div style="background:#2e2f32; padding:10px; text-align:center">
           <img src="../assets/img/logo_admin.png" alt="">
         </div>
        <el-menu
          router
          style="width:231px;"
          default-active="2"
          class="el-menu-vertical-demo"
       
           background-color="#353b4e"
           text-color="#adafb5"
           active-text-color="#ffd04b">
            <el-menu-item index="/home/main">
              <span slot="title" style="color:#adafb5">首页</span>
            </el-menu-item>
             <el-submenu index="1">
        <template slot="title">
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/pubAtricles">发表文章</el-menu-item>
          <el-menu-item index="/home/atricles">内容列表</el-menu-item>
          <el-menu-item index="/home/comment">评论列表</el-menu-item>
          <el-menu-item index="/home/material">素材管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
         <el-submenu index="2">
        <template slot="title">
          <span>粉丝管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="home/picture">图文数据</el-menu-item>
          <el-menu-item index="/home/fans">粉丝概况</el-menu-item>
          <el-menu-item index="/home/photo">粉丝画像</el-menu-item>
          <el-menu-item index="/home/list">粉丝列表</el-menu-item>
          <el-menu-item index="/home/message">账户信息</el-menu-item>
         
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
              <span slot="title" style="color:#adafb5">账户信息</span>
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