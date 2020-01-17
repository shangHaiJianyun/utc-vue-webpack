<template>
  <div>
    <!-- 表格显示 -->
    <div class="pagetitle">用户活动</div>

    <el-button type="primary"
               @click="createactivity() "
               class="add">添加</el-button>
    <table class="fl-table">
      <thead>
        <tr>
          <th>活动id</th>
          <th>活动名</th>
          <th>活动介绍</th>
          <th>活动状态</th>
          <th>活动海报</th>
          <th>活动对象</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-for="(item1,index2) in tableData"
             :key="index2">
        <tr v-for="(item2,index) in item1.qr_parameters"
            :key="index">
          <td v-if="!index"
              :rowspan="item1.qr_parameters.length">{{item1.id}}</td>
          <td v-if="!index"
              :rowspan="item1.qr_parameters.length">{{item1.name}}</td>
          <td v-if="!index"
              :rowspan="item1.qr_parameters.length">{{item1.description}}</td>
          <td v-if="!index"
              :rowspan="item1.qr_parameters.length">{{item1.is_active==true ? '进行中':"关闭中"}}</td>
          <td>
            <img :src="'https://s3.cn-northwest-1.amazonaws.com.cn/wechat-qr/'+item2.post_url"
                 width="40"
                 height="40"
                 class="head_pic" />
          </td>

          <td v-if="!index"
              :rowspan="item1.qr_parameters.length"
              v-text="callobject(item1.event_type)"></td>
          <td v-if="!index"
              :rowspan="item1.qr_parameters.length">
            <el-button @click="handleClick(index2)"
                       type="text"
                       size="small">关闭活动</el-button>
            <el-button @click="handleClick2(index2)"
                       type="text"
                       size="small">开启活动</el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <el-table :data="tableData" border style="width: 100%" :key="index">
      <el-table-column prop="id" label="活动id"></el-table-column>
      <el-table-column prop="name" label="活动名"></el-table-column>
      <el-table-column prop="created_on" label="创建日期"></el-table-column>
      <el-table-column prop="description" label="活动介绍"></el-table-column>
      <el-table-column prop="modified_on" label="修改时间"></el-table-column>
      <el-table-column prop="qr_action_name" label="活动名称"></el-table-column>
      <template v-for="(items, index) in tableData[index].qr_parameters">
        <el-table-column prop="items.post_url" label="活动海报" width="300" :key="index">
          <template slot-scope="scope">
            <img
              :src="'https://s3.cn-northwest-1.amazonaws.com.cn/wechat-qr/'+scope.row.post_url"
              width="40"
              height="40"
              class="head_pic"
            />
          </template>
        </el-table-column>
      </template>
    
      <el-table-column prop="event_type" label="活动对象" width="120" :formatter="callobject"></el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
         
        </template>
      </el-table-column>
    </el-table>-->

    <!-- 创建活动 -->
    <el-dialog title="创建活动"
               :visible.sync="createactivityoperate">
      <el-form :model="creatactivitydata">
        <el-form-item label="活动名称"
                      :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.name"></el-input>
        </el-form-item>
        <el-form-item label="分享人所得积分"
                      :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.points"></el-input>
        </el-form-item>

        <el-form-item label="优惠劵id"
                      :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.coupon_class_id"></el-input>
        </el-form-item>
        <el-form-item label="被分享人所得积分"
                      :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.usr_points"></el-input>
        </el-form-item>
        <el-form-item label="被分享人所得优惠劵id"
                      :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.usr_coupon_class_id"></el-input>
        </el-form-item>
        <el-form-item label="活动时间"
                      :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.qr_expire_days"></el-input>
        </el-form-item>
        <el-form-item label="活动时间"
                      :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.qr_action_name"
                    readonly="readonly"></el-input>
        </el-form-item>
        <el-form-item label="活动介绍"
                      :label-width="formLabelWidth">
          <el-input type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="creatactivitydata.description"></el-input>
        </el-form-item>
        <el-form-item label="活动对象"
                      :label-width="formLabelWidth">
          <el-select v-model="creatactivitydata.event_type"
                     placeholder="请选择活动对象">
            <el-option label="用户对用户"
                       value="MM"></el-option>
            <el-option label="技师对用户"
                       value="WM"></el-option>
            <el-option label="技师对技师"
                       value="WW"></el-option>
            <el-option label="代理对用户"
                       value="AM"></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="4">
            <el-form-item label="活动海报"
                          :label-width="formLabelWidth"></el-form-item>
          </el-col>
          <el-col :span="5">
            <el-input v-model="imgUrl.qr_box"
                      placeholder="(左移量,上移量)"></el-input>
          </el-col>
          <el-col :span="5">
            <el-input v-model="imgUrl.qr_size"
                      placeholder="(宽,高)"></el-input>
          </el-col>
          <el-col :span="5">
            <div>
              <input type="file"
                     @change="uploads" />
              <p></p>
              <img :src="'https://s3.cn-northwest-1.amazonaws.com.cn/wechat-qr/'+imgUrl.post_url"
                   class="Posterpictures" />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item label="活动海报"
                          :label-width="formLabelWidth"></el-form-item>
          </el-col>
          <el-col :span="5">
            <el-input v-model="imgUrl2.qr_box"
                      placeholder="(左移量,上移量)"></el-input>
          </el-col>
          <el-col :span="5">
            <el-input v-model="imgUrl2.qr_size"
                      placeholder="(宽,高)"></el-input>
          </el-col>
          <el-col :span="5">
            <div>
              <input type="file"
                     @change="uploads2" />
              <p></p>
              <img :src="'https://s3.cn-northwest-1.amazonaws.com.cn/wechat-qr/'+imgUrl2.post_url"
                   class="Posterpictures" />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item label="活动海报"
                          :label-width="formLabelWidth"></el-form-item>
          </el-col>
          <el-col :span="5">
            <el-input v-model="imgUrl3.qr_box"
                      placeholder="(左移量,上移量)"></el-input>
          </el-col>
          <el-col :span="5">
            <el-input v-model="imgUrl3.qr_size"
                      placeholder="(宽,高)"></el-input>
          </el-col>
          <el-col :span="5">
            <div>
              <input type="file"
                     @change="uploads3" />
              <p></p>
              <img :src="'https://s3.cn-northwest-1.amazonaws.com.cn/wechat-qr/'+imgUrl3.post_url"
                   class="Posterpictures" />
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="createactivityoperate = false">取 消</el-button>
        <el-button type="primary"
                   @click="createactivities()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: { qr_box: "", qr_size: "", post_url: "" },
      imgUrl2: { qr_box: "", qr_size: "", post_url: "" },
      imgUrl3: { qr_box: "", qr_size: "", post_url: "" },
      dialogFormVisible: false,
      createactivityoperate: false,
      formLabelWidth: "160px",
      tableData: [],
      creatactivitydata: {
        qr_parameters: [],
        qr_action_name: "QR_STR_SCENE",
        qr_expire_days: "30",
        name: "",
        event_type: "",
        description: "",

        points: "",
        coupon_class_id: "",
        usr_points: "",
        usr_coupon_class_id: ""
      }
    };
  },
  mounted () {
    var _that = this;
    this.$axios
      .get("https://wx.upctech.com.cn/wx/event/user_event_temp/list/")
      .then(res => {
        this._data.tableData = res.data;
      });
  },
  methods: {
    //显示创建活动模板
    createactivity () {
      this._data.createactivityoperate = true;
    },
    callobject (row, column, cellValue) {
      console.log(cellValue)
      // if (cellValue === "MT") {
      //   return "会员推广";
      // } else if (cellValue === "ME") {
      //   return "用户推广";
      // } else if (cellValue === "MA") {
      //   return "代理推广";
      // }
    },
    //创建活动
    createactivities () {
      var _that = this;
      console.log(this._data.creatactivitydata);
      if (this._data.creatactivitydata.name == "") {
        this.$message.error("没有填写活动名称");
      } else if (this._data.creatactivitydata.event_type == "") {
        this.$message.error("没有填写活动对象");
      } else if (this._data.creatactivitydata.description == "") {
        this.$message.error("没有填写活动内容");
      } else if (
        this._data.creatactivitydata.points == "" ||
        this._data.creatactivitydata.usr_points == ""
      ) {
        this.$message.error("抱歉没有选择积分");
      } else if (
        this._data.creatactivitydata.coupon_class_id == "" ||
        this._data.creatactivitydata.usr_coupon_class_id == ""
      ) {
        this.$message.error("请输入优惠劵id");
      } else if (this._data.creatactivitydata.qr_expire_days == "") {
        this.$message.error("没有填写活动时间");
      } else if (this._data.imgUrl.post_url == "") {
        this.$message.error("没有选活动海报");
      } else {
        this._data.createactivityoperate = false;
        if (this._data.imgUrl.post_url != "") {
          this._data.creatactivitydata.qr_parameters.push(this._data.imgUrl);
        }
        if (this._data.imgUrl2.post_url != "") {
          this._data.creatactivitydata.qr_parameters.push(this._data.imgUrl2);
        }
        if (this._data.imgUrl3.post_url != "") {
          this._data.creatactivitydata.qr_parameters.push(this._data.imgUrl3);
        }
        parseInt;
        if (this._data.creatactivitydata.event_type == "WW") {
          this._data.creatactivitydata.app_id = "wx2c2a216f6d6e765c";
        } else {
          this._data.creatactivitydata.app_id = "wxb4e2ec03cee28c82";
        }
        alert(this._data.creatactivitydata)
        this.$axios
          .post(
            "https://wx.upctech.com.cn/wx/event/user_event_temp/create/",
            this._data.creatactivitydata
          )
          .then(res => {
            this.$message("创建成功");
            // window.location.reload();
          });
      }
    },
    // 第一张上传
    uploads (e) {
      var _that = this;
      const file = e.target.files[0]; //获取到当前文件对象
      // 传递一个 FormData 对象 即可
      let formData = new FormData();
      formData.append("image", file); // 'file' 可变 相当于 input 表单的name 属性
      // 服务器只需按照正常的上传程序代码即可
      this.$http
        .post("https://wx.upctech.com.cn/wx/img/image/upload/", formData)
        .then(rs => {
          this._data.imgUrl.post_url = rs.data.img_name;

          this.$message("上传成功");
        })
        .catch(err => {
          console.log(err);
        });
    },
    uploads2 (e) {
      var _that = this;
      const file = e.target.files[0]; //获取到当前文件对象

      // 传递一个 FormData 对象 即可
      let formData = new FormData();
      formData.append("image", file); // 'file' 可变 相当于 input 表单的name 属性
      // 服务器只需按照正常的上传程序代码即可
      this.$http
        .post("https://wx.upctech.com.cn/wx/img/image/upload/", formData)
        .then(rs => {
          this._data.imgUrl2.post_url = rs.data.img_name;
          console.log(imgUrl2);

          this.$message("上传成功");
        })
        .catch(err => {
          console.log(err);
        });
    },
    uploads3 (e) {
      var _that = this;
      const file = e.target.files[0]; //获取到当前文件对象

      // 传递一个 FormData 对象 即可
      let formData = new FormData();
      formData.append("image", file); // 'file' 可变 相当于 input 表单的name 属性
      // 服务器只需按照正常的上传程序代码即可
      this.$http
        .post("https://wx.upctech.com.cn/wx/img/image/upload/", formData)
        .then(rs => {
          this._data.imgUrl3.post_url = rs.data.img_name;
          console.log(imgUrl3);

          this.$message("上传成功");
        })
        .catch(err => {
          console.log(err);
        });
    },
    callobject (cellValue) {
      if (cellValue === "MM") {
        return "用户对用户";
      } else if (cellValue === "WM") {
        return "技师对用户";
      } else if (cellValue === "WW") {
        return "技师对技师 ";
      } else if (cellValue === "AM") {
        return "代理对会员 ";
      }
    },
    handleClick (index) {
      var _that = this;
      var id = index + 1;
      this.$axios
        .get(
          "https://wx.upctech.com.cn/wx/event/user_event_temp/delete?event_id=" +
          id
        )
        .then(res => {
          if (res.data.erro == "done") {
            this.$message("关闭成功");
            window.location.reload();
          } else {
            this.$message.error("关闭失败");
          }
        });
    },
    handleClick2 (index) {
      var _that = this;
      var id = index + 1;
      this.$axios
        .get(
          "https://wx.upctech.com.cn/wx/event/user_event_temp/active/?event_id=" +
          id
        )
        .then(res => {
          if (res.data.erro == "done") {
            this.$message("开启成功");
            window.location.reload();
          } else {
            this.$message.error("开启失败");
          }
        });
    }
  }
};
</script>
<style>
.head_pic {
  display: inline;
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
.Posterpictures {
  width: 100%;
}
.table-wrapper {
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
}

.fl-table {
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
}

.fl-table td,
.fl-table th {
  text-align: center;
  padding: 8px;
}

.fl-table td {
  font-size: 12px;
  border: 1px solid #909399;
}

.fl-table thead th {
  color: #ffffff;
  background: #4fc3a1;
}

.fl-table thead th:nth-child(odd) {
  color: #ffffff;
  background: #324960;
}

.fl-table tr:nth-child(even) {
  background: #f8f8f8;
}
</style>