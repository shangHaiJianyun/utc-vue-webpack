

<template>
  <div class="home">
    <h2>Welcome</h2>
    <div class="todayclub">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="5" class="block1">
          <h5 class="h5">总订单数</h5>
          <div class="ordernumber">{{general_order}}</div>
          <p class="remarks">GENERAL ORDER</p>
        </el-col>
        <el-col :span="5" class="block2">
          <h5 class="h5">已派单数</h5>
          <div class="ordernumber">{{sent_list}}</div>
          <p class="remarks">SENT LIST</p>
        </el-col>
        <el-col :span="5" class="block3">
          <h5 class="h5">待派单数</h5>
          <div class="ordernumber">{{pending_number}}</div>
          <p class="remarks">PENDING NUMBER</p>
        </el-col>
      </el-row>
    </div>
    <div class="echats">
      <div id="myChart" :style="{width: '50%', height: '600px'}"></div>
      <div id="hourcontrast" :style="{width: '50%', height: '600px'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHome",
  data() {
    return {
      colors: [
        "color1",
        "color2",
        "color3",
        "color4",
        "color5",
        "color6",
        "color7",
        "color8",
        "color9",
        "color10",
        "color11",
        "color12",
        "color13",
        "color14",
        "color15",
        "color16",
        "color17"
      ],
      data: [99, 71, 78, 25, 36, 92],
      line: "",
      general_order: "123",
      sent_list: "456",
      pending_number: "789"
    };
  },
  created() {},
  mounted() {
    this.drawLine();
    this.hourcontrast();
    this.calculatePath();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "区域订单",
          subtext: "工时需求",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          show: true
        },
        grid: {
          // 控制图的大小，调整下面这些值就可以，
          show: true,
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          backgroundColor: "#e4e4e6",
          x: 40,
          x2: 100,
          y2: 150 // y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },
        legend: {
          data: ["销量"],
          left: "10%",
          top: "10%"
        },
        xAxis: {
          type: "category",
          data: [
            "2019-03-1706:00:00",
            "2019-03-17 07:00:00",
            "2019-03-17 08:00:00",
            "2019-03-17 09:00:00",
            "2019-03-17 10:00:00",
            "2019-03-1706:00:00",
            "2019-03-17 07:00:00",
            "2019-03-17 08:00:00",
            "2019-03-17 09:00:00",
            "2019-03-17 10:00:00"
          ],

          axisTick: {
            alignWithLabel: true
          },
          splitLine: {
            show: false,
            interval: "auto",
            lineStyle: {
              color: ["#315070"],
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 90
          }
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [0.27, 0.76, 1.29, 1.94, 2.11, 0.27, 0.76, 1.29, 1.94, 2.11],
            itemStyle: {
              color: "#e54933"
            }
          }
        ]
      });
    },
    hourcontrast() {
      // 基于准备好的dom，初始化echarts实例
      var _that = this;
      var data = [];
      var date = {};
      _that.$axios
        .get("http://dev.upctech.com.cn/api/sch/compare_worker_job")
        .then(res => {
          for (var k in res.data.jobs_hrs) {
            date.product = k;
            date.jobs_hrs = res.data.jobs_hrs[k];
            date.workers_hrs = res.data.workers_hrs[k];
            data.push(date);
            date = {};
          }
        });
      let myChart = this.$echarts.init(document.getElementById("hourcontrast"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "区域洗车",
          subtext: "工时需求 和 工人工时",
          x: "center"
        },
        grid: {
          // 控制图的大小，调整下面这些值就可以，
          show: true,
          backgroundColor: "#e4e4e6",
          x: 40,
          x2: 100,
          y2: 150 // y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },

        legend: {
          left: "10%",
          top: "10%"
        },
        tooltip: {
          show: true
        },
        dataset: {
          dimensions: ["product", "jobs_hrs", "workers_hrs"],
          source: data
        },
        xAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            rotate: 90
          }
        },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: "bar" },
          {
            type: "bar",
            barGap: "0%",
            itemStyle: {
              color: "#1b88e5"
            }
          }
        ]
      });
    },
    calculatePath() {
      var _that = this;
      var date = _that.getNowFormatDate();
      var workers = [];
      var jobs = [];
      var obj = {};
      _that.$axios
        .post("http://dev.upctech.com.cn/api/sch/load_by_region", {
          workday: "2019-08-08"
        })
        .then(res => {
          console.log(res.data);
          for (var i = 0; i < res.data.jobs.length; i++) {
            obj.startDate = new Date(res.data.jobs[i].start_time);
            obj.endDate = new Date(res.data.jobs[i].end_time);
            obj.taskName = res.data.jobs[i].worker_id;
            obj.status = _that._data.colors[obj.taskName];
            jobs.push(obj);
            obj = {};
          }
          for (var i = 0; i < res.data.workers.length; i++) {
            workers.push(res.data.workers[i].worker_id);
          }
        });
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
    }
  }
};
</script>

<style scoped>
h2 {
  color: #b1afaf;
  line-height: 80px;
  text-align: left;
  padding-left: 20px;
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0px 7px 7px -7px #5e5e5e;
}

.todayclub {
  margin-top: 70px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.block1 {
  color: white;
  background: #1b88e5;
}
.block2 {
  color: white;
  background: #7560ed;
}
.block3 {
  color: white;
  background: #26c5d8;
}
.h5 {
  text-indent: 1em;
  text-align: left;
  font-size: 14px;
  line-height: 40px;
  margin: 0;
}
.ordernumber {
  font-size: 40px;
  line-height: 60px;
}
.remarks {
  font-size: 12px;
}
#myChart {
  float: left;
}
#hourcontrast {
  float: right;
}
</style>
