<template>
  <div>
  
      <el-table :data="list">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="comment_status" label="评论状态" :formatter="tansStatus"></el-table-column>
          <el-table-column prop="total_comment_count" label="评论总数"></el-table-column>
          <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
          <el-table-column label="操作">
              <template slot-scope="obj">
                    <el-button type="text">修改</el-button>
                    <el-button type="text">{{obj.row.comment_status? '关闭评论' : '打开评论'}}</el-button>
              </template>
              
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
   
        data(){
            return {
                list:[],
                

            }
        },
        methods:{
           getComment(){
               this.$axios({
                   url:'/articles',
                   params:{
                    //    response_type=comment
                       response_type:'comment'
                   }
               }).then(res=>{
                   this.list=res.data.results
               })
           },

           tansStatus(row, column, cellValue){
               return cellValue ? '正常' : '关闭'
           }
        },created(){
            this.getComment()
        }
}

</script>

<style>

</style>