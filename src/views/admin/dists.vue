<template>
  <div class="home">
    <div class="pagetitle">技师列表</div>
    <el-row class="choose">
      <el-button type="primary" @click="createstaff() " class="add">添加</el-button>
    </el-row>
    <el-table v-bind:data="tableData" border style="width: 100%">
      <el-table-column prop="user_name" label="用户名"></el-table-column>
      <el-table-column prop="user_tel" label="用户电话"></el-table-column>
      <el-table-column prop="uid" label="工作ID"></el-table-column>
      <el-table-column prop="worker_type" label="工作类型"></el-table-column>
      <el-table-column prop="reg_time" label="注册时间"></el-table-column>
      <!-- <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>-->
    </el-table>

    <!-- 创建活动 -->
    <!-- <el-dialog title="添加员工" :visible.sync="createactivityoperate">
      <el-form :model="creatactivitydata">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.name"></el-input>
        </el-form-item>

        <el-form-item label="活动介绍" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="creatactivitydata.description"
          ></el-input>
        </el-form-item>
        <el-form-item label="活动对象" :label-width="formLabelWidth">
          <el-select v-model="creatactivitydata.event_type" placeholder="请选择活动对象">
            <el-option label="用户" value="ME"></el-option>
            <el-option label="技师" value="MT"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动海报" :label-width="formLabelWidth">
          <div>
            <input type="file" @change="uploads">
            <p></p>
            <img :src="imgUrl">
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createactivityoperate = false">取 消</el-button>
        <el-button type="primary" @click="createactivities()">确 定</el-button>
      </div>
    </el-dialog>-->
  </div>
</template>

<script>
// const items = [
//   { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
//   { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
//   { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
//   { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
// ];
export default {
  data() {
    return {
      input: "",
      tableData: null
    };
  },
  mounted() {
    this.$axios
      .post("http://dev.upctech.com.cn/api/dis/getworklist", {
        city: "上海市"
      })
      .then(res => {
        if (res.data == "") {
          this.$message("请正确输入城市或该城市没有员工");
        } else {
          this._data.tableData = res.data;
        }
      });
  },
  methods: {
    createstaff: function() {}
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
</style>
