<template>
    <div>
        <Header/>
        <div class="container main-container">
           <el-row>
              <el-button>
                  <router-link to="/account/overview">账户总览</router-link>
              </el-button>
              <el-button>
                  <router-link to="/account/transaction">我的交易</router-link>
              </el-button>
              <el-button>
                  <router-link to="/account/subscription">我的认购</router-link>
              </el-button>
              <el-button>
                  <router-link to="/account/setup">账户设置</router-link>
              </el-button>
           </el-row>
           <div class='right'>
               <router-view></router-view>
           </div>
         </div>
         <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    name:'Account',
    components:{
       Header,
       Footer
   }
}
</script>

<style scoped>
.container{margin-bottom: 655px;display: flex;}
.el-row {display: flex;flex-direction: column;margin-top: 45px;width: 20%;}
.el-button+.el-button{margin-left: 0px;}
.el-button{margin: 0 0 12px 0;width: 150px;}
.right{width: 80%;margin-top:45px;}
.el-row .router-link-active{ color: #409EFF;}
a{text-decoration:none}
a:link { color: #606266; text-decoration: none; }  
a:visited { color: #606266; text-decoration: none; }  
a:hover { color: #409EFF; text-decoration: none; } 
</style>
