<template>
    <div id="app">
      <Header/>
      <div class="container main-container" style="position:relative;">
          <div id="banner" style="margin:40px 0 20px 0">
              <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="item in 4" :key="item">
                     <h3>{{ item }}</h3>
                  </el-carousel-item>
              </el-carousel>
          </div>
          <div id="content">
            <div class="top" v-if="show">
                  <div class="top1">
                      <div class="top1Left">开榜倒计时：<span style="margin-left:20px;">{{CountDown}}</span></div>
                      <div class="top1Right">今日奖池：5555元</div>
                  </div>
                  <div class="top2" >
                  </div>
              </div>
              <div class="top" v-else>
                  <div class="top1">
                      <div class="top1Left">开榜结算，请到【我的账户】查看收获</div>
                      <div class="top1Right">今日奖池：5555元</div>
                  </div>
                  <div class="top2">
                      <div class="top2Left" >下期拍榜将于13:00开始</div>
                      <div class="top2Right">下期奖池：5555元</div>
                  </div>
              </div>
              <div class="bottom" style="margin-top: 20px;">
                  <el-table :data="tableData" style="width: 100%" max-height="250">
                    <el-table-column prop="type" label="礼包类型" width="160"></el-table-column>
                    <el-table-column prop="No" label="编号" width="160"></el-table-column>
                    <el-table-column prop="bonus" label="礼包奖金" width="160" sortable></el-table-column>
                    <el-table-column prop="offer" label="当前出价" width="160" sortable></el-table-column>
                    <el-table-column prop="time" label="出价时间" width="160" sortable></el-table-column>
                    <el-table-column prop="people" label="出价人" width="160"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope" v-if="showBtn">
                           <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small" @click="clickPrice">出价</el-button>
                        </template>
                    </el-table-column>
                  </el-table>
              </div>
          </div>
          <el-card class="box-card" v-if="showCard">
                   <div slot="header" class="clearfix">
                        <div style="display:flex">
                            <span style="width:50%;display:block;text-align:center;">出价</span>
                            <span style="width:50%;display:block;text-align:center;">出价记录</span>
                        </div>
                        <el-button style="padding:3px 0;float: right;padding: 3px 0px;position: absolute;top: 7px;right: 16px;" type="text" @click="clickClose">关闭</el-button>
                   </div>
                   <div class="text item cardBottom">
                       <div class="left">
                          <div>
                             <span>开榜倒计时： </span>
                             <span>{{CountDown}}</span>
                          </div>
                          <div>
                             <span>普通礼包</span>
                          </div>
                          <div>
                             <span>编号：</span>
                             <span>hd5744</span>
                          </div>
                          <div>
                             <span>礼包奖金：</span>
                             <span>70.59元</span>
                          </div>
                          <div>
                             <span>当前出价：</span>
                             <span>{{nowPrice}}</span>
                             <span class="update">刷新</span>
                          </div>
                          <div>
                             <span>出价时间：</span>
                             <span>00:59:58</span>
                          </div>
                          <div>
                             <span>出价人：</span>
                             <span>135****55（我）</span>
                          </div>
                          <div>
                             <span>出价：</span>
                             <input v-model="priceValue" placeholder="" style="width: 131px;">
                             <span  style="font-size: 17px;margin-left: 16px;">+</span>
                          </div>
                          <div style="padding-left: 102px;margin-top: 30px;">
                             <button style="width:71px;height:26px;">出价</button>
                          </div>
                       </div>
                       <div class="right" style="margin-top: -14px;">
                         <el-table :data="biddingRecord" style="" max-height="330">
                               <el-table-column prop="time" label="出价时间" width="110" ></el-table-column>
                               <el-table-column prop="offer" label="出价" width="110" ></el-table-column>
                               <el-table-column prop="people" label="出价人" width="120"></el-table-column>
                         </el-table>
                       </div>
                   </div>
          </el-card>
      </div>
      <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
   name:'Home',
   data() {
      return {
        tableData: [{
          type: '普通礼包',
          No: '086666',
          bonus: '50.00',
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        }, {
          type: '惊喜礼包',
          No: '086666',
          bonus: '50.00',
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        }, {
          type: '普通礼包',
          No: '086666',
          bonus: '50.00',
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        }],
        biddingRecord:[{
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        },
        {
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        },
        {
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        },
        {
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        },
        {
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        },
        {
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        },
        {
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        },
        {
          offer: '1234',
          time: '12:34:56',
          people: '17635369726'
        }],
       show:true,
       showBtn:true,
       showCard:false,
       CountDown:'',
       priceValue:'',
       totalSeconds:'',
       nowPrice:100
      }
    },
   components:{
       Header,
       Footer
   },
   mounted:function(){
     this.getcountdown();
   },
   methods: {
    //  打开弹框
    clickPrice:function(){
      this.showCard=true;
    },
    //  关闭弹框
    clickClose:function(){
        this.showCard=false;
    },
    //  倒计时
    getcountdown:function() {
         //当前时间
        var nowDate = new Date();
        var s4=Number(nowDate);
        var y =nowDate.getFullYear();    
        var m =nowDate.getMonth()+1;       
        var d =nowDate.getDate();

         // 当前时间转换格式
        var nowTime = y + '-' + (m < 10 ? "0" + m : m) + '-' + (d < 10 ? "0" + d : d)+' '+'12:00';

        // 获取当天12点的时间戳
        var timetamp1 = Number(new Date(nowTime)) ;
         // 当前时间戳
        var timetamp2 = Number(new Date()) ;
         // 获取第二天时间
        nowDate.setTime(nowDate.getTime()+24*60*60*1000);
        var s3 = nowDate.getFullYear()+"-" + (nowDate.getMonth()+1) + "-" + nowDate.getDate()+' '+'12:00';
 
          //结束时间
        if(timetamp2<timetamp1){
            var endDate =  Number(new Date(nowTime));
       }else{
            var endDate= Number(new Date(s3)) 
       }

         //相差的总秒数
      var totalSeconds = parseInt((endDate -  Number(s4))/ 1000);
      this.totalSeconds=totalSeconds;
      //天数
      var days = Math.floor(totalSeconds / (60 * 60 * 24));
      //取模（余数）
       var modulo = totalSeconds % (60 * 60 * 24);
      //小时数
      var hours = Math.floor(modulo / (60 * 60));
        modulo = modulo % (60 * 60);
       //分钟
       var minutes = Math.floor(modulo / 60);
       //秒
       var seconds = modulo % 60;
       //输出到页面
      //  console.log(hours + "小时" + minutes + "分钟" + seconds + "秒")
       this.CountDown = hours + "小时" + minutes + "分钟" + seconds + "秒";
       //延迟一秒执行自己
       setTimeout(this.getcountdown, 1000);
  }
    },
    watch:{
       totalSeconds(newVal){
         var that=this;
          if(newVal==0||newVal>=82800){
            console.log(newVal)
            this.getcountdown();
            this.show=false;
            this.showBtn=false;
            setTimeout(function(){
              that.show=true;
              that.showBtn=true
            },3600000);
          };
          deep: true
       }
  }
}
</script>

<style scoped>
/* banner */
.el-carousel__item h3 {color: #475669;font-size: 18px;opacity: 0.75;line-height: 300px;margin: 0;text-align: center;}
.el-carousel__item:nth-child(2n) {background-color: #99a9bf;}
.el-carousel__item:nth-child(2n+1) {background-color: #d3dce6;}
#content{font-size: 22px;color: #4a4a4a;margin-bottom: 41px;font-weight: 500;}
.top1,.top2{display: flex;justify-content: space-between;align-items: center;line-height: 45px;}
.box-card{position: absolute;z-index: 999;width: 755px;height: 500px;top: 30%;left: 50%;margin-left: -378px;}
.cardBottom{display: flex;height: 400px;}
.cardBottom .left,.cardBottom .right{width: 50%;}
.cardBottom .left div{margin-bottom: 15px;padding-left: 20px;}
.cardBottom .left div .update{border: 1px solid;background: #DDDDDD;padding: 0 10px 0 10px;margin-left: 56px;}
</style>
    