// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp_0wmPzvQK139EwzjHAN0mizAIaI_CFY",
  authDomain: "inventory-management-cb0ec.firebaseapp.com",
  projectId: "inventory-management-cb0ec",
  storageBucket: "inventory-management-cb0ec.appspot.com",
  messagingSenderId: "580929712770",
  appId: "1:580929712770:web:3760f97b31dd7ef380ba9b",
  measurementId: "G-0WN1GWYQC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }