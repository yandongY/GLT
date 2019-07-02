<template>
    <div>
    <Header/>
       <div class="container main-container">
              <div class="content">
                 <span class="title">{{noticeText.title}}</span>
                 <span class="time">{{noticeText.time}}</span>
                 <span class="text">{{noticeText.text}}</span>
              </div>
       </div>
    <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    name:'Detail',
    components:{
       Header,
       Footer
   },
   data(){
       return{
         noticeText:{title:'公告标题',
                     time:'2019-6-18',
                     text:'官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告官方公告'},
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
.content span{display: block;text-align:center;}
.content .title{font-size: 22px;margin: 30px 0 20px 0}
.content .time{font-size: 15px;margin-bottom: 20px;}
.content .text{font-size: 18px;padding: 0 200px 0 200px;text-align:left;}
</style>
