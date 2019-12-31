<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <el-form style="margin-left:50px" label-width="100px" :model="formData" :rules="rules" ref="pubRules">
      <el-form-item label="标题" prop="title">
        <el-input style="width:60%" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" :rows="4" v-model="formData.content"></el-input>
      </el-form-item>
      <el-form-item label="封面" prop="type">
        <el-radio-group v-model="formData.cover.type" @change="changePic">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <cover-img :list="formData.cover.images" @getSonImg="getSonImg"></cover-img>
      <el-form-item label="频道" prop="channel_id">
            <el-select v-model="formData.channel_id">
                <el-option v-for="itm in typeList" :key="itm.id" :label="itm.name" :value="itm.id"></el-option>
            </el-select>
       </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="pubArticle(false)">发布</el-button>
        <el-button @click="pubArticle(true)">存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
    data(){
        return{
            index:1,
            typeList:[],
            formData:{
              title:'',
              content:'',
              cover:{
                type:-1,
                images:[],

              },
              channel_id:null
            },
            rules:{
              title:[{required:true,message:'标题不能为空'},{min:5,max:30,message:'长度在 5 到 30 个字符'}],
              content:[{required:true,message:'内容不能为空'}],
              channel_id:[{required:true,message:'频道不能为空'}]
            }
        }
    },
   
    methods:{
        changePic(){
          
              if(this.formData.cover.type===0||this.formData.cover.type===-1){
                this.formData.cover.images=[]
              }else if(this.formData.cover.type===1){
                this.formData.cover.images=['']

              }else if (this.formData.cover.type===3){
                this.formData.cover.images=['','','']
              }
        },
        async changeType(){
           let res= await this.$axios({
                url:'/channels',

            })
            this.typeList=res.data.channels
        },
        async pubArticle(draft){
          await this.$refs.pubRules.validate((isOk)=>{
            if(isOk){
              let {id}=this.$route.params
              //修改与发表合写
                this.$axios({
                  method:id?'put':'post',
                  url:id?`/articles/${id}`:'/articles',
                  params:{draft}, 
                   data:this.formData
                })     
                this.$router.push('/home/atricles')    
            }
          })

        },
        async getArticleByid(id){
          let res=await this.$axios({
            url:`/articles/${id}`,
            
          })
          this.formData=res.data
        },
        getSonImg(img,index){
          // alert('22222'+img)
          this.formData.cover.images=this.formData.cover.images.map(function(itm,i){
             if(i===index){
               return img
             }
             return itm
          })
          
        }
        
    },
    created(){
        this.changeType();
       let{id} = this.$route.params;
       window.console.log(id)
       if(id){
         this.getArticleByid(id);
       }
    },
    watch:{
      //监控$route为了解决两个路由使用同一个组件的问题
      $route:function(to){
        if(Object.keys(to.params).length){
          this.$getArticleByid(to.params.id)
        }else{
          this.formData={
              title:'',
              content:'',
              cover:{
                type:-1,
                images:[],

              },
              channel_id:null
            }
        }
      },
      //监控formData.cover.type为了
      // "formData.cover.type":function(){
      //   if(this.formData.cover.type===0||this.formData.cover.type===-1){
      //     this.formData.cover.images=[]
      //   }else if(this.formData.cover.type===1){
      //     this.formData.cover.images=['']

      //   }else if (this.formData.cover.type===3){
      //     this.formData.cover.images=['','','']
      //   }
      // }
    }
};
</script>

<style>
</style>