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
      <el-table-column prop="description" label="活动介绍"></el-table-column>

      <el-table-column prop="image" label="活动海报" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.post_url" width="40" height="40" class="head_pic">
        </template>
      </el-table-column>
      <el-table-column prop="modified_on" label="修改时间"></el-table-column>
      <el-table-column prop="event_type" label="活动对象" width="120" :formatter="callobject"></el-table-column>
      <el-table-column prop="is_active" label="活动状态" width="120" :formatter="formatSex"></el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">关闭</el-button>
          <el-button type="text" size="small">开启</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑活动 -->
    <el-dialog title="编辑活动" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动ID" :label-width="formLabelWidth">
          <el-input v-model="form.id" readonly="readonly"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动介绍" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="活动海报" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 创建活动 -->
    <el-dialog title="创建活动" :visible.sync="createactivityoperate">
      <el-form :model="creatactivitydata">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="creatactivitydata.name" readonly="readonly"></el-input>
        </el-form-item>
        <el-form-item label="活动对象" :label-width="formLabelWidth">
          <el-select v-model="creatactivitydata.event_type" placeholder="请选择活动对象">
            <el-option label="用户" value="shanghai"></el-option>
            <el-option label="技师" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动介绍" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="creatactivitydata.description"
          ></el-input>
        </el-form-item>
        <el-form-item label="活动海报" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="creatactivitydata.imageUrl" :src="creatactivitydata.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createactivityoperate = false">取 消</el-button>
        <el-button type="primary" @click="createactivityoperate = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      createactivityoperate: false,
      formLabelWidth: "120px",
      form: {
        imageUrl:
          "https://s3.cn-northwest-1.amazonaws.com.cn/wechat-qr/printable-coupons.jpg",
        id: "1",
        name: "用户市场活动",
        description: "会员分享好友送礼券"
      },
      tableData: [],
      creatactivitydata: {
        imageUrl:
          "https://s3.cn-northwest-1.amazonaws.com.cn/wechat-qr/printable-coupons.jpg",
        event_type: "MT",
        name: "用户市场活动",
        description: "会员分享好友送礼券"
      }
    };
  },
  mounted() {
    this.$axios
      .get("http://dev.upctech.com.cn/wx/event/market_event_temp/list/")
      .then(res => {
        this._data.tableData = res.data;
      });
  },
  methods: {
    createactivity() {
      this._data.createactivityoperate = true;
    },
    handleClick(row) {
      console.log(row);
      this._data.dialogFormVisible = true;
      this._data.form.name = row.name;
      this._data.form.imageUrl = row.post_url;
      this._data.form.id = row.id;
      this._data.form.description = row.description;
    },
    handleAvatarSuccess(res, file) {
      this.form.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      return isJPG && isLt2M;
    },
    formatSex(row, column, cellValue) {
      if (cellValue === true) {
        return "进行中";
      } else if (cellValue === false) {
        return "已结束";
      }
    },
    callobject(row, column, cellValue) {
      console.log(cellValue);
      if (cellValue === "MT") {
        return "技师";
      } else if (cellValue === "ME") {
        return "用户";
      }
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
</style>