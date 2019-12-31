<template>
  <div>
    <el-card>
      <bread-crumb slot="header">
        <template slot="title">内容列表</template>
      </bread-crumb>

      <el-row>全部图文</el-row>
      <el-divider></el-divider>
      <el-row class="formList">
        <el-col :span="2">
          <span>文章状态</span>
        </el-col>
        <el-col :span="18">
          <!-- 文章状态，0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除，不传为全部 -->
          <el-radio-group v-model="atricles.status" @change="changeStatus">
            <el-radio :label="5">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="formList">
        <el-col :span="2">
          <span>频道列表</span>
        </el-col>
        <el-col :span="18">
          <el-select v-model="typeList.id" @change="changeStatus">
            <el-option v-for="itm in typeList" :key="itm.id" :label="itm.name" :value="itm.id"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="formList">
        <el-col :span="2">
          <span>选择时间</span>
        </el-col>
        <el-col :span="18">
          <div>
            <el-date-picker
            value-format="yyyy-MM-dd"
              @change="changeStatus"
              v-model="date"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
            {{date}}
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <p>共找到{{total}}条符合条件的内容</p>
      <el-divider></el-divider>
      <el-row v-for="(itm,index) in atricles" :key="index" class="main_body">
        <el-col class="user_img">
          <img :src="itm.cover.type? itm.cover.images[0] : img" alt />
        </el-col>
        <el-col class="user_cont">
          <span>{{itm.title}}</span>
          <el-tag style="width:60px">{{itm.status|transStatus}}</el-tag>
          <span>{{itm.pubdate}}</span>
        </el-col>
        <el-col class="button">
          <el-button type="text" @click="updata(itm.id)">
            <i class="el-icon-edit"></i>
            <span>修改</span>
          </el-button>
          <el-button type="text" @click="delArt(itm.id)">
            <i class="el-icon-delete"></i>
            <span>删除</span>
          </el-button>
        </el-col>
        <el-col></el-col>
      </el-row>

      <el-row type="flex" justify="center" style="margin-top:20px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="page.total"
          :current-page="page.curPage"
          :page-size="page.pageSize"
          @current-change="changeCur"
        ></el-pagination>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import {getatricles,getTypeList} from '../../actions/api'
export default {
  data() {
    return {
      radio: 5,
      typeList: [],
      atricles: {},
      date: [],
      img: require("../../assets/img/404.png"),
      total: 0,
      page: {
        total: 0,
        pageSize: 10,
        curPage: 1
      }
    };
  },
  methods: {
    changeCur(newPage) {
      
      let params = {
          //改变搜索条件时改变的参数
        status: this.atricles.status === 5 ? null : this.atricles.status,
        channel_id: this.typeList.id,
        begin_pubdate: this.date? this.date[0]:null,
        end_pubdate: this.date>1? this.date[1]:null,
        //改变分页信息时改变的参数
        page:newPage,
        per_page:this.page.pageSize
      };

      this.getatricles(params)
      
    },
    async getTypeList() {
      let res =await getTypeList();
      this.typeList = res.data.channels;
        //   this.typeList.name=res.channels.name
        window.console.log(res.data.channels);
        // window.console.log(this.typeList.id)
    },

    changeStatus() {
        this.page.curPage=1
      let params = {
          //改变搜索条件时改变的参数
        status: this.atricles.status === 5 ? null : this.atricles.status,
        channel_id: this.typeList.id,
        begin_pubdate: this.date? this.date[0]:null,
        end_pubdate: this.date.length>1? this.date[1]:null,
        //改变分页信息时改变的参数
        page:this.page.curPage,
        per_page:this.page.pageSize
    
      };
      window.console.log(this.date)

      this.getatricles(params); // 调用获取文章数据
    },
    async getatricles(params) {
     let res=await getatricles(params);
      window.console.log(res.data.results);
        this.atricles = res.data.results;
        this.total = res.data.total_count;
        this.page.total = res.data.total_count;
        this.page.pageSize = res.data.per_page;
        // this.page.curPage = res.data.page;
    },
    async delArt(id){
        
        await this.$confirm('您确定要删除吗？')
        let res= await this.$axios({
                url:`/articles/${id.toString()}`,
                method:'delete',

            })
            this.getatricles();
            this.$message(res.message)
    },
    updata(id){
      this.$router.push(`/home/pubAtricles/${id.toString()}`)

    }
  },
  filters: {
    transStatus(value) {
      switch (value) {
        case 0:
          return "草稿";
        case 1:
          return "待审核";
        case 2:
          return "已发表";
        case 3:
          return "审核失败";
        default:
          break;
      }
    }
  },
  created() {
    this.getTypeList();
    this.getatricles();
  }
};
</script>

<style lang="less" scoped>
.user_img {
  float: left;
  width: 180px;
  img {
    width: 170px;
    height: 100px;
  }
}
.user_cont {
  width: 70%;
  display: flex;
  flex-direction: column;
  float: left;
}
.button {
  width: 100px;
  float: right;
}
.main_body {
  margin-top: 10px;
  height: 120px;
  border-bottom: 1px solid #eaeef1;
}
.formList {
  margin: 20px 0;
}
</style>