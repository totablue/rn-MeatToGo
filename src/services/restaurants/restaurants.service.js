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

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isOpenNow:
                restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily:
                restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });
    console.log(camelize(mappedResults));
    return results;
};
