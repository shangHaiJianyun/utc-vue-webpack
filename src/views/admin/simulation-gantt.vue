<template>
  <div>
    <el-row :gutter="20" class="inputbox">
      <el-col :span="4">
        <el-input placeholder="请输入地区系数" v-model="input" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
        <div class="block">
          <el-date-picker
            v-model="sch_date"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </div>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" class="add" @click="calculatePath()">查询</el-button>
      </el-col>
    </el-row>
    <div id="workerss"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowDists",
  data() {
    return {
      input: "",
      colors: [],
      sch_date: ""
    };
  },
  mounted() {},
  methods: {
    calculatePath() {
      var _that = this;
      var workers = [];
      var jobs = [];
      var obj = {};

      _that.$axios
        .post(_that.$api + "/api/sch/data_by_region_date", {
          workday: _that._data.sch_date,
          region_id: _that._data.input
        })
        .then(res => {
          if (res.data.job_list.length !== 0) {
            for (var i = 0; i < res.data.job_list.length; i++) {
              obj.startDate = new Date(res.data.job_list[i].start_time);
              obj.endDate = new Date(res.data.job_list[i].end_time);
              obj.taskName = res.data.job_list[i].worker_id;
              obj.status = _that._data.colors[obj.taskName];
              jobs.push(obj);
              obj = {};
            }
            for (var i = 0; i < res.data.worker_list.length; i++) {
              workers.push(res.data.worker_list[i].worker_id);
            }
            _that.playgantt(jobs, workers);
          } else {
            this.$message({
              showClose: true,
              message: "所选日期没有单!"
            });
          }
        });
    },
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    playgantt(jobs, workers) {
      var tasks = jobs;
      setTimeout(function() {
        var taskStatus = {
          color1: "color1",
          color2: "color2",
          color3: "color3",
          color4: "color4",
          color5: "color5",
          color6: "color6",
          color7: "color7",
          color8: "color8",
          color9: "color9",
          color10: "color10",
          color11: "color11",
          color12: "color12",
          color13: "color13",
          color14: "color14",
          color15: "color15",
          color16: "color16",
          color17: "color17"
        };
        var taskNames = workers;
        tasks.sort(function(a, b) {
          return a.endDate - b.endDate;
        });
        var maxDate = tasks[tasks.length - 1].endDate;
        tasks.sort(function(a, b) {
          return a.startDate - b.startDate;
        });
        var minDate = tasks[0].startDate;

        var format = "%H:%M";

        var gantt = d3
          .gantt()
          .taskTypes(taskNames)
          .taskStatus(taskStatus)
          .tickFormat(format);
        gantt(tasks);
      }, 2000);
    }
  }
};
</script>
<style>
.inputbox {
  margin-top: 50px;
}
#workerss {
  width: 50%;
}
</style>
