<template>
  <div>
      <el-card style="padding:20px"> 
        <bread-crumb slot="header">
            <template slot="title">内容列表</template>
        </bread-crumb>
        <el-row class="pic_box">
            <el-col :span="2" class="msg_box">
                <img src="../../assets/img/404.png" alt="">
                <el-button type="text" class="btn">更改头像</el-button>
            </el-col>
            <el-col :span="20" class="text">
                <span>{{msgList.name}}</span>
                <span class="small">{{msgList.intro}}</span>
            </el-col>
            <el-col :span="2">
                <el-button type="text" @click="uploadMsg">修改</el-button>
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
            }
        }
    },
    methods:{
        getUserMsg(){
            this.$axios({
                url:'/user/profile',
            }).then(res=>{
                this.msgList=res.data
            })
        },
        uploadMsg(){
            
        }
    },
    created(){
        this.getUserMsg()
    }

}
</script>

<style lang="less" scoped>
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