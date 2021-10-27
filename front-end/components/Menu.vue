<template>
  <header>
    <img src="" alt="Logotipo">
  <div class="nav">
    <Button class="btn" type="primary" rel="noopener noreferrer" :to="`/login`">
      Login
    </Button>
  </div>
  </header>
</template>

<style>
  header{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;

    background-color: var(--yellow);
  }
  header img{
    width: 50px;
    height: 50px;
  }
  header .btn{
    width: 100px;
    margin: 5px;
    border: none;
    background-color: var(--red);
  }
    header .btn:hover{
      background-color: var(--white);
      color: var(--red);
      border: 1px solid var(--red);
    }
  
</style>
