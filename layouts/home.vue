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
        <NuxtLink to = "/home" class="nuxt"><p class="home_p">ホーム</p></NuxtLink>
      </div>
      <div class="img-part">
        <div class="outimg">
          <out></out>
        </div>
        <p class="home_p" @click="logout">ログアウト</p>
      </div>
      <p class="input-title">シェア</p>
       <validation-observer ref="obs" v-slot="ObserverProps" class="observer">
         <validation-provider v-slot="ProviderProps" rules="required|max:120" class="provider">
            <textarea class="home-input" cols="50" rows="2" name="投稿" v-model="content"></textarea>
            <div class="error">{{ ProviderProps.errors[0] }}</div>
        </validation-provider>
        <button class="button" @click="PostAction" :disabled="ObserverProps.invalid || !ObserverProps.validated">シェアする</button>
      </validation-observer>
      <!-- <p>{{ message }}</p>
      <p>{{ content }}</p>
      <p>{{ user }}</p> -->
    </div>
    <div class="twitter-contet">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      message: 'ログインができておりません',
      username: this.$store.state.login,
      content:"",
      // user:firebase.auth().currentUser
      // user:firebase.auth().currentUser.email,
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.message = user.email+"がログイン中です"
        }
    })
    // this.getPost();
    this.$store.dispatch('getPost')
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('ログアウトが完了しました')
          this.$router.replace('/')
        })
    },

     PostAction(){
        this.$store.dispatch('insertPost',{postname: this.$store.state.login.name, content: this.content})
     },
    //  refresh(){
    //    this.$store.commit("refresh")
    //  }
  }
}
</script>

<style scoped>
  /* @import "./assets/style/reset.css"; */

  .home{
    width: 100%;
    height: 100vh;
  overflow: scroll;
    background: black;
    color: white;
    border:none;
    display: flex;
  }
  .twitter-contet{
    width: 75%;
  }

  .sidebar{
    width: 25%;
    display: flex;
    flex-direction: column;
    /* border: solid white; */
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
    cursor: pointer;
  }

  .input-title{
    margin-left: 10px;
    margin-top: 10px;
  }

  .home-input{
    height: 150px;
    width: 90%;
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
    cursor: pointer;
  }

</style>
