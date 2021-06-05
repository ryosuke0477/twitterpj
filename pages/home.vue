<template>
  <div class="main">
    <h1 class="main-tilte">ホーム</h1>
    <div class="post" id="post" v-for="post in posts" :key="post.id">{{post.comment}}</div>
  </div>
</template>

<script>

export default {
  layout:'home',
  data(){
    return{
      posts:[{
        id:1,
        comment:"テスト１",
        favorite:0
      },
      {
        id:2,
        comment:"テスト２",
        favorite:0
      },
      ]
    }
  }
}

</script>

<style>
  .main{
    border: white solid;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  .main-tilte{
    margin-top: 0px;
    padding: 10px;
    border-bottom: solid white;
  }

  .post{
    border-bottom: solid white;    
  }

</style>
