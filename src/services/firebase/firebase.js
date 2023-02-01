import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfS5RWx6j8j08s4Wp0BortY6SFDc19gnM",
    authDomain: "focus-on-a364d.firebaseapp.com",
    projectId: "focus-on-a364d",
    storageBucket: "focus-on-a364d.appspot.com",
    messagingSenderId: "202397854876",
    appId: "1:202397854876:web:66be80c1a2b9896b4fd159",
    measurementId: "G-4DNTBHJ8Q2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const loginRequest = (email, password) => {
    return new Promise((resolve, reject) => {
        let signInPromise = signInWithEmailAndPassword(auth, email, password);
        signInPromise.then((userCredentials) => {
            resolve(userCredentials);
        }).catch((error) => {
            reject(error);
        });
    });
}

export default app;