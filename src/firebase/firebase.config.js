import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyD6KFDeV5oSn1tu13df5enatkUCu5PKsdg",
    authDomain: "blood-line-feni.firebaseapp.com",
    projectId: "blood-line-feni",
    storageBucket: "blood-line-feni.appspot.com",
    messagingSenderId: "683348567069",
    appId: "1:683348567069:web:ca0dbc7a26ca0391d492f4"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  export { auth, provider, signInWithRedirect, signOut };