<template>
  <div class="header">
    <div class="img">
      <NuxtLink to = "/" class="nuxt"><img src="/img/logo.png"></NuxtLink>
    </div>
    <div class="header-list">
      <ul>
        <li><NuxtLink to = "/register" class="nuxt">新規登録</NuxtLink></li>
        <li><NuxtLink to = "/login" class="nuxt">ログイン</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid;
    /* margin: 40px; */
    background: black;
  }

  .img{
    width: 10%;
    /* padding-top: 20px; */
  }

  img{
    width: 100%;
  }


  ul{
    display: flex;
  }

  li{
    color: white;
    font-size: 15px;
    list-style: none;
    margin-right: 30px;
  }

  
  .nuxt{
    text-decoration: none;
    color: white;
  }

</style>
