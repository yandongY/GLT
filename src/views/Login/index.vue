<template>
    <div>
        <Header/>
        <div class="container main-container">
           <h1 class="page-title">登录</h1>
           <el-form ref="form" :model="form" style="padding: 0 267px 0 230px;margin-top:70px;">
              <el-form-item label="手机号" label-width="100px">
                 <el-input v-model="form.phone" placeholder="请输入手机号码" ></el-input>
              </el-form-item>
              <el-form-item label="密码" label-width="100px">
                 <el-input v-model="form.psd" placeholder="长度6-50个字符。须包含字母和数字。"></el-input>
              </el-form-item>
              <div id="wjpsd" style="text-align:right;color:#409EFF;">
                  <a @click="findPsd">忘记密码?</a>
              </div>
              <el-form-item style="display:flex;justify-content:center;margin-top:20px;" >
                  <el-button type="primary" @click="onSubmit" style="width:257px;height:47px;font-size:20px">登录</el-button>
              </el-form-item>
           </el-form>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    name:'Login',
    components:{
       Header,
       Footer
   },
   data() {
       return {
        form: {
          phone: '',
          psd:'',
        },
      }
    },
    methods:{
        findPsd(){
            this.$router.push('/password');
        }
    }
}
</script>

<style scoped>
.container{margin-bottom: 280px;}
.page-title {font-size: 34px;font-weight: 600; height: 49px; line-height: 49px;margin-top: 27px;margin-bottom: 32px;}
.el-form-item{margin-bottom: 40px}
.el-form-item__label{font-size: 17px;}
.xieyi{font-size: 13px;text-align: left;padding-left: 102px;margin-top: -15px;}
.wjpsd a{color:#409EFF;} 
a{color:#409EFF;text-decoration:none;cursor:pointer};
a:link {color:#409EFF;text-decoration: none; }  
a:visited {color:#409EFF;text-decoration: none; }  
a:hover {color:#409EFF;text-decoration: none;cursor:pointer }
</style>