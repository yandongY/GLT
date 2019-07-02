<template>
    <div>
    <Header/>
        <div class="container main-container">
           帮助
         </div>
         <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    name:'Help',
    components:{
       Header,
       Footer
   },

}
</script>

<style scoped>
.container{
      margin-bottom: 655px;
      text-align: center;
  }
</style>
