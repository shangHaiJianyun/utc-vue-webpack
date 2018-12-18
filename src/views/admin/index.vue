<template>
    <!-- <b-navbar toggleable="md" variant="light">
        <b-navbar-brand href="#">BootstrapVue</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item href="#">
                <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item href="#">
                <router-link to="/home">UserHome</router-link>
            </b-nav-item>
            <b-nav-item-dropdown text="Admin" left>
                <b-dropdown-item href="#">
                    <router-link to="/admin-home">Admin Home</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/dists">dists</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/projects">projects</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/settings">settings</router-link>

                </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Dists" left>
                <b-dropdown-item href="#">
                    <router-link to="/admin-home">Admin Home</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/dists">dists</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/projects">projects</router-link>

                </b-dropdown-item>
                <b-dropdown-item href="#">
                    <router-link to="/settings">settings</router-link>

                </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#" right>
                <router-link to="/login">login</router-link>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar> -->
    <div class="home">
      <h2>管理员主页</h2>
      <!--<el-table-->
        <!--:data="tableData"-->
        <!--border-->
        <!--style="width: 100%">-->
        <!--<el-table-column-->
          <!--fixed-->
          <!--prop="Name"-->
          <!--label="Name"-->
          <!--width="170">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="Mobile"-->
          <!--label="Mobile"-->
          <!--width="180">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="Dept"-->
          <!--label="Dept"-->
          <!--width="140">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="cn_name"-->
          <!--label="cn_name"-->
          <!--width="140">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
          <!--prop="email"-->
          <!--label="email"-->
          <!--width="300">-->
        <!--</el-table-column>-->
        <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
          <!--&lt;!&ndash;prop="zip"&ndash;&gt;-->
          <!--&lt;!&ndash;label="邮编"&ndash;&gt;-->
          <!--&lt;!&ndash;width="120">&ndash;&gt;-->
        <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
        <!--<el-table-column-->
          <!--fixed="right"-->
          <!--label="操作"-->
          <!--width="100">-->
          <!--<template slot-scope="scope">-->
            <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
            <!--<el-button type="text" size="small">编辑</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->
      <!--</el-table>-->




      <!--<div id="vueapp" class="vue-app">-->
        <!--<kendo-datasource ref="datasource1"-->
                          <!--:transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"-->
                          <!--:transport-read-data-type="'jsonp'"-->
                          <!--:transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"-->
                          <!--:transport-update-data-type="'jsonp'"-->
                          <!--:transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"-->
                          <!--:transport-destroy-data-type="'jsonp'"-->
                          <!--:transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"-->
                          <!--:transport-create-data-type="'jsonp'"-->
                          <!--:transport-parameter-map="parameterMap"-->
                          <!--:schema-model-id="'ProductID'"-->
                          <!--:schema-model-fields="schemaModelFields"-->
                          <!--:batch='true'-->
                          <!--:page-size='20'>-->
        <!--</kendo-datasource>-->

        <!--<kendo-grid :height="600"-->
                    <!--:data-source="tableData"-->
                    <!--:navigatable="true"-->
                    <!--:pageable="true"-->
                    <!--:editable="true"-->
                    <!--:sortable="true"-->
                    <!--:toolbar="['create', 'save', 'cancel']">-->
          <!--<kendo-grid-column :field="'Name'"-->
                             <!--:title="'Name'"-->
                             <!--:width="200"></kendo-grid-column>-->
          <!--<kendo-grid-column :field="'Mobile'"-->
                             <!--:title="'Mobile'"-->
                             <!--:width="150"-->
                             <!--:format="'{0:c}'"></kendo-grid-column>-->
          <!--<kendo-grid-column :field="'Dept'"-->
                             <!--:title="'Dept'"-->
                             <!--:width="120"></kendo-grid-column>-->
          <!--<kendo-grid-column :field="'cn_name'" :title="'cn_name'" :width="120"></kendo-grid-column>-->
          <!--<kendo-grid-column :field="'email'" :title="'email'" :width="200"></kendo-grid-column>-->
          <!--<kendo-grid-column :command="['destroy']"-->
                             <!--:title="'&nbsp;'"-->
                             <!--:width="100"></kendo-grid-column>-->
        <!--</kendo-grid>-->
      <!--</div>-->


    </div>
</template>

<script>
  const items = [{
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
  }, {
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
  }, {
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
  }, {
    Name: '天龙八部',
    Mobile: '15564896358',
    Dept: '人事',
    cn_name: '000',
    email: '1105148155@qq.com',
  }]
export default {
  name: "AdminHome",
  data () {
    return {
      tableData: items,
      schemaModelFields: {
        ProductID: { editable: false, nullable: true },
        Name: { validation: { required: true } },
        Mobile: { type: 'number', validation: { required: true, min: 1 } },
        Dept: { type: 'boolean' },
        cn_name: { type: 'number', validation: { min: 0, required: true } },
        email: { type: 'number', validation: { min: 0, required: true } }
      }
    }
  },
  created(){
    this.$parent.user_type = 'Admin'
  },
  methods: {
    parameterMap: function(options, operation) {
      if (operation !== 'read' && options.models) {
        return { models: kendo.stringify(options.models) }
      }
    }
  }
};
</script>
<style scoped>

</style>
