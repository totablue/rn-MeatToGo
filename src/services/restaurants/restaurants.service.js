import { mocks } from "./mock/index";
import camelize from "camelize";

export const restaurantsRequest = (location = "41.878113,-87.629799") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("Not Found");
        }
        resolve(mock);
    });
};
restaurantsRequest()
    .then((result) => {
        console.log(camelize(result));
    })
    .catch((err) => console.log(err));
