<template>
    <div>
         <Header/>
        <div class="container main-container">
           <h1 class="page-title">找回密码</h1>
           <el-form ref="form" :model="form" style="padding: 0 267px 0 230px;margin-top:70px;">
              <el-form-item label="手机号" label-width="100px">
                 <el-input v-model="form.phone" placeholder="请输入手机号码" ></el-input>
              </el-form-item>
              <el-form-item label="图形验证码" label-width="100px">
                 <el-input v-model="form.txCode" style="width: 50%;" placeholder="不区分大小写"></el-input>
                 <div style='margin-right:57px;display:flex;align-items:center;float:right;'>
                    <Sidentify :identifyCode="identifyCode"></Sidentify>
                    <a  style="margin-left:38px;color:#409EFF;" @click="refreshCode">换一张</a>
                 </div>
              </el-form-item>
              <el-form-item label="手机验证码" label-width="100px">
                 <el-input v-model="form.phCode" style="width: 50%;" placeholder="请输入6位手机验证码"></el-input>
                 <el-button @click="addDomain" style='margin-left: 95px;'>发送验证码</el-button>
              </el-form-item>
              <el-form-item label="新密码" label-width="100px">
                 <el-input v-model="form.psd" placeholder="长度6-50个字符。须包含字母和数字。"></el-input>
              </el-form-item>
              <el-form-item style="display: flex;justify-content:center;margin-top: 52px;" >
                  <el-button type="primary" @click="onSubmit" style="width:257px;height:47px;font-size:20px">保存</el-button>
              </el-form-item>
           </el-form>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidentify from '@/components/Canvas';
export default {
    name:'Signup',
    components:{
       Header,
       Footer,
       Sidentify
   },
    data() {
       return {
        form: {
          phone: '',
          psd:'',
          txCode:'',
          phCode:''
        },
         identifyCodes: "1234567890",
         identifyCode: "",
      }
     
    },
    mounted() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
           this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
    }
}
</script>

<style scoped>
.container{margin-bottom: 200px;}
.page-title {font-size: 34px;font-weight: 600; height: 49px; line-height: 49px;margin-top: 27px;margin-bottom: 32px;}
.el-form-item{margin-bottom: 40px}
.el-form-item__label{font-size: 17px;}
.xieyi{font-size: 13px;text-align: left;padding-left: 102px;margin-top: -15px;}
.xieyi span{color:#409EFF;}
.el-form-item__content{display: flex};
a{text-decoration:none;cursor:pointer};
a:link { color: #000000; text-decoration: none; }  
a:visited { color: #000000; text-decoration: none; }  
a:hover { color: #999999; text-decoration: underline;cursor:pointer } 
</style>
