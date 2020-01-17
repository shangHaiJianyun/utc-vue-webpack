<template>
  <div class="home">
    <div class="pagetitle">来源记录</div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="11">
        <div class="nametext">市场活动</div>
        <el-table :data="tableData" :border="true" style="width: 100%">
          <el-table-column prop="market_event_id" label="市场活动id" width="180"></el-table-column>
          <el-table-column prop="event_name" label="活动名称"></el-table-column>
          <el-table-column prop="user_openid" label="用户openid"></el-table-column>
        </el-table>
        <div class="nametext">E帮洗车</div>
        <el-table :data="tableData1" :border="true" style="width: 100%">
          <el-table-column prop="nickname" label="用户名" width="180"></el-table-column>
          <el-table-column prop="openid" label="Openid"></el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button @click="detailsdata(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="11">
        <div class="nametext">节油大师</div>
        <el-table :data="tableData2" :border="true" style="width: 100%">
          <el-table-column prop="nickname" label="用户名" width="180"></el-table-column>
          <el-table-column prop="openid" label="Openid"></el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button @click="detailsdata(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 详情 -->
    <el-dialog title="用户详情" :visible.sync="createactivityoperate">
      <el-table :data="detailsdatas" height="250" border style="width: 100%">
        <el-table-column prop="points" label="获取积分" width="180"></el-table-column>
        <el-table-column prop="user_event_id" label="活动ID" width="180"></el-table-column>
        <el-table-column prop="username" label="被分享人用户名"></el-table-column>
        <el-table-column prop="viewer_openid" label="被分享人ID"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      createactivityoperate: false,
      tableData: [],
      tableData1: [],
      tableData2: [],
      detailsdatas: [],
      userdata: []
    };
  },
  mounted() {
    var _that = this;
    _that.$axios
      .get("https://wx.upctech.com.cn/wx/event/market_event/result_list")
      .then(res => {
        _that._data.tableData = res.data.mkt_result;
      });
    _that._data.tableData1 = _that.getdata(
      "https://wx.upctech.com.cn/wx/followers/",
      "https://wx.upctech.com.cn/wx/user_info?uid="
    );
    _that._data.tableData2 = _that.getdata(
      "https://wx.upctech.com.cn/wx/worker/followers/",
      "https://wx.upctech.com.cn/wx/worker/user_info?uid="
    );
  },
  methods: {
    getdata: function(url1, url2) {
      var _that = this;
      var datas = [];
      _that.$axios.get(url1).then(res => {
        for (var items of res.data) {
          _that.$axios.get(url2 + items.openid).then(res => {
            datas.push(res.data);
            _that._data.userdata.push(res.data);
          });
        }
      });
      return datas;
    },
    detailsdata: function(e) {
      var datas = [];
      var user = {};
      var _that = this;
      _that.$axios
        .get(
          "https://wx.upctech.com.cn/wx/event/user_event/result_by_openid/?openid=" +
            e.openid
        )
        .then(res => {
          if (res.data.user_event_result == null) {
            _that.$message.error("抱歉，当前查询用户未记录");
          } else {
            _that._data.createactivityoperate = true;
            for (var items of res.data.user_event_result) {
              user.points = items.points;
              user.user_event_id = items.user_event_id;
              user.viewer_openid = items.viewer_openid;
              user.username = _that.getusername(items.viewer_openid);
              datas.push(user);
              user = {};
            }
            _that._data.detailsdatas = datas;
          }
        });
    },
    getusername: function(user) {
      var _that = this;
      for (var items of _that._data.userdata) {
        if (items.openid == user) {
          return items.nickname;
          break;
        }
      }
    }
  }
};
</script>
<style>
.choose {
  margin: 10px 0;
}
.choosetitle {
  width: 20%;
  display: inline-block;
}
.chooseinp {
  width: 60%;
  display: inline-block;
}
.add {
  float: right;
  margin: 5px 47px 15px 0;
}
.nametext {
  padding: 20px;
}
</style>
