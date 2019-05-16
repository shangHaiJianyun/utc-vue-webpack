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
    <div id="Worker" :style="{width: '100%', height: '600px'}"></div>
  </div>
</template>

<script>
export default {
  name: "AdminHome",
  data() {
    return {
      general_order: "123",
      sent_list: "456",
      pending_number: "789"
    };
  },
  created() {},
  mounted() {
    this.drawLine();
    this.hourcontrast();
    this.Worker();
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
          dimensions: ["product", "req_hrs", "wrk_hrs"],
          source: [
            { product: "2019-03-1706:00:00", req_hrs: 43.3, wrk_hrs: 85.8 },
            { product: "2019-03-17 07:00:00", req_hrs: 83.1, wrk_hrs: 73.4 },
            { product: "2019-03-17 08:00:00", req_hrs: 86.4, wrk_hrs: 65.2 },
            { product: "2019-03-17 09:00:00", req_hrs: 72.4, wrk_hrs: 53.9 },
            { product: "2019-03-17 10:00:00", req_hrs: 43.3, wrk_hrs: 85.8 },
            { product: "2019-03-17 11:00:00", req_hrs: 83.1, wrk_hrs: 73.4 },
            { product: "2019-03-17 12:00:00", req_hrs: 86.4, wrk_hrs: 65.2 },
            { product: "2019-03-17 13:00:00", req_hrs: 72.4, wrk_hrs: 53.9 }
          ]
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
    Worker() {
      let myChart = this.$echarts.init(document.getElementById("Worker"));
      myChart.setOption({
        title: {
          text: "工人洗车单", //标题
          subtext: "纯属虚构", //副标题
          x: "center" //位置
        },
        tooltip: {
          trigger: "item" //提示框
        },
        legend: {
          //小图标
          show: true,
          data: ["结束"],
          left: "3%",
          top: "1%",
          containLabel: true
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          data: ["总费用", "房租", "水电费", "交通费", "伙食费", "日用品数"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "开始",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)"
              },
              emphasis: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)"
              }
            },
            data: [0, 1700, 1400, 1200, 300, 0]
          },
          {
            name: "结束",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true, //
                position: "inside"
              }
            },
            data: [2900, 1200, 300, 200, 900, 300]
          }
        ]
      });
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
