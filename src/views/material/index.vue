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

     <!-- <button style="float:right">1111</button> -->
     <el-upload :http-request="uplodePic"
    :show-file-list="false"
    >
         <el-button type="primary" class="uplode">上传图片</el-button>
     </el-upload>
    
  <el-tabs style="height: 200px;" @tab-click="changeTab" v-model="activeName">
      
    <el-tab-pane label="全部" name="all">
        <div style="display:flex;flex-wrap:wrap;justify-content:flex-star">
           
                <el-card v-for="itm in list" :key="itm.id" style="padding:0;width:150px;height:150px;margin:40px;position: relative">
                    <img :src="itm.url" alt="" style="width:100%;">
                    <div style="width:100%;position: absolute;bottom:0;left:0;padding:10px 30px;background-color:#eee">
                        
                        <i class="el-icon-star-off" style="float:left;"></i>
                        <i class="el-icon-delete" style="float:right"></i> 
                    </div>
                    
                </el-card>
           
        </div>
        <el-pagination
            background layout="prev, pager, next"
            :total="page.totalPic"
            style="margin:50px"
            :page-size="page.pageSize"
            :current-page="page.curPage"
            @current-change="changeCur">
        </el-pagination>
    </el-tab-pane>
    <el-tab-pane label="收藏" name="collect">
        <div style="display:flex;flex-wrap:wrap;justify-content:flex-star">
           
                <el-card v-for="itm in list" :key="itm.id" style="padding:0;width:150px;height:150px;margin:40px;position: relative">
                    <img :src="itm.url" alt="" style="width:100%;">
                </el-card>
           
        </div>
        <el-pagination
            background layout="prev, pager, next"
            :total="page.totalPic"
            style="margin:50px"
            :page-size="page.pageSize"
            :current-page="page.curPage"
            @current-change="changeCur">
        </el-pagination>
    </el-tab-pane>
    
    </el-tabs>
   
      
        
    

  </el-crad>
  
</template>

<script>
export default {
  data() {
    return {
        activeName:"all",
        list:[],
        page:{
          totalPic:0,
          curPage:1,
          pageSize:10
        }
    };
  },
  methods:{
      getPicture(){
          this.$axios({
              url:"/user/images",
              params: {
          
                page:this.page.curPage,
                per_page:this.page.pageSize,
                // collect:false
                collect:this.activeName ==='collect'
            }
          }).then(res=>{
              window.console.log(res);
              this.list=res.data.results;
            
            this.page.totalPic=res.data.total_count;
            this.page.curPage=res.data.page;
            this.page.pageSize=res.data.per_page;
          })
      },
      uplodePic(params){
            let form = new FormData()
            form.append('image', params.file)
            this.$axios({
                url:'/user/images',
                
                method:"post",
                data:form,
          }).then(()=>{
              this.getPicture()
          })
      },
      changeCur(newPage){
          this.page.curPage=newPage;
          this.getPicture()
      },
      changeTab(){
          this.page.curPage=1; 
          this.getPicture()
      }
  },
  created(){
      this.getPicture()
  }
};
</script>

<style>
    

    .uplode{
        position: absolute;
        top: 94px;
        right: 40px
    
    }
    .el-main{
        position: relative;
    }
    .el-divider--horizontal{
        margin: 10px 0 !important;
    }
    
</style>