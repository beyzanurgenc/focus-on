import axios from "axios";

export const getMockDataRequest = () => {
    return new Promise((resolve, reject) => {
        let axiosGetMockDataRequest = axios.get(
            "https://dummyjson.com/products"
        );
        axiosGetMockDataRequest.then((result) => {
            resolve(result)
        }, (error) => {
            reject(error);
        })
    });
};