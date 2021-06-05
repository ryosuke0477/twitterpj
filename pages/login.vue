<template>
  <div class="login">
    <top></top>
    <div class="login-content">
      <div class="login-card">
        <h1 class="login-title">ログイン</h1>
        <div class="form">
          <input type="text" placeholder="メールアドレス" class="mail">
          <input type="text" placeholder="パスワード" class="pass">
          <button class="button"><NuxtLink to = "/home" class="login-nuxt">ログイン</NuxtLink></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .login{
    height: 100vh;
    background: black;
  }

    .login-content{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 60%;
    /* background: black;  */
  }

  .login-card{
      background: white;
      width: 30%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      border-radius: 10px;
  }

  .login-title{
      margin: 20px;
  }

  .form{
    width: 100%;
    /* border: solid; */
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
  }

  .mail,.pass{
    margin-top: 10px;
    margin-bottom: 10px;
    /* margin-left: 40px; */
    width: 70%;
    border: solid 1px;
    border-radius: 10px;
    height: 25px;
  }

  .button{
    width: 20%;
    height: 30px;
    border: blue;
    background: blue;
    color: white;
    border-radius: 10px;
    margin-top: 10px;
  }

  .login-nuxt{
    color: white;
    text-decoration-line: none;
  }

</style>
