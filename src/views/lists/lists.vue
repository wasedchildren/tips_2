<template>
  <div>
    <div class="tyan">做票君</div>
    <div>
      <p class="i"><i>{{massage}}</i> <i>{{money}}</i> <i>到期日：{{time}}</i></p>
    </div>
     <ol class="bei">
            <li class="bein">公司名称</li>
            <li class="bein">每十万扣</li>
            <li class="bein">利率加价</li>
            <li class="bein">发布时间</li>
           
          </ol>
          
   
          
        <ul class="xi" id="lists" v-for="item in lists" :key="item.buyer_infos" @click="tiaozhaun(item.company_name)">
          <li >
              <span>{{item.公司名}}</span>
         </li>
          <!-- <li><span>{{item.发布人}}</span></li> -->
         <li ><span>{{item.每十万扣}}</span></li>
        
         <li ><span>{{item.利率}}+{{item.加价}}</span></li>
         
          <li ><span>{{item.发布时间}}</span></li>
         
      </ul>
  
  </div>
</template>
<script>
import axios from "axios";
let url = decodeURI(window.location.href)
url = url.substring(37, url.length-2)
console.log(url)
export default {
  name: "lists",
  data() {
    return {
      lists: [],
      massage: " ",
      money: " ",
      time: " "
    };
  },
  created: function() {
    //实例被创建之后执行代码
    this.getMessagr();
    // this.getQueryString(name)
  },
  computed: {
    //计算属性
  },
  components: {
    //组件的引用
  },
  methods: {
    //方法
    tiaozhaun(company_name) {
      //点击存进去
      window.sessionStorage.setItem("company_name",company_name);
      this.$router.push("./commint"); //跳
    },
    
    getMessagr() {
      var fromData = {
         id: url,
          // id:'%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C_1000000_2018.9.9'

      };

      console.log(fromData.id);
      //请求列表页接口
      axios({
        url:
          "http://139.224.12.228/index/index/getcontent/keyword/price/weixinID/" +
          fromData.id,
        method: "get"
      })
        .then(response => {
          console.log(response);
          // if(res.code==1){//code等于多少是你跟后台协商的
          this.lists = response.data.buyer_infos;
          this.massage = response.data.seller_info.bank_name;
          this.money = response.data.seller_info.money;
          this.time = response.data.seller_info.end_time;
          //}else{

          //}
        })
        .catch(err => {});
    }
    // getQueryString(name) { //取经纬度
    //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    //     var r = window.location.search.substr(1).match(reg);
    //     if (r != null) return unescape(r[2]);
    //     return null;
    //     }
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

li {
  list-style: none;
}
i {
  /* margin-left: 2px; */
  color:#fff;
}
.i {
  background-color: RGBA(46, 63, 80, 1);

  color: rgb(194, 204, 147);
  margin: 0px;
  padding: 0;
}
.xian:hover {
  box-shadow: 2px 1px 1px 2px RGBA(146, 207, 88, 1);
  cursor: context-menu;
}
.tyan {
  background: RGBA(46, 63, 80, 1);
  color: #fff;
  text-align: center;
  font: 22px sans-serif;
}
/* span{
    color: rgb(206, 24, 24);
} */
.xian {
  box-sizing: border-box;
  width: 100%;
  margin: 2px 1px 0px 0px;
  padding: 0;
  /* border: 1px solid rgba(0, 0, 0, 0.514); */
  border-radius: 4px;
  background-color: RGBA(246, 246, 246, 1);
  /* box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 1); */
  /* display: flex; */
  /* float: left;
  height: 100%; */
  position: relative;
}

.fon {
  display: block;
  /* flex: 1;
    flex-flow: column ; */
  /* justify-content: flex-start; */
  padding: 3px;
  margin: 7px;
}
.bei{
  display: block;
  background:RGBA(46, 63, 80, 1.00);
    color: #fff;
    font-weight: 100;
    font-family:"Times New Roman",Georgia,Serif;
    width: 100%;
    float: left;
    margin:0px;
    padding: 0px;
}
.bein{
      display: block;
      float: left;
      width: 24%;
      

}
ul#lists {
    width: 100%;
}
.xi{
  border: 1px skyblue solid; 
  width: 100%;
   float: left;
   margin: 0 0 -1px 0 ;
   padding: 0px;
   border: 1px rgb(66, 117, 139) solid;
 
  
  
}
.xi li{
  /* border: 1px rgb(66, 117, 139) solid; */
  text-align: center;
  width: 24%;
  height: 70px;
  float: left;
  margin: 3px -1px 0 0;
   padding: 0px;
  /* position: absolute; */
   

}
.xi li span{
  margin: 0px;
   padding: 0px;
   display: block;
    width: 68px;
    margin-left: 3px;
    margin-top: 20px;
    height: 20px;
    line-height: 20px;
   /* overflow: hidden; */
   color:rgb(59, 39, 85);
  
}
</style>
