import { loginRequest } from "../services/firebase/firebase";

export const checkToken = () => {
    return localStorage.getItem("userToken");
}

export const setToken = (token) => {
    localStorage.setItem("userToken", token);
}

export const deleteToken = () => {
    localStorage.removeItem("userToken");
}

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