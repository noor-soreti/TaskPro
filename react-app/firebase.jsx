// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAl233ZhHVEVDcUx4CzPKf4rQB7N6khSp0",
    authDomain: "react-app-dd4a6.firebaseapp.com",
    projectId: "react-app-dd4a6",
    storageBucket: "react-app-dd4a6.appspot.com",
    messagingSenderId: "225505533450",
    appId: "1:225505533450:web:908c276e0b3351185cc9f3",
    measurementId: "G-41TPEHLX5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);