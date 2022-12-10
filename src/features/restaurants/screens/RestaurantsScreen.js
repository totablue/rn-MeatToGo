import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/RestaurantsInfoCard";
import { SafeArea } from "../../../components/utilities/SafeArea";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>

            <FlatList
                data={[
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                    { name: 5 },
                    { name: 6 },
                    { name: 7 },
                    { name: 8 },
                    { name: 9 },
                    { name: 10 },
                ]}
                renderItem={() => <RestaurantInfoCard />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
};

export default RestaurantsScreen;
