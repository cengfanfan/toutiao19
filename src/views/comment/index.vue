<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>

    <el-table :data="list">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="comment_status" label="评论状态" :formatter="tansStatus"></el-table-column>
      <el-table-column prop="total_comment_count" label="评论总数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="obj">
          <!-- 这个obj是什么？？？？？ -->
          <el-button type="text">修改</el-button>
          <el-button
            type="text"
            @click="openOrclose(obj.row)"
          >{{obj.row.comment_status? '关闭评论' : '打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" style="height:100px" justify='center' align="middle">
        <el-pagination
         background layout="prev, pager, next"
          :total="page.totalArt"
           style="margin:50px"
           :page-size="page.pageSize"
           :current-page="page.curPage"
           @current-change="changeCur"
          >
          </el-pagination>

    </el-row>
  </el-card>
</template>

<script>
// import { async } from 'q';
// import {getComment} from '../../actions/api'
export default {
  data() {
    return {
      list: [],
        page:{
            totalArt:0,
            curPage:1,
            pageSize:10,
        }
    };
  },
  methods: {
      changeCur(newPage){
          this.page.curPage=newPage;
          this.getComment();
      },
    async getComment() {
     let res= await this.$axios({
        url: "/articles",
        params: {
          //    response_type=comment
          response_type: "comment",page:this.page.curPage,per_page:this.page.pageSize
        }
      })
      this.list = res.data.results;
        // window.console.log(res);
        
        this.page.totalArt=res.data.total_count;
        this.page.curPage=res.data.page;
        this.page.pageSize=res.data.per_page;
    },

    tansStatus(row, column, cellValue) {
      return cellValue ? "正常" : "关闭";
    },
   async openOrclose(row) {
      //    window.console.log(row)
      let mes = row.comment_status ? "关闭" : "打开";
      await this.$confirm(`您是否确定要${mes}评论吗`)
      await this.$axios({
          url: "/comments/status",
          method: "put",
          params: {
            article_id: row.id.toString()
          },
          data: {
            allow_comment: !row.comment_status
          }
        })
          this.$message({
            type: "success",
            message: "操作成功"
          });
          this.getComment();
      //    let re=confirm("确定要修改评论状态吗？")
      //     if(re){

      //     }
    }
  },
  created() {
    this.getComment();
  }
};
</script>

<style>


</style>