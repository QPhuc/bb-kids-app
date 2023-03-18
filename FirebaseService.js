// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAivutw2OKcEsGAaG_kL8fiDaE1S7CWOVA",
    authDomain: "bbkids-4730a.firebaseapp.com",
    projectId: "bbkids-4730a",
    storageBucket: "bbkids-4730a.appspot.com",
    messagingSenderId: "901836433228",
    appId: "1:901836433228:web:23ab7aa12c01dd1f9f51e9",
    measurementId: "G-HGBGYKDHTG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);