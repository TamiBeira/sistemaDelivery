<template>
    <div class="cards">
        <img :src="produto.imagem" alt="foto pizza">
    <div class="dados">
        <h3 class="center">{{produto.sabor}}</h3>
        <p class="center">{{produto.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</p>
        <!-- <a :href="`http://localhost:3030/detalhe/${produto._id}`">Mais Detalhes</a> -->
        <Button class="btn center" type="primary" rel="noopener noreferrer" :to="`/detalhe/`">Detalhe</Button>
    </div><!--dados-->
    </div><!--cards-->
</template>

<script>

export default {
    props:{
        produtos: Object,
        produto:[]
    }
}

</script>

<style>
@import "../assets/reset.css";
.cards{
    width: 250px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 10px;
    margin: 10px;
    border: 1px solid var(--corBorda);
    border-radius: 5px;
    box-shadow: 5px 10px 10px var(--boxShadow);
}
img{
    width: 250px;
    height: 150px;
    border-radius: 5px 5px 0 0;
}
.cards .dados{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5px;
}
.cards .dados h3,p{
    width: 100%;
}
.cards .dados a{
    padding: 10px;
    margin-top: 5px;
    border: 0;
    border-radius: 5px;
    background-color: var(--red);
    color: var(--white);
    font-weight: bold;

    cursor: pointer;
}
.cards .dados a:hover{
    background-color: var(--white);
    color: var(--red);
    border: 1px solid var(--red);
}
.btn{
    width: 150px;
}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>