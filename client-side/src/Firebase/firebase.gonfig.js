// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9GIIehcx90zeuBu9gqcKtXbb_vsIZrns",
  authDomain: "coffee-shop-bf90d.firebaseapp.com",
  projectId: "coffee-shop-bf90d",
  storageBucket: "coffee-shop-bf90d.appspot.com",
  messagingSenderId: "352233391649",
  appId: "1:352233391649:web:da4c269dfff5983d248560",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
