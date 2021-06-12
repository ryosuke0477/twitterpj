import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
    apiKey: "AIzaSyDNZ-wxxmwRpcjOJK_C0Dis8jAdubVNVkI",
    authDomain: "twitterpj-38a77.firebaseapp.com",
    projectId: "twitterpj-38a77",
    storageBucket: "twitterpj-38a77.appspot.com",
    messagingSenderId: "406695602607",
    appId: "1:406695602607:web:56f5eaeb525a26f989a75a",
    measurementId: "G-K697WLGBRB"
    }
  )
}
  
export default firebase