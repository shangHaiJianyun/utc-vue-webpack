webpackJsonp([15],{md3T:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=[{isActive:!0,age:40,first_name:"Dickerson",last_name:"Macdonald"},{isActive:!1,age:21,first_name:"Larsen",last_name:"Shaw"},{isActive:!1,age:89,first_name:"Geneva",last_name:"Wilson"},{isActive:!0,age:38,first_name:"Jami",last_name:"Carney"}],a=[{Name:"天龙八部",Mobile:"15564896358",Dept:"人事",cn_name:"000",email:"1105148155@qq.com"},{Name:"天龙八部",Mobile:"15564896358",Dept:"人事",cn_name:"000",email:"1105148155@qq.com"},{Name:"天龙八部",Mobile:"15564896358",Dept:"人事",cn_name:"000",email:"1105148155@qq.com"},{Name:"天龙八部",Mobile:"15564896358",Dept:"人事",cn_name:"000",email:"1105148155@qq.com"}],l={name:"UsersHome",data:function(){return{tableData:a,items:t}},created:function(){console.log("token",this.$store.state.token),this.$axios.get("/user/index",{headers:{Authorization:"Bearer "+this.$store.state.token}}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},s=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"home"},[r("h2",[e._v("用户主页")]),e._v(" "),r("h2",[e._v("Show Dists")]),e._v(" "),r("b-row",{staticClass:"text-center"},[r("b-col",{attrs:{cols:"3"}},[e._v("filter")]),e._v(" "),r("b-col",{attrs:{cols:"9"}},[e._v("\n  results\n  "),r("b-table",{attrs:{striped:"",hover:"",items:e.items}})],1)],1)],1)};s._withStripped=!0;var c={render:s,staticRenderFns:[]},o=c;var i=!1;var x=r("VU/8")(l,o,!1,function(e){i||r("x/6D")},"data-v-4498f7b0",null);x.options.__file="src/views/user/index.vue";n.default=x.exports},"x/6D":function(e,n,r){var t=r("yW68");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);r("rjj0")("5a299230",t,!1,{})},yW68:function(e,n,r){(e.exports=r("FZ+f")(!0)).push([e.i,"\n.home[data-v-4498f7b0]{\n  border:1px solid red;\n}\n","",{version:3,sources:["D:/my-vue-webpack/utc-vue-webpack/src/views/user/src/views/user/index.vue"],names:[],mappings:";AAoHA;EACA,qBAAA;CACA",file:"index.vue",sourcesContent:['<template>\r\n  <div class="home">\r\n    <h2>用户主页</h2>\r\n    \x3c!--<el-table--\x3e\r\n      \x3c!--:data="tableData"--\x3e\r\n      \x3c!--border--\x3e\r\n      \x3c!--style="width: 100%">--\x3e\r\n      \x3c!--<el-table-column--\x3e\r\n        \x3c!--fixed--\x3e\r\n        \x3c!--prop="Name"--\x3e\r\n        \x3c!--label="Name"--\x3e\r\n        \x3c!--width="170">--\x3e\r\n      \x3c!--</el-table-column>--\x3e\r\n      \x3c!--<el-table-column--\x3e\r\n        \x3c!--prop="Mobile"--\x3e\r\n        \x3c!--label="Mobile"--\x3e\r\n        \x3c!--width="180">--\x3e\r\n      \x3c!--</el-table-column>--\x3e\r\n      \x3c!--<el-table-column--\x3e\r\n        \x3c!--prop="Dept"--\x3e\r\n        \x3c!--label="Dept"--\x3e\r\n        \x3c!--width="140">--\x3e\r\n      \x3c!--</el-table-column>--\x3e\r\n      \x3c!--<el-table-column--\x3e\r\n        \x3c!--prop="cn_name"--\x3e\r\n        \x3c!--label="cn_name"--\x3e\r\n        \x3c!--width="140">--\x3e\r\n      \x3c!--</el-table-column>--\x3e\r\n      \x3c!--<el-table-column--\x3e\r\n        \x3c!--prop="email"--\x3e\r\n        \x3c!--label="email"--\x3e\r\n        \x3c!--width="300">--\x3e\r\n      \x3c!--</el-table-column>--\x3e\r\n      \x3c!--&lt;!&ndash;<el-table-column&ndash;&gt;--\x3e\r\n      \x3c!--&lt;!&ndash;prop="zip"&ndash;&gt;--\x3e\r\n      \x3c!--&lt;!&ndash;label="邮编"&ndash;&gt;--\x3e\r\n      \x3c!--&lt;!&ndash;width="120">&ndash;&gt;--\x3e\r\n      \x3c!--&lt;!&ndash;</el-table-column>&ndash;&gt;--\x3e\r\n      \x3c!--<el-table-column--\x3e\r\n        \x3c!--fixed="right"--\x3e\r\n        \x3c!--label="操作"--\x3e\r\n        \x3c!--width="100">--\x3e\r\n        \x3c!--<template slot-scope="scope">--\x3e\r\n          \x3c!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>--\x3e\r\n          \x3c!--<el-button type="text" size="small">编辑</el-button>--\x3e\r\n        \x3c!--</template>--\x3e\r\n      \x3c!--</el-table-column>--\x3e\r\n    \x3c!--</el-table>--\x3e\r\n\r\n\r\n    <h2>Show Dists</h2>\r\n    \x3c!-- Content here --\x3e\r\n    <b-row class="text-center">\r\n    <b-col cols="3">filter</b-col>\r\n    <b-col cols="9">\r\n    results\r\n    <b-table striped hover :items="items"></b-table>\r\n    </b-col>\r\n    </b-row>\r\n    \x3c!--<a href="javascript:;" class="log-btn" @click="showtocken">showtocken</a>--\x3e\r\n\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  const user_item = [\r\n    { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },\r\n    { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },\r\n    { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },\r\n    { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }\r\n  ];\r\n  const items = [{\r\n    Name: \'天龙八部\',\r\n    Mobile: \'15564896358\',\r\n    Dept: \'人事\',\r\n    cn_name: \'000\',\r\n    email: \'1105148155@qq.com\',\r\n  }, {\r\n    Name: \'天龙八部\',\r\n    Mobile: \'15564896358\',\r\n    Dept: \'人事\',\r\n    cn_name: \'000\',\r\n    email: \'1105148155@qq.com\',\r\n  }, {\r\n    Name: \'天龙八部\',\r\n    Mobile: \'15564896358\',\r\n    Dept: \'人事\',\r\n    cn_name: \'000\',\r\n    email: \'1105148155@qq.com\',\r\n  }, {\r\n    Name: \'天龙八部\',\r\n    Mobile: \'15564896358\',\r\n    Dept: \'人事\',\r\n    cn_name: \'000\',\r\n    email: \'1105148155@qq.com\',\r\n  }]\r\n\r\n  export default {\r\n    name: "UsersHome",\r\n    data () {\r\n      return {\r\n        tableData: items,\r\n        items:user_item\r\n      }\r\n    },\r\n    created(){\r\n      console.log("token", this.$store.state.token)\r\n      this.$axios.get("/user/index",{headers:{"Authorization":\'Bearer \' + this.$store.state.token}}).then(res=>{\r\n        console.log(res)\r\n      }).catch(err=>{\r\n        console.log(err)\r\n      })\r\n    }\r\n  };\r\n<\/script>\r\n<style scoped>\r\n  .home{\r\n    border:1px solid red;\r\n  }\r\n</style>\r\n'],sourceRoot:""}])}});
//# sourceMappingURL=15.6b587b2598d505711753.js.map