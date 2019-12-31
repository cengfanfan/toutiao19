<template>

      <el-row type="flex" justify="space-between" class="lay-hear" color="#2c3e50">
        <el-col :span="6" class="l_left">
          
                <i :class="{'el-icon-s-fold':collaspsed,'el-icon-s-unfold':!collaspsed}" style="margin-right:10px;font-size:24px" @click="collaspsedOrOpen"></i>
                <span>江苏传智播客教育科技股份有限公司</span>
            
        </el-col>
        <el-col :span="10">
            <div class="grid-content bg-purple-light">
                <el-row type="flex" justify="end" align="middle">
                    <!-- <input type="text" style="margin-right:15px;height:30px;width:200px"> -->
                    <el-col :span="10">
                        <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input2">
                        </el-input>
                    </el-col>
                    
                    <span  style="margin-right:5px;margin-left:15px">消息</span>
                    <a href="#"  style="margin-right:25px">
                        <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
                    </a>
                    <el-col :span="6">
                        <el-dropdown @command="logout">
                        <span class="el-dropdown-link">
                            {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="info">个人信息</el-dropdown-item>
                            <el-dropdown-item command="adr">git地址</el-dropdown-item>
                            <el-dropdown-item command="logout">退出</el-dropdown-item>
                            
                        </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
                
            </div>
        </el-col>
      </el-row>
      

</template>

<script>
import eventBus from "../utils/eventBus"
export default {
    data(){
        return{
            collaspsed:false,
             input2: '',
             userInfo:{},
             defaultImg:require("../assets/img/avatar.jpg")

        }
    },
    created(){
        // let token = window.localStorage.getItem('use-token')
        // window.console.log(token)
        this.updata();
        eventBus.$on('updataImg',()=>{
            this.updata();
        });
        
    },
    methods:{
        updata(){
            this.$axios({
            url:"/user/profile",
            method:"get",
            // headers:{
            //     Authorization:`Bearer ${token}`
            // }

        }).then((res)=>{
            this.userInfo=res.data
            // Window.console.log(res.data);
            
        })
        },
        logout(cmd){
            if(cmd==='logout'){
                window.localStorage.removeItem('use-token')
                this.$router.push('/login')
            }
        },
        collaspsedOrOpen(){
            this.collaspsed=!this.collaspsed;
            eventBus.$emit('collaspsed',this.collaspsed)
        }
    }

}
</script>

<style lang='less' scoped>
    .lay-hear{
        padding:10px 10px;
        box-sizing: border-box;
        font-size: 18px;
        width: 100%;
        height: 80px;
        // background-color: aqua;
        
        // background-color: #fff;
        
        .l_left{
            // background-color: #fff;
            width: 100%;
            line-height: 50px;
        }
        img{
            border-radius: 50%;
            width:35px;
            height: 35px;
        }
    }
</style>