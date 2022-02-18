// import  firebase from 'firebase';
// import "firebase/storage";
// import "firebase/firestore"

import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA0oZgnfaNiyy8RyjkAcA_ZWO3kC2DlCb0",
    authDomain: "facebook-clone-a2a86.firebaseapp.com",
    projectId: "facebook-clone-a2a86",
    storageBucket: "facebook-clone-a2a86.appspot.com",
    messagingSenderId: "527991693315",
    appId: "1:527991693315:web:7e24aee45c6f8442cbee36"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage = app.storage();

  export { db, storage };
// export default function initFirebase() {
//   if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig)
  
//       console.log('Firebase was successfully init.')
//   }
// }
