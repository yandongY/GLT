<template>
     <div id="content">
         <div id="top">
             <div class="left">
                 <span>账户：</span>
                 <span>17635369726</span>
             </div>
             <div class="right">
                 <span>余额：</span>
                 <span>9999.99元</span>
             </div>
         </div>
         <div id="middle">
             <div class="left">
                 <span>GLT总额：</span>
                 <span>9999.99元</span>
             </div>
             <div class="middle">
                 <span>冻结GLT：</span>
                 <span>999.99元</span>
             </div>
              <div class="right">
                 <span>锁定GLT：</span>
                 <span>99.99元</span>
             </div>
         </div>
         <div id="bottom">
             <el-row>
                <el-button type="primary" plain @click="clickRecharge">充值</el-button>
                <el-button type="primary" plain @click="clickCash">提现</el-button>
                <el-button type="primary" plain @click="clickRecord">充提记录</el-button>
             </el-row>
         </div>
         <!-- 充值 -->
         <el-card class="box-card" v-if="showRecharge">
                   <div slot="header" class="clearfix">
                         <span style="font-size: 18px;">充值</span>
                         <el-button  @click="clickCloseRecharge" style="float: right; padding: 3px 0" type="text">关闭</el-button>
                   </div>
                   <div class="text item cardContent">
                       <div>
                          <span>充值账号：</span>
                          <span>17635369726</span>
                       </div>
                       <div>
                          <span>请微信扫码进行充值</span>
                       </div>
                       <div style="display:flex;justify-content: center;">
                          <img src="/public/img/erWeiCode.png" alt="" style="width:140px;height:140px;">
                       </div>
                       <div>
                          <span>充值会在1分钟内到账</span>
                       </div>
                   </div>
          </el-card>
          <!-- 提现 -->
         <el-card class="box-card" v-if="showCash">
                   <div slot="header" class="clearfix">
                         <span style="font-size: 18px;">提现</span>
                         <el-button  @click="clickCloseCash" style="float: right; padding: 3px 0" type="text">关闭</el-button>
                   </div>
                   <div class="text item cardContent">
                          <div class="recharge">
                             <span>当前余额：</span>
                             <span>{{balance}}元</span>
                          </div>
                          <div class="recharge">
                             <span>请输入提现金额：</span>
                             <input v-model="rechargrMoney" placeholder="" style="width: 131px;">
                             <span class="all" @click="clickAll">全部</span>
                          </div>
                          <div class="recharge">
                             <span>提现将在2小时内，到绑定的微信账号。</span>
                          </div>
                          <div style="display:flex;justify-content:center;" class="recharge">
                             <button style="width:76px;height:30px;">提现</button>
                          </div>
                   </div>
          </el-card>
          <!-- 充提记录 -->
         <el-card class="box-card" v-if="showRecord" style="width: 600px;height: 400px;position:absolute;top:26%;right:17%;">
                   <div slot="header" class="clearfix">
                         <span style="font-size: 18px;">充提记录</span>
                         <el-button  @click="clickCloseRecord" style="float: right; padding: 3px 0" type="text">关闭</el-button>
                   </div>
                   <div class="text item cardContent">
                         <el-table :data="tableRecord" style="" max-height="330">
                               <el-table-column prop="number" label="单号" width="200" ></el-table-column>
                               <el-table-column prop="option" label="操作" width="120" ></el-table-column>
                               <el-table-column prop="time" label="时间" width="120"></el-table-column>
                               <el-table-column prop="money" label="金额" width="120"></el-table-column>
                         </el-table>
                   </div>
          </el-card>
     </div>
</template>

<script>
export default {
    name:'Overview',
    data(){
        return{
            tableRecord:[
             {
               number: '123415698745',
               option: '充值',
               time: '12:34:56',
               money:'659'
             },
             {
               number: '123415698745',
               option: '充值',
               time: '12:34:56',
               money:'659'
             },
             {
               number: '123415698745',
               option: '充值',
               time: '12:34:56',
               money:'659'
             },
             {
               number: '123415698745',
               option: '充值',
               time: '12:34:56',
               money:'659'
             },
            ],
            balance:3333,  //当前余额
            showRecharge:false,
            showCash:false,
            showRecord:false,
            rechargrMoney:'',
        }
    },
    mounted(){
       this.axios.post('/api/agentSmall/getSceneOrder',{
           belong:16,
           timeEnd:"2019-06-26",
           timeStart:"2019-06-26"
       }).then((res)=>{
          console.log(res)
       })
   },
   methods:{
       clickRecharge(){
           this.showRecharge=true
       },
       clickCash(){
           this.showCash=true
       },
       clickRecord(){
           this.showRecord=true
       },
       clickCloseRecharge(){
           this.showRecharge=false
       },
       clickCloseCash(){
           this.showCash=false
       },
       clickCloseRecord(){
           this.showRecord=false
       },
       clickAll(){
           this.rechargrMoney=this.balance
       }

   }
}
</script>

<style scoped>
#top,#middle,#bottom{display: flex;flex-direction: column;font-size: 20px;}
#top .left,#top .right,#middle .left,#middle .middle,#middle .right{text-align: left;margin-bottom: 30px;}
#bottom .el-row{display: flex;justify-content: start;}
.box-card{width: 400px;height: 400px;position: absolute;top: 27%;right: 27%;}
.cardContent div{margin-bottom: 20px;padding-left: 10px;text-align: center;}
.cardContent .recharge{margin-bottom: 30px;padding-left: 10px;text-align: left;}
.cardContent  div .all{border: 1px solid;background: #DDDDDD;padding: 0px 8px 0 6px;margin-left: 17px;font-size: 12px;}
</style>
