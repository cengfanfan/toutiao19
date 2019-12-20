<template>
  <div id="back">
    <el-card class="box-card">
      <div class="img">
        <img src="../assets/img/logo_index.png" alt="">
      </div>
      
      <el-form :model="loginFormData" :rules="loginRules" ref="myForm">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入手机号" v-model="loginFormData.mobile"></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <el-input style="width:65%;float:left"  plain placeholder="验证码" v-model="loginFormData.code"></el-input>
          <el-button style="float:right" plain placeholder="验证码">发送验证码</el-button>
         
        </el-form-item>

        <el-form-item prop="agree"> 
          <el-checkbox v-model="loginFormData.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" style="width:100%" @click="login">
          登陆
          </el-button> -->
          <el-button :plain="true" type="primary" style="width:100%" @click="login">登陆</el-button>
        </el-form-item>
        
         
      </el-form>

    </el-card>
    
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      loginFormData:{
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意协议
      },
      loginRules:{
        mobile:[
          {required:true,message:"手机号不能为空哦"},{pattern:/^1[3456789]\d{9}$/, message: '请输入合法的手机号' }
        ],
        code:[
          {required:true,message:"验证码不能为空哦"},{pattern:/^\d{6}$/, message: '请输入合法的验证码' }
        ],
        agree:[{validator:function(rule,value,callback){
          if(value){
            callback()
          }else{
            callback(new Error('请勾选对勾'))
          }
        }}]

        
      }
    }
    
  },
  methods:{
    login () {
     
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
        // console.log ( '校验成功')
          this.$axios({
            url:'/authorizations',
            method:'post',
            data:this.loginFormData
          }).then((res)=>{
            window.localStorage.setItem('use-token',res.data.data.token)
            // Window.console.log(res);
            
            this.$router.push('/home')
          }).catch(()=>{
            this.$message({
              message: '手机号或验证码输入有误',
              type: 'warning'
            });

          })
        }
      })
    },
    
  }
}
</script>

<style lang="less" scoped>
  #back{
    background-image:url('../assets/img/login_bg.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .img{
      text-align: center;
      img{
        height: 45px;
      }
    }
    .box-card{
      // color: red;
      width: 480px;
      height: 350px;
      

      
    }
  }
</style>
