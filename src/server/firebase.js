import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcNPWoj1VAFbaz7ucsd_1calHjgd9ZHMc",
  authDomain: "healthpet-8d4f0.firebaseapp.com",
  databaseURL: "https://healthpet-8d4f0.firebaseio.com",
  projectId: "healthpet-8d4f0",
  storageBucket: "healthpet-8d4f0.appspot.com",
  messagingSenderId: "369099047035",
  appId: "1:369099047035:web:dece345884b553b32122de",
  measurementId: "G-6VPXKTZ4XF",
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.db = app.firestore();
        this.auth = app.auth();
    }

    isInitialized() {
        return new Promise((resolve) => {
            this.auth.onAuthStateChanged(resolve);
        })
    }
}
