const { initializeApp } =require("firebase/app")
const { getStorage } =require("firebase/storage")

const firebaseConfig = {
  apiKey: "AIzaSyC04bbSEkJlZVX26Ud08YnbrCWoEHzwOOg",
  authDomain: "aura-4ac14.firebaseapp.com",
  projectId: "aura-4ac14",
  storageBucket: "aura-4ac14.appspot.com",
  messagingSenderId: "751817212564",
  appId: "1:751817212564:web:a462046e4d9ec1e34cea81",
  measurementId: "G-0PLP3QPBSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://aura-4ac14.appspot.com");
module.exports=storage