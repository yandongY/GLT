<template>
    <div id='header'>
        <div class="logo">
            <img src="/public/img/logo.png" alt="logo飞走了..." style="height:63px">
        </div>
        <div class="middle">
            <div id="middleOption">
                <router-link to="/home">首页</router-link>
            </div>
            <div id="middleOption">
                <router-link to="/notice">公告</router-link>
            </div>
            <div id="middleOption">
                <router-link to="/history">历史回顾</router-link>
            </div>
            <div id="middleOption">
                <router-link to="/account">我的账户</router-link>
            </div>
            <div id="middleOption">
                <router-link to="/help">帮助</router-link>
            </div>     
        </div>
        <div class="right">
             <div id="rightOption">
               <router-link to="/signup">注册</router-link>
            </div>
            <div id="rightOption">
               <router-link to="/login">登录</router-link>
            </div>      
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',


}
</script>

<style scoped>
  #header{
      display:flex;
      background-color: #ffffff;
      width: 100%;
      height: 69px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e7e7e7;
      padding: 0 60px 0 60px;
      box-sizing: border-box;
  }
  .logo{
      width: 14%;
      height: 100%;
  }
  .middle{
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: center;
  }
  .right{
      width: 26%;
      height: 100%;
      display: flex;
      display: flex;
      justify-content: flex-end;
  }
  #middleOption{
    width: 14%;
    text-align: center;
    line-height: 69px;
    font-size: 16px;
    color: #333333;
  }
  #middleOption .router-link-active{ color: #409EFF;}
  #rightOption .router-link-active{ color: #409EFF;}
  #rightOption{
      width: 14%;
      text-align: center;
      line-height: 69px;
      font-size: 16px;
      color: #333333;
  }
  a{
      text-decoration:none
   }
  a:link { 
     color: #000000; 
     text-decoration: none; 
}  
  a:visited { 
     color: #000000; 
     text-decoration: none; 
}  
  a:hover { 
     color: #409EFF; 
     text-decoration: none; 
} 
</style>
