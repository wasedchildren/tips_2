<template>
  <div class="ming">
    <div id="commint" class="jian">
    <div @click="huiqu"  class="tyan">
      <span class="fu"><img src="@/img/返回.png" alt=""></span>做票君
      </div>
    <h6>公司名称：{{company_name}}</h6>
    <h6>所在城市：{{list.公司所在城市}}</h6>
    <h6>所在省份：{{list.公司所在省份}}</h6>
    <!-- <h6>联系人：{{list.agent_name}}</h6>
    <h6>机构简称：{{list.agency_name_abbr}}</h6> -->
    <h6 class="h5">联系电话：{{list.公司联系电话}}</h6>
      
    <!-- <h6>机构名称：{{list.agent_name}}</h6> -->
  </div>
  </div>
</template>
<script>
import axios from "axios";
// alert(window.location.href);
export default {
  name: "commint",
  data() {
    return {
      list:[],
      company_name: "",
      公司名:"",
      agency_name_abbr:""
           
      // agency_name_abbr: "",
      // agency_addr_city: "",
      // agent_phone: "",
      // agency_addr_city: ""
    };
  },
  created: function() {
    //实例被创建之后执行代码
    this.getId();
  },
  computed: {
    //计算属性
  },
  components: {
    //组件的引用
  },
  methods: {
    //方法
   
    getId() {
      this.company_name = window.sessionStorage.getItem("company_name");
       console.log(this.company_name)
      //this.compny=  根据id请求详情
      let _this = this;//this的作用域问题；
      axios({
        url:
          "http://139.224.12.228/index/index/getcontent/keyword/company/weixinID/" +
          this.company_name +
          "", //根据id获取详情
        method: "get"
        //data: postData
      })
        .then(req => {
          //code等于多少是你跟后台协商的
          //console.log(req);

          //document.write(req.data.data.agency_name)
          if (req.data.data!=''&&req.data.data!=null) {
            _this.$data.list= req.data.data;
          }
          //console.log(_this.$data.list)
          //t//his.data = req.data.data
          _this.agency_name_abbr = res.data.data.agency_name_abbr  
         

          //保存
        })
        .catch(err => {});
    },
    huiqu() {
      this.$router.push("/");
    }
  },
  mounted() {
    // 页面进入时加载内容
  },
  watch: {
    //监测变化
  }
};
</script>
<style  scoped>
.ming {
  background-color: RGBA(246, 246, 246, 1);
  color: #000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.fu {
  float: left;
  /* display: block; */
  /* height: 1px; */
  /* line-height: 22px; */
}
.fu img {
  height: 24px;
  margin-top: 4px;
}
.jian {
  margin: 2px;
  padding: 2px;
}
.h5 {
  color: red;
}
/* .tyan{
  font: 25px sans-serif;
} */
</style>
