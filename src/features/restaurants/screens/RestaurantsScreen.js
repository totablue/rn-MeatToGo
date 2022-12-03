import React from "react";
import { SafeAreaView, Text, View, StatusBar, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/RestaurantsInfoCard";

const SafeAreaViewContainer = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
    background-color: blue;
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
    return (
        <SafeAreaViewContainer>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard />
            </RestaurantListContainer>
        </SafeAreaViewContainer>
    );
};

export default RestaurantsScreen;
