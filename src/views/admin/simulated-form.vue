<template>
<el-container>
  <el-container>
  <el-row class="tabs">
    <el-col :span="8">  
      <el-button>单次服务</el-button>
      <el-button>多次服务</el-button>
      <el-button>巡检包月</el-button>
    </el-col>
    <el-col :span="10"> <el-main>  
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="车型">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
         <el-form-item label="服务地点">
            <el-input v-model="form.map"></el-input>
        </el-form-item>
        <el-form-item label="活动项目">
            <el-select v-model="form.region" placeholder="请选择活动项目">
            <el-option label="内外清洗" value="内外清洗"></el-option>
            <el-option label="外清洗" value="外清洗"></el-option>
             <el-option label="轮胎增亮" value="轮胎增亮"></el-option>
              <el-option label="外观保养" value="外观保养"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="服务日期">
            <el-col>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
           
          
        </el-form-item>
          <el-form-item label="服务时间">
           <el-time-select
                placeholder="起始时间"
                v-model="form.startTime"
                :picker-options="{
                start: '01:00',
                step: '01:00',
                end: '22:00'
                }">
            </el-time-select>------
            <el-time-select
                placeholder="结束时间"
                v-model="form.endTime"
                :picker-options="{
                start: '01:00',
                step: '01:00',
                end: '22:00'
                }">
            </el-time-select>
          </el-form-item>
           <el-form-item label="起始日期">
            <el-col>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="每周次数">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
         <el-form-item label="服务周数">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
       
      
      
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
    </el-main></el-col>
  </el-row>
  
   
  </el-container>
</el-container>
  
</template>

<script>

import axios from "axios";
export default {
  name: "ShowDists",
  data() {
    return {
        startTime: '',
        endTime: '',
      form: {
          name: '',
          region: '',
          date1: '',
          map:"",
        startTime: '',
        endTime: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
    };
  },
  mounted() {
   this.axios.post("http://dev.upctech.com.cn/api/sch/sch_result","").then(res => {
      console.log(res);
    });
  },
  methods: {
  
        onSubmit() {
        console.log(this._data.form);
      }
  }
};
</script>
<style>
    .tabs{
        width:100%
    }
</style>
