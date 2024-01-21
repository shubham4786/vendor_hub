// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ_oNTChnEbJqG1xRloFsF0p0yiNUpeVM",
  authDomain: "vendor-hub-a118f.firebaseapp.com",
  projectId: "vendor-hub-a118f",
  storageBucket: "vendor-hub-a118f.appspot.com",
  messagingSenderId: "1089110879738",
  appId: "1:1089110879738:web:0c5a3d4611b9b5ab494843",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
