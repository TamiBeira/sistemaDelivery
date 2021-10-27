<template>
  <div class="container">
    <Menu/>
    <div class="w33">
      <div v-for="produto in produtos" :key="produto.id">
        <Produtos :produto="produto"/>
      </div>
    </div><!--w33-->
  </div><!--container-->
</template>

<script>
import axios from 'axios';
import Menu from '@/components/Menu.vue';
import Produtos from '@/components/Produtos.vue';

export default {
  name: 'App',
  components: {
    Produtos,
    Menu
  },
  data(){
    return{
      produtos:[]
    }
  },
  created: function(){
    axios.get("http://localhost:3030/").then(res =>{
      this.produtos = res.data
      // console.log(res.data);
    })
  }
}
</script>

<style>
  body{
    background-color: var(--white);
  }
  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .w33{
    width: 950px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>