<template>
    <div>
    <Header/>
       <div class="container main-container">
          <div id="banner" style="margin:0px 0 40px 0">
              <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="item in 4" :key="item">
                     <h3>{{ item }}</h3>
                  </el-carousel-item>
              </el-carousel>
          </div>
          <div class="bottom">
              <div class="head">官方公告</div>
              <div class="content" v-for="item in noticeList" :key="item.id" @click="clickDetails">
                 <span class="title">{{item.title}}</span>
                 <span class="time" style="margin-left:150px">{{item.time}}</span>
              </div>
          </div>
       </div>
    <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    name:'Notice',
    components:{
       Header,
       Footer
   },
   data(){
       return{
         noticeList:[
             {title:'官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告',time:'2019-6-18'},
             {title:'官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告',time:'2019-6-18'},
             {title:'官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告',time:'2019-6-18'},
             {title:'官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告',time:'2019-6-18'},
             {title:'官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告',time:'2019-6-18'},
             ]
       }
   },
   methods:{
      clickDetails:function(){
         this.$router.push('/notice/detail')
      }
   },

}
</script>

<style scoped>
.container{margin-bottom: 655px;}
/* banner */
.el-carousel__item h3 {color: #475669;font-size: 18px;opacity: 0.75;line-height: 300px;margin: 0;text-align: center;}
.el-carousel__item:nth-child(2n) {background-color: #99a9bf;}
.el-carousel__item:nth-child(2n+1) {background-color: #d3dce6;}
.bottom .head{text-align: center;font-size: 28px;margin-bottom: 50px;}
.bottom .content{display: flex;justify-content:center;font-size: 20px;margin-bottom: 10px;padding: 0 30px 0 30px;cursor:pointer}
.bottom .content:hover{cursor:pointer}
</style>
