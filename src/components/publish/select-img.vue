<template>
  <div>
      <el-tabs v-model="tapvalue">
          <el-tab-pane name="material" label="素材库">
              <div class="pic_box">
                  <el-card v-for="(itm,idx) in list" :key="idx" class="card">
                      <img :src="itm.url" alt="" @click="selectPic(itm.url)">
                </el-card>
                
                
              </div>
              <el-row type="flex" justify="center">
                    <el-pagination
                        background layout="prev, pager, next"
                        :total="page.totalPic"
                        style="margin:50px"
                        :page-size="page.pageSize"
                        :current-page="page.curPage"
                        @current-change="changeCur">
                    </el-pagination>
                </el-row>
          </el-tab-pane>
          <el-tab-pane name="upload" label="上传图片">
             <el-upload
                class="upload-demo"
                action
                :http-request="upload"
                :show-file-list="false" 
                >
                <el-button size="small" type="primary">点击上传</el-button>
               
            </el-upload>
          </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
    data(){
        return {
            tapvalue:"material",
            list:[],
            page:{
                totalPic:0,
                curPage:1,
                pageSize:10
            },
            imageUrl:"",
        }
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
            this.is_collected=res.data.results.is_collected
          })
      },
      changeCur(newPage){
          this.page.curPage=newPage;
          this.getPicture()
      },
      selectPic(url){
        //   alert(url)
        //   this.list.url=url;
          this.$emit("getImg",url)
      },
      upload(params){
            let form = new FormData()
            form.append('image', params.file)
            this.$axios({
                url:'/user/images',
                
                method:"post",
                data:form,
            }).then((res)=>{
                 this.$emit("getImg",res.data.url)
            })
      }
       
    },
    created(){
        this.getPicture();
    }

}
</script>

<style lang='less' scoped>
    .pic_box{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        .card{
            width:200px;
            height: 200px;
            margin-left: 10px;
            margin-top: 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
       
    }
    
</style>