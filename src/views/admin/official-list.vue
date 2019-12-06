<template>
  <div class="home">
    <div class="pagetitle">公众号关注</div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="11">
        <div class="nametext">E帮洗车</div>
        <el-table :data="tableData" :border="true" style="width: 100%">
          <el-table-column prop="nickname" label="用户名" width="180"></el-table-column>
          <el-table-column prop="unionid" label="Unionid"></el-table-column>
          <el-table-column prop="openid" label="Openid"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="11">
        <div class="nametext">节油大师</div>
        <el-table :data="tableData2" :border="true" style="width: 100%">
          <el-table-column prop="nickname" label="用户名" width="180"></el-table-column>
          <el-table-column prop="unionid" label="Unionid"></el-table-column>
          <el-table-column prop="openid" label="Openid"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [],
      tableData2: []
    };
  },
  mounted() {
    var _that = this;
    _that._data.tableData = _that.getdata(
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
      var datas = [];
      var _that = this;
      _that.$axios.get(url1).then(res => {
        for (var items of res.data.data.openid) {
          _that.$axios.get(url2 + items).then(res => {
            datas.push(res.data);
          });
        }
      });
      return datas;
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
