<template>
    <div id="setContent">
        <div class="actNumber" style="margin-bottom:13px">
            <span>账号：</span>
            <span>17635369726</span>
        </div>
        <div class="psd" style="margin-bottom:13px;display:flex;line-height: 40px;">
            <div>
               <span>密码：</span>
               <span>******</span>
            </div>
            <el-row style="margin-left:100px;">
                <el-button type="primary" plain>更改密码</el-button>
            </el-row>
        </div>
        <div class="bindWechat" style="margin-bottom:13px">
            <div class="left">
              <span style="margin-bottom:13px;display: block;">绑定微信：</span>
              <img src="/public/img/header.png" alt="" style="margin-bottom:13px;margin-left: 7px;">
              <span style="margin-left: 18px;">昵称</span>
            </div>
            <div class="middle" style="display: flex;margin-left: 119px;">
              <el-row>
                <el-button type="primary" plain>绑定/更换</el-button>
              </el-row> 
            </div>
            <div class="right" style="display: flex;align-items: center;font-size: 14px;margin-left: 30px;">
                <span>*更改微信绑定将7天内无法提款</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
   #setContent{font-size: 20px}
   .bindWechat{display:flex;}
   .bindWechat .middle{align-items: center}
</style>
