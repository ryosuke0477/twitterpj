<template>
  <div class="main">
    <h1 class="main-tilte">ホーム</h1>
    <!-- <p>{{$store.state.test}}</p> -->
    <div v-for="data in $store.state.datas" :key="data.id" class="postarea">
      <div class="postlogo">
        <p class="postname">{{data.postname}}</p>
        <div class="heartimg" @click="count(data.id)">
          <heart></heart>
        </div>
        <div class="count">{{data.count}}</div>
        <div class="count">{{data.id}}</div>
        <div class="crossimg" @click="del(data.id)">
          <cross></cross>
        </div>
        <div class="detailimg" @click="show(data.id)">
          <detail></detail>
        </div>
      </div>
      <p class="postcontent">{{data.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout:'home',
  // created() {
  //   this.$store.dispatch('getIf')
  // },
  methods: {
     count(id){
        this.$store.dispatch('getCount',id)
    },
    //  cut(id){
    //     this.$store.dispatch('CutCount',id)
    // },
      del(id){
        this.$store.dispatch('postDel',id)
    },
      show(id){
        this.$store.dispatch('postShow',id)
    },
  }
}
</script>

// <style>
  .main{
    /* border-left: white solid 0.5px; */
    display: flex;
    flex-direction: column;
    justify-content: left;

  }

  .main-tilte{
    margin-top: 0px;
    padding: 10px;
    border-bottom: white solid 0.1px;
    border-left: white solid 0.5px;
  }

  .postarea{
    padding: 10px;
    border-bottom: white solid 0.1px;
    border-left: white solid 0.5px;
  }

.postlogo{
  display: flex;
  align-items: center;
}

  .postcontent{
    margin-top: 10px;
    /* margin-bottom: 10px; */
  }

  .heartimg,.crossimg{
    width: 20px;
    margin-left: 10px;
    cursor: pointer;
  }

  .detailimg{
    width: 20px;
    margin-left: 40px;
    cursor: pointer;
  }

  .count{
    margin-left: 5px;
  }

</style>
