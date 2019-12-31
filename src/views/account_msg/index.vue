<template>
  <div>
      <el-card style="padding:20px"> 
        <bread-crumb slot="header">
            <template slot="title">内容列表</template>
        </bread-crumb>
        <el-dialog title="上传头像" :visible="dialog" @close="closeChange" width="40%">
            <el-upload action class="dialog" :http-request="uploadPhoto" :show-file-list="false">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus btnIcon"></i>
            </el-upload>
            <el-button>取消</el-button>
            <el-button @click="changeSuccess">确定</el-button>
        </el-dialog>
        <el-row class="pic_box">
            <el-col :span="2" class="msg_box">
                <img :src="msgList.photo" alt="">
                <el-button type="text" class="btn" @click="changePhoto" >更改头像</el-button>
            </el-col>
            <el-col :span="20" class="text">
               
                    <span>{{msgList.name}}</span>
                    <span class="small">{{msgList.intro}}</span>
               
            </el-col>
            <el-col :span="2">
                <el-button type="text">修改</el-button>
            </el-col>
            
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="2">
                <span>账户信息</span>
            </el-col>
            <el-col :span="20">
                <span style="display:inline-block;width:120px">头条号类型</span>
                <span>个人</span>
                <el-divider></el-divider>

                <span style="display:inline-block;width:120px">头条号ID</span>
                <span>{{msgList.id}}</span>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="2">
                <span>登录方式</span>
            </el-col>
            
            <el-col :span="20">
                <span style="display:inline-block;width:120px">绑定手机</span>
                <span>{{msgList.mobile}}</span>
            </el-col>
        </el-row>  
        <el-divider></el-divider>
        <el-row>
            <el-col :span="2">
                <span>邮箱</span>
            </el-col>
            
            <el-col :span="20">
                <span style="display:inline-block;width:120px">{{msgList.email}}</span>
            </el-col>
            <el-button type="text">修改邮箱</el-button>
        </el-row>        
      </el-card>
       
  </div>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
    data(){
        return{
            msgList:{
                id:'',
                name:'',
                intro:'',
                photo:'',
                email:'',
                mobile:''
            },
            dialog:false,
            imageUrl:'',
            
        }
    },
    methods:{
        getUserMsg(){
            this.$axios({
                url:'/user/profile',
            }).then(res=>{
                this.msgList=res.data
                window.console.log(res.data)
            })
        },
        uploadPhoto(params){
            let data = new FormData();
            data.append('photo',params.file)
            this.$axios({
                url:'/user/photo',
                method:'patch',
                data
            }).then((res)=>{
                this.imageUrl=res.data.photo
            })
        },
        changePhoto(){
           this.dialog=true
        },
        closeChange(){
            this.dialog=false
        },
        changeSuccess(){
            this.msgList.photo=this.imageUrl;
            this.closeChange();
            eventBus.$emit('updataImg')
        },
        
        
    },
    created(){
        this.getUserMsg()
    }

}
</script>

<style lang="less" scoped>

    .btnIcon {
        font-size: 28px;
        color: #8c939d;
        width: 178px !important;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .dialog {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        width: 178px;
        overflow: hidden;
        margin: 0 auto;
    }
    .avatar{
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        width: 178px;
        overflow: hidden;
        margin: 0 auto;
    }


    .pic_box{
        .msg_box{
            display: flex;
            flex-direction: column;
            img{
                width: 80px;
                height: 80px;
                border-radius: 50%
            }
            .btn{
                display: inline-block;
                width: 80px;
                text-align: center
            }
        }
        .text{
            display: flex;
            flex-direction: column;
            .small{
                font-size: 12px;
                color: #bbb
            }
        }
        
    }
</style>