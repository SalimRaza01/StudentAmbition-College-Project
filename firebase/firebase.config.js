import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBFu_uWKEWZVJSdpiXcx1eo2C1LhfUFtA8",
  authDomain: "studentambition-5bef4.firebaseapp.com",
  projectId: "studentambition-5bef4",
  storageBucket: "studentambition-5bef4.appspot.com",
  messagingSenderId: "596878620865",
  appId: "1:596878620865:web:791738a380a35a24b37c40",
  measurementId: "G-96PJ70VM7P"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

