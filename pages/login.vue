<template>
  <div class="login">
    <top></top>
    <div class="login-content">
      <div class="login-card">
        <h1 class="login-title">ログイン</h1>
        <div class="form">
          <validation-observer ref="obs" v-slot="ObserverProps" class="observer">
           <validation-provider v-slot="ProviderProps" rules="required" class="provider">
            <input v-model="email" type="email" placeholder="メールアドレス" class="mail" name="メールアドレス">
            <div class="error">{{ ProviderProps.errors[0] }}</div>
           </validation-provider>
           <validation-provider v-slot="ProviderProps" rules="required" class="provider">
            <input v-model="password" type="password" placeholder="パスワード" class="pass" name="パスワード">
            <div class="error">{{ ProviderProps.errors[0] }}</div>
           </validation-provider>
           <button @click="login" class="button"  :disabled="ObserverProps.invalid || !ObserverProps.validated">ログイン</button>
         </validation-observer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('ログインが完了しました')
          this.$router.push('/home')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            case 'auth/wrong-password':
              alert('パスワードが間違っております。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
          this.$store.commit('login',this.email);
    },
  },
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
    cursor: pointer;
  }

  .login-nuxt{
    color: white;
    text-decoration-line: none;
  }

</style>
