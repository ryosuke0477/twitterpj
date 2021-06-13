<template>
  <div class="register">
    <top></top>
    <div class="register-content">
      <div class="register-card">
        <h1 class="register-title">新規登録</h1>
          <div class="form">
            <validation-observer ref="obs" v-slot="ObserverProps" class="observer">
              <validation-provider v-slot="ProviderProps" rules="required|max:20" class="provider">
                <input v-model="name" type="text" placeholder="ユーザーネーム" class="register-name" name="ユーザーネーム">
                <div class="error">{{ ProviderProps.errors[0] }}</div>
              </validation-provider>
              <validation-provider v-slot="ProviderProps" rules="required" class="provider">
              <input v-model="email" type="email" placeholder="メールアドレス" class="register-mail" name="メールアドレス">
                <div class="error">{{ ProviderProps.errors[0] }}</div>
              </validation-provider>
              <validation-provider v-slot="ProviderProps" rules="required|min:6" class="provider">
              <input v-model="password" type="password" placeholder="パスワード" class="register-pass" name="パスワード">
                <div class="error">{{ ProviderProps.errors[0] }}</div>
              </validation-provider>
              <button type="button" class="register-button" @click="register" :disabled="ObserverProps.invalid || !ObserverProps.validated">新規登録</button>
        </validation-observer>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data(){
    return{
      name: null,
      email: null,
      password: null,
    }
  },
   methods: {
    register() {
      if (!this.name || !this.email || !this.password) {
        alert('ユーザーネームまたはメールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user.sendEmailVerification().then(() => {
            var user = firebase.auth().currentUser;
            user.updateProfile({
              displayName: this.name,
            })
            this.$router.replace('/confirm')
          })
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/email-already-in-use':
              alert('このメールアドレスはすでに使われています。')
              break
            case 'auth/weak-password':
              alert('パスワードは6文字以上で入力してください。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
      //  this.$store.commit('add',{name: this.name, mail: this.email});
    },
  },
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

  .register-name,.register-mail,.register-pass{
    margin-top: 10px;
    margin-bottom: 10px;
    /* margin-left: 40px; */
    width: 60%;
    border: solid 1px;
    border-radius: 10px;
    height: 25px;
  }

  .register-button{
    width: 30%;
    height: 30px;
    border: blue;
    background: blue;
    color: white;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
  }

  .error{
    color: red;
  }

.observer{
  width: 100%;
  /* border: solid; */
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
}

.provider{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
}

</style>
