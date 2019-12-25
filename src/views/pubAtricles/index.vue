<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <el-form style="margin-left:50px" label-width="100px">
      <el-form-item label="标题">
        <el-input style="width:60%"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :rows="4"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group v-model="index">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道">
            <el-select v-model="typeList.id">
                <el-option v-for="itm in typeList" :key="itm.id" :label="itm.name" :value="itm.id"></el-option>
            </el-select>
       </el-form-item>
      <el-form-item>
        <el-button type="primary">发布</el-button>
        <el-button>存入草稿</el-button>
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
        }
    },
    methods:{
        changeType(){
            this.$axios({
                url:'/channels',

            }).then((res)=>{
                this.typeList=res.data.channels
            })
        }
    },
    created(){
        this.changeType()
    }
};
</script>

<style>
</style>