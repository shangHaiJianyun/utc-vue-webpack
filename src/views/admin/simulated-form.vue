<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="nametext">模拟订单</div>
        <el-container>
          <el-row class="tabs">
            <el-col :span="24">
              <el-main>
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="工号">
                    <el-input v-model="form.n_order"></el-input>
                  </el-form-item>
                  <el-form-item label="工作项目">
                    <el-input v-model="form.n_address"></el-input>
                  </el-form-item>
                  <el-form-item label="工作区域">
                    <el-input v-model="form.regions"></el-input>
                  </el-form-item>
                  <el-form-item label="工作时间">
                    <div class="block">
                      <el-date-picker
                        v-model="form.workday"
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy-MM-dd"
                      >></el-date-picker>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                  </el-form-item>
                </el-form>
              </el-main>
            </el-col>
          </el-row>
        </el-container>
      </el-col>
      <el-col :span="12">
        <div class="nametext">模拟派单</div>
        <div class="grid-content bg-purple-light"></div>
        <div class="block">
          <el-date-picker
            v-model="sch_date"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <el-button type="warning" @click="distributeleaflets">派单</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="nametext">派单详情</div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="city" label="城市" width="180"></el-table-column>
        <el-table-column prop="created_on" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="region_id" label="地区系数"></el-table-column>
        <el-table-column prop="sch_task_id" label="sch_task_id"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowDists",
  data() {
    return {
      sch_date: "",
      startTime: "",
      endTime: "",
      form: {},
      tableData: []
    };
  },
  mounted() {
    var that = this;
    that.axios
      .get("http://dev.upctech.com.cn/api/sch/show_schedule_task", {
        city: "上海市"
      })
      .then(res => {
        var arr = [];
        res.data.forEach(function(item) {
          console.log(item.sub_task);
          if (item.sub_task != undefined) {
            for (var i = 0; i < item.sub_task.length; i++) {
              console.log(item.sub_task[i]);
              arr.push(item.sub_task[i]);
            }
          }
        });
        that._data.tableData = arr;
        console.log(arr);
      });
  },
  methods: {
    onSubmit() {
      var regions = this._data.form.regions.split(",");
      var n_order = parseInt(this._data.form.n_order);
      var n_address = parseInt(this._data.form.n_address);
      this.axios
        .post("http://dev.upctech.com.cn/api/sch/get_sim_data", {
          regions: regions,
          n_order: n_order,
          n_address: n_address,
          workday: this._data.form.workday
        })
        .then(res => {
          this.$message({
            showClose: true,
            message: "创建成功!"
          });
        });
    },
    distributeleaflets() {
      this.axios
        .post("http://dev.upctech.com.cn/api/sch/sch_simulate", {
          sch_date: this._data.sch_date
        })
        .then(res => {
          this.$message({
            showClose: true,
            message: "派单成功!"
          });
        });
    }
  }
};
</script>
<style>
.tabs {
  width: 100%;
}
.el-main {
  border: 1px solid #dee2e6;
}
.nametext {
  padding: 20px;
}
</style>
