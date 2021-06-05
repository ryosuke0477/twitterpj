<template>
  <div class="register">
    <top></top>
    <div class="register-content">
      <div class="register-card">
        <h1 class="register-title">新規登録</h1>
        <div class="form">
          <input type="text" placeholder="ユーザーネーム" class="name">
          <input type="text" placeholder="メールアドレス" class="mail">
          <input type="text" placeholder="パスワード" class="pass">
          <button class="button">新規登録</button>
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
  .register{
    height: 100vh;
    background: black;
  }

    .register-content{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 60%;
    /* background: black;  */
  }

  .register-card{
      background: white;
      width: 30%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      border-radius: 10px;
  }

  .register-title{
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

  .name,.mail,.pass{
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

</style>
