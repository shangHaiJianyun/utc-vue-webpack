<template>
  <div>
    <!-- 表格显示 -->
    <div class="pagetitle">用户活动</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="type" label="文章类型" width="120" :formatter="callobject"></el-table-column>
      <el-table-column prop="action" label="文章行为" width="120" :formatter="callobject2"></el-table-column>

      <el-table-column prop="created_on" label="创建日期"></el-table-column>

      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="modifyactivity(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改活动 -->
    <el-dialog title="修改文章" :visible.sync="createactivityoperate2">
      <el-form v-show="modifydata.details" v-for="(item,index) in modifydata.details" :key="index">
        <el-row>
          <el-col :span="2">
            <el-input
              v-model="item.order"
              placeholder="文章ID"
              @input="inputFunction(index)"
              id="myInput"
            ></el-input>
          </el-col>
          <el-col :span="5">
            <el-input v-model="item.title" placeholder="文章名称"></el-input>
          </el-col>
          <el-col :span="5">
            <el-input v-model="item.description" placeholder="文章介绍"></el-input>
          </el-col>
          <el-col :span="5" v-if="modifydata.type != 'agent'">
            <el-select v-model="item.url">
              <el-option
                v-for="(items,index) in articlelist"
                :label="items.title"
                :value="items.news_id"
                :key="index"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="5" v-if="modifydata.type === 'agent'">
            <el-input v-model="item.url" placeholder="文章链接"></el-input>
          </el-col>
          <el-col :span="5">
            <div>
              <input type="file" @change="uploads" />
              <p></p>
              <img :src="item.picurl" class="Posterpictures" />
            </div>
          </el-col>
          <!-- <el-col :span="2">
            <el-button @click="handleClick(index)" type="text" size="small">删除</el-button>
          </el-col>-->
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="warning" @click="add() ">添加文章</el-button>
        <el-button @click="createactivityoperate2 = false">取 消</el-button>
        <el-button type="primary" @click="createactivities2()">修改文章</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indexs: "",
      articlelist: [],
      createactivityoperate2: false,
      formLabelWidth: "160px",
      tableData: [],
      modifydata: {}
    };
  },
  mounted() {
    var _that = this;
    this.$axios
      .get("https://wx.upctech.com.cn/wx/event/choose_template/all_article")
      .then(res => {
        this._data.tableData = res.data.articles;
      });
    this.$axios
      .get("https://wx.upctech.com.cn/wx/event/choose_template/all_content")
      .then(res => {
        this._data.articlelist = res.data.article_list;
      });
  },
  methods: {
    inputFunction(index) {
      this._data.indexs = index;
    },
    add() {
      this._data.modifydata.details.push({
        url: "",
        order: "",
        title: "",
        description: "",
        picurl: ""
      });
      console.log();
    },
    modifyactivity(e) {
      this._data.createactivityoperate2 = true;
      this._data.modifydata = e;
    },
    createactivities2() {
      this._data.createactivityoperate2 = false;
      var data = this._data.modifydata;
      if (this._data.modifydata.type != "agent") {
        for (var i = 0; i < data.details.length; i++) {
          data.details[i].url =
            "wx.upctech.com.cn/" +
            data.type +
            "/news-information?news_id=" +
            data.details[i].url;
        }
      }

      console.log("data", data);

      // this.$axios
      //   .post(
      //     "http://wx.upctech.com.cn/wx/event/choose_template/update_article/",
      //     data
      //   )
      //   .then(res => {
      //     console.log(res);
      //     this.$message("修改成功");
      //     // window.location.reload();
      //   });
    },
    uploads(e) {
      var _that = this;
      const file = e.target.files[0]; //获取到当前文件对象
      this.imgUrl = URL.createObjectURL(file); // 这是为了显示图片而已， 与上传没有关系（可选）

      // 传递一个 FormData 对象 即可
      let formData = new FormData();
      formData.append("image", file); // 'file' 可变 相当于 input 表单的name 属性
      // 服务器只需按照正常的上传程序代码即可
      this.$http
        .post("https://wx.upctech.com.cn/wx/img/image/upload/", formData)
        .then(rs => {
          console.log(this._data.indexs);
          this._data.modifydata.details[this._data.indexs].picurl =
            rs.data.img_url;

          this.$message("上传成功");
        })
        .catch(err => {
          console.log(err);
        });
    },
    callobject(row, column, cellValue) {
      if (cellValue === "worker") {
        return "技师";
      } else if (cellValue === "member") {
        return "用户";
      } else {
        return "代理";
      }
    },
    callobject2(row, column, cellValue) {
      if (cellValue === "subscribe") {
        return "订阅";
      } else {
        return "扫描";
      }
    },
    handleClick(e) {
      console.log(e);
      var _that = this;
      _that._data.modifydata.details.splice(e, 1);

      _that.$axios
        .get(
          "https://wx.upctech.com.cn/wx/event/choose_template/delete_article/?id=" +
            e.id
        )
        .then(res => {
          if (res.data.erro == "done") {
            this.$message("删除成功");
            //window.location.reload();
          } else {
            this.$message.error("删除失败");
          }
        });
    }
  }
};
</script>
<style>
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
  width: 18%;
}
</style>