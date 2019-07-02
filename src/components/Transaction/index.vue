<template>
        <div>
             <div class="bottom">
                  <el-table :data="tableData"  max-height="250">
                    <el-table-column prop="type" label="礼包类型" width="160"></el-table-column>
                    <el-table-column prop="No" label="编号" width="160"></el-table-column>
                    <el-table-column prop="bonus" label="礼包奖金" width="160" sortable></el-table-column>
                    <el-table-column prop="offer" label="当前出价" width="160" sortable></el-table-column>
                    <el-table-column prop="time" label="出价时间" width="160" sortable></el-table-column>
                  </el-table>
              </div>
       </div>
</template>

<script>
export default {
    name:'Transaction',
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
       show:true,
       CountDown:'',
      }
    },
}
</script>

<style scoped>
 .el-table{width: 88%;}
</style>
