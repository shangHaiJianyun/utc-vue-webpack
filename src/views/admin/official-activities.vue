<template>
  <div>
    <!-- 表格显示 -->
    <div class="pagetitle">官方活动</div>

    <el-button type="primary" @click="createactivity() " class="add">添加</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="活动id"></el-table-column>
      <el-table-column prop="name" label="活动名"></el-table-column>
      <el-table-column prop="created_on" label="创建日期"></el-table-column>
      <el-table-column prop="description" label="活动介绍"></el-table-column>
      <el-table-column prop="modified_on" label="修改时间"></el-table-column>
      <el-table-column prop="scene_str" label="活动key"></el-table-column>

      <el-table-column prop="image" label="活动海报" width="300">
        <template slot-scope="scope">
          <img
            :src="'https://s3.cn-northwest-1.amazonaws.com.cn/wechat-qr/'+scope.row.post_url"
            width="40"
            height="40"
            class="head_pic"
          />
        </template>
      </el-table-column>
      <el-table-column prop="qr_url" label="活动二维码" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.qr_url" width="40" height="40" class="head_pic" />
        </template>
      </el-table-column>
      <el-table-column prop="modified_on" label="修改时间"></el-table-column>
      <el-table-column prop="event_type" label="活动对象" width="120" :formatter="callobject"></el-table-column>
      <el-table-column prop="is_active" label="活动状态" width="120" :formatter="formatSex"></el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除活动</el-button>
          <!-- <el-button type="text" size="small">关闭</el-button>
          <el-button type="text" size="small">开启</el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <!-- 创建活动 -->
    <el-dialog title="创建活动" :visible.sync="createactivityoperate">
      <el-form :model="creatactivitydata">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.name"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="5">
            <el-form-item label="图片位置" :label-width="formLabelWidth"></el-form-item>
          </el-col>
          <el-col :span="6">
            <el-input v-model="top" placeholder="向上偏移量"></el-input>
          </el-col>
          <el-col :span="6">
            <el-input v-model="left" placeholder="向左偏移量"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
            <el-form-item label="二维码图片大小" :label-width="formLabelWidth"></el-form-item>
          </el-col>
          <el-col :span="6">
            <el-input v-model="width" placeholder="宽度"></el-input>
          </el-col>
          <el-col :span="6">
            <el-input v-model="height" placeholder="高度"></el-input>
          </el-col>
        </el-row>
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
             <el-option label="代理" value="MA"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动海报" :label-width="formLabelWidth">
          <div>
            <input type="file" @change="uploads" />
            <p></p>
            <img :src="imgUrl" class="Posterpictures" />
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createactivityoperate = false">取 消</el-button>
        <el-button type="primary" @click="createactivities()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "",
      dialogFormVisible: false,
      createactivityoperate: false,
      top: "",
      left: "",
      width: "",
      height: "",
      formLabelWidth: "120px",
      tableData: [],
      creatactivitydata: {
        qr_box: "",
        qr_size: "",
        name: "",
        event_type: "",
        description: "",
        post_url: ""
      }
    };
  },
  mounted() {
    this.$axios
      .get("http://wx.upctech.com.cn/wx/event/market_event_temp/list/")
      .then(res => {
        this._data.tableData = res.data;
      });
  },
  methods: {
    //显示创建活动模板
    createactivity() {
      this._data.createactivityoperate = true;
    },
    //创建活动
    createactivities() {
      console.log(this._data.creatactivitydata);
      if (this._data.creatactivitydata.name == "") {
        this.$message.error("没有填写活动名称");
      } else if (this._data.creatactivitydata.event_type == "") {
        this.$message.error("没有填写活动对象");
      } else if (this._data.creatactivitydata.description == "") {
        this.$message.error("没有填写活动内容");
      } else if (this._data.creatactivitydata.post_url == "") {
        this.$message.error("抱歉没有选择图片");
      } else {
        this._data.createactivityoperate = false;
        this._data.creatactivitydata.qr_box =
          "(" + this._data.left + "," + this._data.top + ")";
        this._data.creatactivitydata.qr_size =
          "(" + this._data.width + "," + this._data.height + ")";
        this.$axios
          .post(
            "http://wx.upctech.com.cn/wx/event/market_event_temp/create/",
            this._data.creatactivitydata
          )
          .then(res => {
            this.$message("创建成功");
            window.location.reload();
          });
      }
    },
    uploads(e) {
      const file = e.target.files[0]; //获取到当前文件对象
      this.imgUrl = URL.createObjectURL(file); // 这是为了显示图片而已， 与上传没有关系（可选）

      // 传递一个 FormData 对象 即可
      let formData = new FormData();
      formData.append("image", file); // 'file' 可变 相当于 input 表单的name 属性
      // 服务器只需按照正常的上传程序代码即可
      this.$http
        .post("http://wx.upctech.com.cn/wx/img/image/upload/", formData)
        .then(rs => {
          this._data.creatactivitydata.post_url = rs.data.img_name;
          this.$message("上传成功");
        })
        .catch(err => {
          console.log(err);
        });
    },
    formatSex(row, column, cellValue) {
      if (cellValue === true) {
        return "进行中";
      } else if (cellValue === false) {
        return "已结束";
      }
    },
    callobject(row, column, cellValue) {
      if (cellValue === "MT") {
        return "会员推广";
      } else if (cellValue === "ME") {
        return "用户推广";
      }else  if (cellValue === "MA") {
        return "代理推广";
      }
    },
    handleClick(e) {
      this.$axios
        .get(
          "http://wx.upctech.com.cn/wx/event/market_event_temp/delete?event_id=" +
            e.id
        )
        .then(res => {
          if (res.data.erro == "done") {
            this.$message("删除成功");
            window.location.reload();
          } else {
            this.$message.error("删除失败");
          }
        });
    }
  }
};
</script>
<style>
.Posterpictures {
  width: 100%;
}
.add {
  float: right;
  margin: 5px 47px 15px 0;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>