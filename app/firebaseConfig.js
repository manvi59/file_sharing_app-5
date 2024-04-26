// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7w2ZQeBailJq4O5GnDbIG2Ocj1qe_Uzs",
  authDomain: "file-sharing-app-764d8.firebaseapp.com",
  projectId: "file-sharing-app-764d8",
  storageBucket: "file-sharing-app-764d8.appspot.com",
  messagingSenderId: "151046814287",
  appId: "1:151046814287:web:bec601daa404c7074ac83a",
  measurementId: "G-0QTEST70C7"
};

//Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export  const analytics = getAnalytics(app);



//====================================================file sharing app 2====================================================

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCAOrVmg7QtiaAoMKx0j9KfFAy5Yq5sWGw",
//   authDomain: "file-sharing-2.firebaseapp.com",
//   projectId: "file-sharing-2",
//   storageBucket: "file-sharing-2.appspot.com",
//   messagingSenderId: "487890921933",
//   appId: "1:487890921933:web:54d1ec1fddf8ad16d5fc84",
//   measurementId: "G-YNWW5QVLSC"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);