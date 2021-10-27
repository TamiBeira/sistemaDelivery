<template>
  <div class="container">
    <main>
      <form action="" method="get">
        <h3>Login</h3>
        <span>Email:</span>
        <input type="email" placeholder="Email">
        <span>Senha:</span>
        <input type="password" placeholder="Senha">
        <input type="submit" value="Logar">
      </form>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container main form{
    background-color: var(--white);
    border: 2px solid var(--corBorda);
    border-radius: 10px;
    height: 250px;
    padding: 20px;
  }
  .container main form h3{
    text-align: center;
  }
  .container main form span{
    margin: 5px 0 5px 0;
  }
  .container main{
    border: none;
  }
  .container main form input{
    width: 100%;
    padding: 5px;
    border: 1px solid var(--blue);
    border-radius: 5px;
  }
  .container main form input[type="submit"]{
    width: 100px;
    margin-top: 5px;

    background-color: var(--blue);

    color: var(--white);
    font-weight: bold;
  }
  .container main form input[type="submit"]:hover{
    background-color: var(--white);
    color: var(--blue);
  }

</style>