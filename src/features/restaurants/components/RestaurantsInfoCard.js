import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: white;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover
                key={name}
                source={{ uri: photos[0] }}
            ></RestaurantCardCover>
            <Title>{name}</Title>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;
