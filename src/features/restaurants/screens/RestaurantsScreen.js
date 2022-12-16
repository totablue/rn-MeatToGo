import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/RestaurantsInfoCard";
import { SafeArea } from "../../../components/utilities/SafeArea";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const RestaurantsScreen = () => {
    const restaurantContext = useContext(RestaurantContext);
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>

            <FlatList
                data={restaurantContext.restaurants}
                renderItem={() => <RestaurantInfoCard />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
};

export default RestaurantsScreen;
