import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    return (
        <RestaurantContext.Provider value={{ restaurants: [1, 2, 3] }}>
            {children}
        </RestaurantContext.Provider>
    );
};
