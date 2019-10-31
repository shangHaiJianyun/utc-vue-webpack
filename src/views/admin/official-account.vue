<template>
  <div>
    <!-- 表格显示 -->
    <div class="pagetitle">用户活动</div>
    <el-button type="primary" @click="createactivity() " class="add">添加</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="文章ID"></el-table-column>
      <el-table-column prop="title" label="活动名称"></el-table-column>
      <el-table-column prop="description" label="文章介绍"></el-table-column>
      <el-table-column prop="created_on" label="创建日期"></el-table-column>
      <el-table-column prop="url" label="文章链接"></el-table-column>

      <el-table-column prop="image" label="活动海报" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.picurl" width="40" height="40" class="head_pic" />
        </template>
      </el-table-column>
      <el-table-column prop="type" label="文章类型" width="120" :formatter="callobject"></el-table-column>
      <el-table-column prop="action" label="文章行为" width="120" :formatter="callobject2"></el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="modifyactivity(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 创建活动 -->
    <el-dialog title="创建文章" :visible.sync="createactivityoperate">
      <el-form :model="creatactivitydata">
        <el-form-item label="文章名称" :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.title"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.description"></el-input>
        </el-form-item>
        <el-form-item label="文章类型" :label-width="formLabelWidth">
          <el-select v-model="creatactivitydata.type" placeholder="文章类型">
            <el-option label="用户" value="member"></el-option>
            <el-option label="技师" value="worker"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="文章行为" :label-width="formLabelWidth">
          <el-select v-model="creatactivitydata.action" placeholder="文章行为">
            <el-option label="订阅" value="subscribe"></el-option>
            <el-option label="扫描" value="scan"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章链接" :label-width="formLabelWidth">
          <el-select v-model="creatactivitydata.url">
            <el-option
              v-for="(items,index) in articlelist"
              :label="items.title"
              :value="items.news_id"
              :key="index"
            ></el-option>
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
    <!-- 修改活动 -->
    <el-dialog title="修改文章" :visible.sync="createactivityoperate2">
      <el-form :model="modifydata">
        <el-form-item label="文章名称" :label-width="formLabelWidth">
          <el-input v-model="modifydata.title"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" :label-width="formLabelWidth">
          <el-input v-model="modifydata.description"></el-input>
        </el-form-item>
        <el-form-item label="文章类型" :label-width="formLabelWidth">
          <el-select v-model="modifydata.type" placeholder="文章类型">
            <el-option label="用户" value="member"></el-option>
            <el-option label="技师" value="worker"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="文章行为" :label-width="formLabelWidth">
          <el-select v-model="modifydata.action" placeholder="文章行为">
            <el-option label="订阅" value="subscribe"></el-option>
            <el-option label="扫描" value="scan"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章链接" :label-width="formLabelWidth">
          <el-select v-model="modifydata.url">
            <el-option
              v-for="(items,index) in articlelist"
              :label="items.title"
              :value="items.news_id"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章图片" :label-width="formLabelWidth">
          <div>
            <input type="file" @change="uploads" />
            <p></p>
            <img :src="imgUrl" class="Posterpictures" />
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createactivityoperate2 = false">取 消</el-button>
        <el-button type="primary" @click="createactivities2()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: "",
      articlelist: [],
      createactivityoperate: false,
      createactivityoperate2: false,
      formLabelWidth: "160px",
      tableData: [],
      modifydata: {},
      creatactivitydata: {
        type: "",
        action: "",
        title: "",
        description: "",
        picurl: "",
        url: ""
      }
    };
  },
  mounted() {
    this.$axios
      .get("http://wx.upctech.com.cn/wx/event/choose_template/all_article")
      .then(res => {
        this._data.tableData = res.data.articles;
      });
    this.$axios
      .get("http://wx.upctech.com.cn/wx/event/choose_template/all_content")
      .then(res => {
        this._data.articlelist = res.data.article_list;
      });
  },
  methods: {
    //显示创建活动模板
    createactivity() {
      this._data.createactivityoperate = true;
    },
    modifyactivity(e) {
      this._data.createactivityoperate2 = true;
      this._data.modifydata = e;
      this._data.modifydata.url = "";
    },
    //创建文章
    createactivities() {
      if (
        this._data.creatactivitydata.type == "" ||
        this._data.creatactivitydata.action == "" ||
        this._data.creatactivitydata.title == "" ||
        this._data.creatactivitydata.description == "" ||
        this._data.creatactivitydata.url == ""
      ) {
        this.$message.error("请填写信息完整");
      } else {
        var data = this._data.creatactivitydata;
        this._data.createactivityoperate = false;
        data.url =
          "wx.upctech.com.cn/wx/event/choose_template/get_content?news_id=" +
          this._data.creatactivitydata.url;
        this.$axios
          .post(
            "http://wx.upctech.com.cn/wx/event/choose_template/set_article/",
            data
          )
          .then(res => {
            console.log(res);
            this.$message("创建成功");
            window.location.reload();
          });
      }
    },
    createactivities2() {
      if (
        this._data.modifydata.type == "" ||
        this._data.modifydata.action == "" ||
        this._data.modifydata.title == "" ||
        this._data.modifydata.description == "" ||
        this._data.modifydata.url == ""
      ) {
        this.$message.error("请填写信息完整");
      } else {
        this._data.createactivityoperate2 = false;
        var data = this._data.modifydata;

        console.log(data);
        data.url =
          "wx.upctech.com.cn/wx/event/choose_template/get_content?news_id=" +
          this._data.modifydata.url;
        this.$axios
          .post(
            "http://wx.upctech.com.cn/wx/event/choose_template/update_article/",
            data
          )
          .then(res => {
            console.log(res);
            this.$message("修改成功");
            // window.location.reload();
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
          this._data.creatactivitydata.picurl = rs.data.img_url;
          this._data.modifydata.picurl = rs.data.img_url;
          this.$message("上传成功");
        })
        .catch(err => {
          console.log(err);
        });
    },
    callobject(row, column, cellValue) {
      if (cellValue === "worker") {
        return "技师";
      } else {
        return "用户";
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
      console.log(e.id);
      this.$axios
        .get(
          "http://wx.upctech.com.cn/wx/event/choose_template/delete_article/?id=" +
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
  width: 100%;
}
</style>