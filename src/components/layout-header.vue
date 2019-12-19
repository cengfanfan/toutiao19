<template>
  
      <el-row type="flex" justify="space-between" class="lay-hear">
        <el-col :span="6" class="l_left">
          
                <i class="el-icon-s-fold" style="margin-right:10px"></i>
                <span>江苏传智播客教育科技股份有限公司</span>
            
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-light">
                <el-row type="flex" justify="end" align="middle">
                    <input type="text">
                    <span>消息</span>
                    <a href="#">
                        <img src="../assets/img/avatar.jpg" alt="">
                    </a>
                    <el-col :span="12">
                        <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
                
            </div>
        </el-col>
      </el-row>
      

</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .lay-hear{
        padding:10px 0;
        box-sizing: border-box;
        font-size: 20px;
        width: 100%;
        // background-color: #fff;
        
        .l_left{
            // background-color: #fff;
            width: 100%;
        }
    }
</style>