<template>
  <div class="main">
    <h1 class="main-tilte">コメント</h1>
    <div class="postarea">
      <div class="postlogo">
        <p class="postname">{{$store.state.show.data[0].postname}}</p>
        <div class="heartimg" @click="count($store.state.show.data[0].id)">
          <heart></heart>
        </div>
        <div class="count">{{$store.state.show.data[0].count}}</div>
        <!-- <div class="count">{{$store.state.show.data[0].id}}</div> -->
        <div class="crossimg" @click="del($store.state.show.data[0].id)">
          <cross></cross>
        </div>
        <div class="detailimg">
          <detail></detail>
        </div>
      </div>
      <p class="postcontent">{{$store.state.show.data[0].content}}</p>
    </div>
    <h2 class="sub-tilte">コメント</h2>
    <div class="Commentarea" v-for="comment in $store.state.show.param" :key="comment.id">
      <div class="Commentcontent">
      <p class="commentname">{{comment.commentname}}</p>
      <p class="commentname">{{comment.comment}}</p>
      </div>
    </div>
    <!-- <p>{{$store.state.postComment}}</p> -->
    <validation-observer ref="obs" v-slot="ObserverProps" class="observer">
      <validation-provider v-slot="ProviderProps" rules="required|max:120" class="provider">
    　　<textarea class="comment-input" cols="50" rows="2" v-model="comment" name="コメント"></textarea>
     　 <div class="error">{{ ProviderProps.errors[0] }}</div>
      </validation-provider>
      <button class="button" @click="CommentAction" :disabled="ObserverProps.invalid || !ObserverProps.validated">コメント</button>
    </validation-observer>
  </div>
</template>

<script>
export default {
  layout:'home',
  data() {
    return {
      comment:"",
    }
  },
  methods: {
     count(id){
        this.$store.dispatch('showCount',id)
    },
      del(id){
        this.$store.dispatch('showDel',id)
        },
      CommentAction(){
        this.$store.dispatch('postComment',this.comment)
      }
  }
}
</script>

<style>
  .main{
    /* border: white solid;  */
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  .main-tilte{
    margin-top: 0px;
    padding: 10px;
    border-bottom: solid white 0.5px;
    border-left: white solid 0.5px;
  }

  .postarea{
    padding: 10px;
    border-bottom: solid white 0.5px;
  }

.postlogo{
  display: flex;
  align-items: center;
}

  .postcontent{
    margin-top: 10px;
    /* margin-bottom: 10px; */
  }
  .error{
    color: red;
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

  .sub-tilte{
    text-align: center;
    padding: 10px;
    border-bottom: white solid 0.5px;
    border-left: white solid 0.5px;
   /* border-bottom: white solid; */
  }

  .comment-input{
    width: 90%;
    background: black;
    color: white;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .Commentarea{
    border-left: black;
  }

    .button{
    width: 20%;
    height: 30px;
    border: blue;
    background: blue;
    color: white;
    border-radius: 10px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: 0px;
    cursor: pointer;
  }
  .Commentcontent{
    /* border: solid white 0.5px; */
    border-left: white solid 0.5px;
    border-bottom: white solid 0.5px;
    padding: 10px;
  }

</style>
