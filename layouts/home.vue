<template>
  <div class="home">
    <div class="sidebar">
      <div class="shareimg">
        <share></share>
      </div>
      <div class="img-part">
        <div class="homeimg">
          <homelogo></homelogo>
        </div>
        <p class="home_p">ホーム</p>
      </div>
      <div class="img-part">
        <div class="outimg">
          <out></out>
        </div>
        <p class="home_p">ログアウト</p>
      </div>
      <p class="input-title">シェア</p>
      <textarea class="home-input" cols="50" rows="2"></textarea>
      <button class="button">シェアする</button>
    </div>
    <div class="twitter-contet">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
  /* @import "./assets/style/reset.css"; */
  .home{
    width: 100%;
    height: 100vh;
    background: black;
    color: white;
    display: flex;
  }
  .twitter-contet{
    width: 75%;
  }

  .sidebar{
    width: 25%;
    display: flex;
    flex-direction: column;
    border: solid white;
  }

  .shareimg{
    width: 40%;
    margin-top: 10px;
  }

  .img-part{
    display: flex;
    align-items: center;
    margin: 10px 3px;
  }

  .homeimg{
    width: 10%;
  }
  .outimg{
    width: 10%;
  }

  .home_p{
    display: inline;
    color: white;
    margin-left: 20px;
  }

  .input-title{
    margin-left: 10px;
    margin-top: 10px;
  }

  .home-input{
    height: 150px;
    border-color: white;
    background: black;
    color: white;
    margin: 10px;
    border-radius: 10px;
  }

  .button{
    width: 40%;
    height: 30px;
    border: blue;
    background: blue;
    color: white;
    border-radius: 10px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: 0px;
  }

</style>
