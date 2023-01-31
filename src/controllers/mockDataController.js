import { getMockDataRequest } from "../services/mockDataService";

export const getMockData = () => {
    return new Promise((resolve, reject) => {
        let getMockDataPromise = getMockDataRequest();
        getMockDataPromise.then((result) => {
            resolve(result.data.products);
        }, (error) => {
            reject(error);
        });
    })
}