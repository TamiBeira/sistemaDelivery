<template>
    <div class="container">
      <Menu/>
      <main>
        <img class="fotoG" src="https://t1.rg.ltmcdn.com/pt/images/9/8/3/img_pizza_calabresa_e_mussarela_4389_600.jpg" alt="Foto Produto">
        
      <div class="dados">
        <p><strong>Sabor:</strong> Calabresa</p>
        <p><strong>Descrição:</strong> Calabresa, mussarela, molho de tomate e oregano.</p>
        <p><strong>Valor:</strong> R$23,99</p>
      </div><!--dados-->

      <div class="qtdProd">
        <span><strong>Quantidade:</strong></span>
        <button class="lessProd">-</button>
        <input class="result" type="number" id="qtd" value="1">
        <button class="plusProd">+</button>
        <Button class="btn" type="primary">Add ao carrinho</Button>
        <Button class="btn" type="primary" rel="noopener noreferrer" :to="`/`">Retornar</Button>
      </div><!--qtdProd-->
      </main>
    </div>
</template>

<script>
// import axios from 'axios'
import Menu from '@/components/Menu';
export default {
  components:{
    Menu
  }
  
}
</script>

<style>
.container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.container main{
  width: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin: 30px;
}
.container main .fotoG{
  width: 100%;
  height: 350px;
  border-radius: 0;
}
.container main .dados{
  width: 100%;
  margin: 20px 0 20px 0;
}
.container main .qtdProd{
  width: 100%;
}
.container main .qtdProd input[type=number], .lessProd, .plusProd{
  width: 40px;
  text-align: center;

  color: #2d8cf0;
  border: 1px solid #2d8cf0;
  border-radius: 5px;
  padding: 1px;
}
.container main .qtdProd .lessProd, .plusProd{
  cursor: pointer;
}
.container main .qtdProd .lessProd:hover, .plusProd:hover{
  color: #ffffff;
  background-color: #2d8cf0;
  border: 1px solid #2d8cf0;
}
.container main .qtdProd input[type=number]::-webkit-inner-spin-button { 
-webkit-appearance: none;
}
.container main .qtdProd input[type=number] { 
  -moz-appearance: textfield;
  appearance: textfield;
}

/**/
@media only screen and (max-width: 600px) {
  .container main .fotoG{
     width: 100%;
     height: 250px;
   }
  .container main .qtdProd .btn{
    margin-top: 5px;
  }
}
@media only screen and (max-width: 425px){
    .container main .fotoG{
     width: 100%;
     height: 150px;
   }
}

</style>