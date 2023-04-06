
  import { initializeApp } from 'firebase/app';
  import {getAuth} from 'firebase/auth'
  import {getFirestore} from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyC9ADLR6veafwz0ZuIh3znHGTWDtkJ0uAU",
    authDomain: "krudblog.firebaseapp.com",
    projectId: "krudblog",
    storageBucket: "krudblog.appspot.com",
    messagingSenderId: "863956114788",
    appId: "1:863956114788:web:270e3d7ea5f95c50c6ae71",
    measurementId: "G-9EDZX3K6N8"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {app, auth, db}