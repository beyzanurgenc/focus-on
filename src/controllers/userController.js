import { loginRequest } from "../services/firebase/firebase";

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        let loginPromise = loginRequest(email, password);
        loginPromise.then((result) => {
            resolve(result);
        }, (error) => {
            reject(error);
        })
    })
}