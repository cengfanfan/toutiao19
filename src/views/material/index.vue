<template>
  <el-crad>
    <bread-crumb slot="header">
      <tempelate slot="title">素材管理</tempelate>
    </bread-crumb>
    <el-divider></el-divider>
    <el-row>图片管理</el-row>
    <el-divider></el-divider>

    <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
    </el-radio-group> -->

     <button style="float:right">1111</button>
  <el-tabs style="height: 200px;float:left">
     
    <el-tab-pane label="全部">
        <div style="display:flex;flex-wrap:wrap;justify-content:flex-star">
           
                <el-card v-for="itm in list" :key="itm.id" style="padding:0;width:150px;height:150px;margin:40px;position: relative">
                    <img :src="itm.url" alt="" style="width:100%;">
                    <div style="width:100%;position: absolute;bottom:0;left:0;padding:10px 30px;background-color:#eee">
                        
                        <i class="el-icon-star-off" style="float:left;"></i>
                        <i class="el-icon-delete" style="float:right"></i> 
                    </div>
                    
                </el-card>
           
        </div>
    </el-tab-pane>
    <el-tab-pane label="收藏">配置管理</el-tab-pane>
    
    </el-tabs>
  </el-crad>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "top",
      list:[]
    };
  },
  methods:{
      getPicture(){
          this.$axios({
              url:"/user/images",
              
          }).then(res=>{
              window.console.log(res);
              this.list=res.data.results;
              
          })
      }
  },
  created(){
      this.getPicture()
  }
};
</script>

<style>
    
</style>