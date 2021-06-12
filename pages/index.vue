<template>
  <div class="index-main">
    <div class="index-content">
      <div class="index-content_content">
        <h1 class="index-title">Welcome to</h1>
        <div class="shareimg">
          <share></share>
        </div>
        <div class="index-list">
          <ul>
            <li><NuxtLink to = "/register" class="nuxt">新規登録</NuxtLink></li>
            <li><NuxtLink to = "/login" class="nuxt">ログイン</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {}

</script>

<style>
  
  .index-main{
    display: flex;
    justify-content: center;
    /* align-items: center; */
    height: 100vh;
    background: black; 
  }

  .index-content{
    padding: 80px;
    /* border: solid; */
  }


  .index-title{
    margin:100px;
    text-align: center;
    /* height: 100px; */
    /* border: solid white; */
    font-size: 60px;
    color: white;
        display: inline-block;
        position: relative;
        top: -20px;
        left: 60px;
    /* padding: 50px; */
  }

  .index-list{
    display: flex;
    justify-content: center;
  }

  .shareimg{
    display: inline-block;
    width: 30%;
    /* border: white solid; */
    margin-top: 30px;
  }

  li{
    list-style: none;
    margin: 30px;
    display: inline-block;
    font-size: 20px;
  }

  .nuxt{
    text-decoration: none;
    color: white;
  }

</style>
